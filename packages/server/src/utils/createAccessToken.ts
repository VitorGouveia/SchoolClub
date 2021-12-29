import { sign } from "jsonwebtoken";
import { User } from "../entities";

export const createAccessToken = ({ id }: User) => {
	return sign({ userId: id }, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "15m",
	});
};
