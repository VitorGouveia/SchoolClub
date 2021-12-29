import { AppContext } from "../types";
import { MiddlewareFn } from "type-graphql";
import { verify } from "jsonwebtoken";

export const IsAuth: MiddlewareFn<AppContext> = ({ context }, next) => {
	const authorization = context.req.headers["authorization"];

	if (!authorization) {
		throw new Error("Not authenticated");
	}

	try {
		const [, token] = authorization.split(" ");
		const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
		context.payload = payload as any;
	} catch (error) {
		throw new Error(error.message);
	}

	return next();
};
