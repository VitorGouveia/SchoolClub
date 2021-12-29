import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from "type-graphql";
import { AppContext } from "../types";
import { User } from "../entities";
import { hash } from "argon2";

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
		const userAlreadyExists = await orm.findOne(User, {
			$or: [
				{
					username,
					email,
				},
			],
		});

		if (userAlreadyExists) {
			return {
				errors: [
					{
						field: "username or email",
						message: "User already exists.",
					},
				],
			};
		}

		const hashedPassword = await hash(password);
		console.log(hashedPassword);
		const user = orm.create(User, {
			username,
			email,
			password: hashedPassword,
		});

		try {
			await orm.persistAndFlush(user);
			return {
				user,
			};
		} catch (error) {
			console.error(error);
			// CODE: 23502 -> failed to insert on not null constraint
			switch (error.code) {
				case "23502":
					return {
						errors: [
							{
								field: "user",
								message: "Failed to insert on not null field",
							},
						],
					};
			}

			return {
				errors: [
					{
						field: "user",
						message: error.message,
					},
				],
			};
		}
	}
}
