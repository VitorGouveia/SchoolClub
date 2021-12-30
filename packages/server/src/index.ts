import "reflect-metadata";
import "dotenv-safe/config";

import { port } from "./constants";
import { Server } from "./server";

import { MikroORM } from "@mikro-orm/core";
import MikroORMConfig from "./mikro-orm.config";

import { HelloResolver, UserResolver, AuthResolver } from "./resolvers";

export const Main = async () => {
	const orm = await MikroORM.init(MikroORMConfig);
	await orm.getMigrator().up();

	const { app } = await Server({
		port,
		resolvers: [HelloResolver, UserResolver, AuthResolver],
		context: ({ req, res }) => ({
			orm: orm.em,
			req,
			res,
		}),
	});

	app.get("/", (_, response) => {
		return response.json({
			version: 1,
			message: "hello world, API Live.",
		});
	});
};

Main();
