import { MikroORM } from "@mikro-orm/core";
import path from "path";

import { __prod__ } from "./constants";
import { User } from "./entities";

// using typescript generic
type ConfigType = Parameters<typeof MikroORM.init>[0];

// getting parameters from @types
// type ConfigType = Options<IDatabaseDriver> | Configuration<IDatabaseDriver>;
export default {
	migrations: {
		path: path.join(__dirname, "./migrations"),
		pattern: /^[\w-]+\d+\.[tj]s$/,
	},
	dbName: "schoolclub",
	type: "postgresql",
	entities: [User],
	debug: !__prod__,
	user: "postgres",
	password: "postgres",
} as ConfigType;
