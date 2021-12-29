import "reflect-metadata";
import "dotenv-safe/config";

import { port } from "./constants";
import { Server } from "./server";

import { MikroORM } from "@mikro-orm/core";
import MikroORMConfig from "./mikro-orm.config";

import { HelloResolver } from "./resolvers";

export const Main = async () => {
	const orm = await MikroORM.init(MikroORMConfig);
	await orm.getMigrator().up();

	const { app } = await Server({
		port,
		resolvers: [HelloResolver],
		context: () => ({
			orm: orm.em,
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
