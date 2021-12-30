import { FC } from "react";
import Head from "next/head";

import { HStack } from "@chakra-ui/react";
import { Navbar } from "../components";
import { useAuth } from "../hooks";

type indexProps = {};

const index: FC<indexProps> = ({}) => {
	const { user } = useAuth();

	return (
		<>
			<Head>
				<title>SchoolClub</title>
			</Head>
			<HStack>
				<Navbar />
			</HStack>
		</>
	);
};

export default index;
