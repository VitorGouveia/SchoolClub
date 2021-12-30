import {
	Ctx,
	Field,
	ObjectType,
	Query,
	Resolver,
	UseMiddleware,
} from "type-graphql";
import { User } from "../entities";
import { AppContext, FieldError } from "../types";
import { IsAuth } from "../middlewares";

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
