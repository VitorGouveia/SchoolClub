import { sign } from "jsonwebtoken";
import { User } from "../entities";

export const createRefreshToken = ({ id: userId, tokenVersion }: User) => {
	return sign({ userId, tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
	});
};
