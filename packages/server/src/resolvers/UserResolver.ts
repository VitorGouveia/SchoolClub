import {
	Arg,
	Ctx,
	Field,
	Mutation,
	ObjectType,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import jwt from "jsonwebtoken";
import { hash, verify } from "argon2";
import { User } from "../entities";
import { AppContext } from "../types";
import {
	createAccessToken,
	createRefreshToken,
	revokeRefreshTokensForUser,
} from "../utils";
import { IsAuth } from "../middlewares";

@ObjectType()
class FieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}

@ObjectType()
class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];

	@Field(() => User, { nullable: true })
	user?: User;

	@Field(() => String, { nullable: true })
	accessToken?: string;
}

@Resolver()
export class UserResolver {
	@Mutation(() => UserResponse)
	async register(
		@Arg("username") username: string,
		@Arg("email") email: string,
		@Arg("password") password: string,
		@Ctx() { orm }: AppContext
	): Promise<UserResponse> {
		// put some validation for the username
		// must be some characters long
		// must not have sexual/violent, explicit in general notation

		// either prefetch the user and see if it exists -> slower
		// or put a try catch on db flush and get the code error for user duplication -> faster
		const errors = [];
		const usernameAlreadyExists = await orm.findOne(User, {
			username,
		});

		if (usernameAlreadyExists) {
			errors.push({
				field: "username",
				message: "Username already taken.",
			});
		}

		const emailAlreadyExists = await orm.findOne(User, {
			email,
		});

		if (emailAlreadyExists) {
			errors.push({
				field: "email",
				message: "E-mail already taken.",
			});
		}

		const hashedPassword = await hash(password);

		const user = orm.create(User, {
			username,
			email,
			password: hashedPassword,
		});

		try {
			await orm.persistAndFlush(user);
		} catch (error) {
			console.log(error);
			// CODE: 23502 -> failed to insert on not null constraint
			if (error.detail.includes("already exists")) {
				return {
					errors: errors,
				};
			}
		}

		const accessToken = createAccessToken(user);

		return {
			user,
			accessToken,
		};
	}

	@Mutation(() => UserResponse)
	async login(
		@Arg("login") login: string,
		@Arg("password") password: string,
		@Ctx() { orm, res }: AppContext
	): Promise<UserResponse> {
		// search a user by or the email or the username

		//first, try to find a user with this login by username
		//first, then by email
		let user: User | null;
		user = await orm.findOne(User, {
			username: login,
		});

		if (!user) {
			user = await orm.findOne(User, {
				email: login,
			});
		}

		const auth_error = {
			errors: [
				{
					field: "login",
					message: "Wrong login.",
				},
			],
		};

		if (!user) {
			return auth_error;
		}

		const comparePasswords = await verify(user.password, password);

		if (!comparePasswords) {
			return {
				errors: [
					{
						field: "password",
						message: "Wrong password.",
					},
				],
			};
		}

		const refreshToken = createRefreshToken(user);
		const accessToken = createAccessToken(user);

		res.cookie("jid", refreshToken, {
			httpOnly: true,
		});

		// send a refresh and access token back
		return {
			user,
			accessToken,
		};
	}

	@Mutation(() => UserResponse)
	async refreshToken(
		@Ctx() { req, orm, res }: AppContext
	): Promise<UserResponse> {
		const token = req.cookies.jid;

		if (!token) {
			return {
				errors: [
					{
						field: "refresh token",
						message: "No refresh token was supplied.",
					},
				],
			};
		}

		type Payload = {
			userId: string;
			tokenVersion: number;
		};

		let payload: Payload;
		try {
			payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET) as Payload;
		} catch (error) {
			return {
				errors: [
					{
						field: "refresh token",
						message: error.message,
					},
				],
			};
		}

		const user = await orm.findOne(User, {
			id: payload.userId,
		});

		if (!user) {
			return {
				errors: [
					{
						field: "refresh token",
						message: "could not find an user.",
					},
				],
			};
		}

		if (user.tokenVersion !== payload.tokenVersion) {
			return {
				errors: [
					{
						field: "refesh token",
						message: "you token is outdated.",
					},
				],
			};
		}

		const refreshToken = createRefreshToken(user);
		const accessToken = createAccessToken(user);

		res.cookie("jid", refreshToken, {
			httpOnly: true,
		});

		return {
			user,
			accessToken,
		};
	}

	@Mutation(() => Boolean)
	@UseMiddleware(IsAuth)
	async logout(
		@Arg("full", { nullable: true }) full: boolean,
		@Ctx() { payload, orm, res }: AppContext
	): Promise<Boolean> {
		if (!full) {
			res.clearCookie("jid");
			return true;
		}

		res.clearCookie("jid");
		revokeRefreshTokensForUser(payload?.userId!, orm);
		// would be good practice to add 1 to user tokenVersion
		// so the user gets logged out of ALL devices, including mobile

		return true;
	}

	@Query(() => UserResponse)
	@UseMiddleware(IsAuth)
	async me(@Ctx() { payload, orm }: AppContext): Promise<UserResponse> {
		const user = await orm.findOne(User, {
			id: payload?.userId,
		});

		if (!user) {
			return {
				errors: [
					{
						field: "id",
						message: "This user doesn't exist.",
					},
				],
			};
		}

		return { user };
	}
}
