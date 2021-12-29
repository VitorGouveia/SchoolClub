import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { User } from "../entities";

export const revokeRefreshTokensForUser = async (
	id: string,
	orm: EntityManager<IDatabaseDriver<Connection>>
) => {
	const user = await orm.findOne(User, {
		id,
	});

	if (!user) {
		return false;
	}

	user.tokenVersion += 1;

	await orm.persistAndFlush(user);

	return true;
};
