import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Field, ObjectType } from "type-graphql";

export type AppContext = {
	orm: EntityManager<IDatabaseDriver<Connection>>;
	req: Request;
	res: Response;
	payload?: {
		userId: string;
	};
};

@ObjectType()
export class FieldError {
	@Field()
	field: string;
	@Field()
	message: string;
}
