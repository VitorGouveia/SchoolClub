import express from "express";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import { buildSchema, NonEmptyArray } from "type-graphql";
import { ContextFunction } from "apollo-server-core";
import { Context } from "vm";

type ServerProps = {
	port: string;
	resolvers: NonEmptyArray<Function> | NonEmptyArray<string>;
	context?: ContextFunction<ExpressContext, Context> | Context;
};

export const Server = async ({ port, resolvers, context }: ServerProps) => {
	const app = express();

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers,
			validate: false,
		}),
		context,
	});

	await apolloServer.start();

	apolloServer.applyMiddleware({
		app,
	});

	app.listen(port, () => console.log(`[server]: listening on port: ${port}`));

	return {
		app,
		apolloServer,
	};
};
