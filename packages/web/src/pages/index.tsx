import { FC } from "react";

import { useAuth } from "../hooks";

type indexProps = {};

const index: FC<indexProps> = ({}) => {
	const { user } = useAuth();

	if (!user) {
		return (
			<div>
				<h1>loading...</h1>
			</div>
		);
	}

	return (
		<div>
			<h1>hello {user.username}</h1>
		</div>
	);
};

export default index;
