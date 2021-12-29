import "reflect-metadata";
import "dotenv-safe/config";

import { port } from "./constants";
import { Server } from "./server";

import { HelloResolver } from "./resolvers";

export const Main = async () => {
	const { app } = await Server({
		port,
		resolvers: [HelloResolver],
	});

	app.get("/", (_, response) => {
		return response.json({
			version: 1,
			message: "hello world, API Live.",
		});
	});
};

Main();
