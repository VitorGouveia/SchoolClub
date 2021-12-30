import { createContext, FC, useEffect, useState } from "react";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";

import { toErrorMap } from "../utils/toErrorMap";
import {
	useLoginMutation,
	useLogoutMutation,
	useMeQuery,
	useRefreshTokenMutation,
	useRegisterMutation,
} from "../generated/graphql";

type RegisterProps = {
	email: string;
	username: string;
	password: string;
};

type LoginProps = {
	login: string;
	password: string;
};

type User = {
	id: string;
	username: string;
	email: string;
	createdAt: string;
};

type AuthContextProps = {
	user: User;
	accessToken: string;
	register: (
		data: RegisterProps
	) => Promise<{ errors?: Record<string, string> }>;
	login: (data: LoginProps) => Promise<{ errors?: Record<string, string> }>;
	logout: () => Promise<boolean>;
	isAuthenticated: boolean;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
	const [globalUser, setGlobalUser] = useState<User>(null);
	const [accessToken, setAccessToken] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { push } = useRouter();

	const [, refreshTokenMutation] = useRefreshTokenMutation();
	const [, registerMutation] = useRegisterMutation();
	const [, loginMutation] = useLoginMutation();
	const [, logoutMutation] = useLogoutMutation();

	useEffect(() => {
		const { "schoolclub.token": token } = parseCookies();

		if (!token) {
			setIsAuthenticated(false);
			return;
		}

		const refreshUserToken = async () => {
			const { data } = await refreshTokenMutation();

			const { errors, accessToken, user } = data.refreshToken;
			if (errors) {
				setIsAuthenticated(false);
				push("/login");
				return;
			}

			setGlobalUser(user);
			setAccessToken(accessToken);
			setCookie(undefined, "schoolclub.token", `bearer ${accessToken}`, {
				maxAge: 60 * 5, // 5 minutes
			});
		};

		refreshUserToken();
		setIsAuthenticated(true);
	}, []);

	async function register(props: RegisterProps) {
		const { username, email, password } = props;
		const { data } = await registerMutation({
			username,
			email,
			password,
		});

		// check for errors
		if (data.register?.errors) {
			return {
				errors: toErrorMap(data.register.errors),
			};
			// transform the error to Formik error
		}

		setGlobalUser(data.register?.user);
		setAccessToken(data.register?.accessToken);
		setCookie(undefined, "schoolclub.token", data.register?.accessToken, {
			maxAge: 60 * 5, // 5 minutes
		});
		setIsAuthenticated(true);

		push("/");
	}

	async function login(props: LoginProps) {
		const { login, password } = props;
		const { data } = await loginMutation({
			login,
			password,
		});

		if (data.login?.errors) {
			return {
				errors: toErrorMap(data.login.errors),
			};
		}

		setGlobalUser(data.login?.user);
		setAccessToken(data.login?.accessToken);
		setCookie(
			undefined,
			"schoolclub.token",
			`bearer ${data.login?.accessToken}`,
			{
				maxAge: 60 * 5, // 5 minutes
			}
		);
		setIsAuthenticated(true);

		push("/");
	}

	async function logout() {
		setIsAuthenticated(false);
		setGlobalUser(null);
		setAccessToken("");
		destroyCookie(undefined, "schoolclub.token");

		// call the logout from the API
		const { data } = await logoutMutation({
			full: false,
		});

		return data?.logout;
	}

	return (
		<AuthContext.Provider
			value={{
				register,
				login,
				logout,
				isAuthenticated,
				user: globalUser,
				accessToken,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
