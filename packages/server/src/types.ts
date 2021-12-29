import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";

export type AppContext = {
	orm: EntityManager<IDatabaseDriver<Connection>>;
	req: Request;
	res: Response;
};
