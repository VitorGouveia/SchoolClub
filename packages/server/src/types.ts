import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Response } from "express";

export type AppContext = {
	orm: EntityManager<IDatabaseDriver<Connection>>;
	res: Response;
};
