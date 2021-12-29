import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class HelloResolver {
	@Query(() => String)
	hello(@Arg("name", { nullable: true }) name: string): string {
		if (!name) {
			return "Hello World!";
		}

		return `Hello ${name}`;
	}
}
