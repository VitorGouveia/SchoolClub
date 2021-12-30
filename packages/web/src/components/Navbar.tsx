import { FC, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { Center, Divider, Flex } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useMeQuery } from "../generated/graphql";
import { useAuth } from "../hooks";

type NavbarProps = {};

export const Navbar: FC<NavbarProps> = ({}) => {
	const { logout, isAuthenticated, user } = useAuth();

	const [{ data, fetching }] = useMeQuery();

	let body;

	if (fetching) {
		// fetching
	}

	if (!data?.me || !isAuthenticated) {
		// not logged in
		body = (
			<>
				<Link href="/login">
					<Button rounded="md" variant="outline">
						Login
					</Button>
				</Link>
				<Link href="/register">
					<Button
						rounded="md"
						color="white"
						bg="teal.400"
						colorScheme="teal"
						variant="solid"
					>
						Register
					</Button>
				</Link>
			</>
		);
	} else {
		// logged in
		body = (
			<>
				<Button onClick={() => logout()} rounded="md" variant="link">
					Logout
				</Button>
			</>
		);
	}

	return (
		<>
			<Flex alignItems="center" px={6} py={4} w="100%" bg="teal">
				<Flex alignItems="center" ml="auto">
					{isAuthenticated ? (
						<Flex alignItems="center">
							<Link href={`/u/${user?.username}`}>
								<Button>{user?.username}</Button>
							</Link>
							<Center
								ml={4}
								h="32px"
								w="32px"
								rounded="full"
								bg="teal.500"
								p={1}
							>
								<img
									src={`https://avatars.dicebear.com/api/jdenticon/${user?.id}.svg`}
								/>
							</Center>
						</Flex>
					) : null}

					<Center h="3px" height="32px">
						<Divider h="100%" mx={6} orientation="vertical" />
					</Center>

					<Flex gap={3} mx={2}>
						{body}
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
