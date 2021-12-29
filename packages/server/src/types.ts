import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export type AppContext = {
	orm: EntityManager<IDatabaseDriver<Connection>>;
};
