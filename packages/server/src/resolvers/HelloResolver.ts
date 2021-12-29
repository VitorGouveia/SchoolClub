import { Arg, Ctx, Query, Resolver } from "type-graphql";

import { User } from "../entities";
import { AppContext } from "../types";

@Resolver()
export class HelloResolver {
	@Query(() => String)
	hello(@Arg("name", { nullable: true }) name: string): string {
		if (!name) {
			return "Hello World!";
		}

		return `Hello ${name}`;
	}

	@Query(() => [User])
	getUsers(@Ctx() { orm }: AppContext): Promise<User[]> {
		return orm.find(User, {});
	}
}
