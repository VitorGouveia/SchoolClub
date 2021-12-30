import { createContext, FC, useEffect, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/router";

import { toErrorMap } from "../utils/toErrorMap";
import {
	useLoginMutation,
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
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider: FC = ({ children }) => {
	const [globalUser, setGlobalUser] = useState<User>(null);
	const [accessToken, setAccessToken] = useState("");
	const { push } = useRouter();

	const [, refreshTokenMutationFn] = useRefreshTokenMutation();
	const [, registerMutationFn] = useRegisterMutation();
	const [, loginMutationFn] = useLoginMutation();

	useEffect(() => {
		const { "schoolclub.token": token } = parseCookies();

		if (!token) {
			return;
		}

		const refreshUserToken = async () => {
			console.log("hey");
			const { data } = await refreshTokenMutationFn();

			const { errors, accessToken, user } = data.refreshToken;
			if (errors) {
				push("/login");
				return;
			}

			setGlobalUser(user);

			setAccessToken(accessToken);
			setCookie(undefined, "schoolclub.token", accessToken, {
				maxAge: 60 * 5, // 5 minutes
			});
		};

		refreshUserToken();
	}, []);

	async function register(props: RegisterProps) {
		const { username, email, password } = props;
		const { data } = await registerMutationFn({
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

		setAccessToken(data.register?.accessToken);
		setCookie(undefined, "schoolclub.token", data.register?.accessToken, {
			maxAge: 60 * 5, // 5 minutes
		});

		push("/");
	}

	async function login(props: LoginProps) {
		const { login, password } = props;
		const { data } = await loginMutationFn({
			login,
			password,
		});

		if (data.login?.errors) {
			return {
				errors: toErrorMap(data.login.errors),
			};
		}

		setAccessToken(data.login?.accessToken);
		setCookie(undefined, "schoolclub.token", data.login?.accessToken, {
			maxAge: 60 * 5, // 5 minutes
		});

		push("/");
	}

	return (
		<AuthContext.Provider
			value={{ register, login, user: globalUser, accessToken }}
		>
			{children}
		</AuthContext.Provider>
	);
};
