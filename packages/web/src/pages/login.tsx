import { FC, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { Formik, Form } from "formik";
import { Wrapper, Input } from "../components";
import { Box, Center, Heading, Divider, HStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { useAuth } from "../hooks";

const RegisterPage: FC = () => {
	const { login } = useAuth();

	return (
		<>
			<Head>
				<title>SchoolClub | Register</title>
			</Head>

			<Center w="100%" h="100%" flex="">
				<Wrapper
					variant="small"
					py={16}
					px={10}
					rounded="md"
					background="blackAlpha.500"
				>
					<Center w="100%">
						<Heading as="h1" size="lg" mb={6}>
							Create your account
						</Heading>
					</Center>

					<Formik
						initialValues={{ login: "", password: "" }}
						onSubmit={async (values, handles) => {
							const { setErrors } = handles;
							const response = await login(values);

							if (response?.errors) {
								setErrors(response.errors);
							}
						}}
					>
						{({ isSubmitting }) => (
							<Form>
								<Box mb={6}>
									<Input
										required
										name="login"
										type="text"
										placeholder="Email, Username, id"
										label="Login"
									/>
								</Box>

								<Input
									required
									name="password"
									type="password"
									placeholder="Set your password"
									label="Password"
								/>
								<Button
									mt={6}
									w="100%"
									type="submit"
									variant="solid"
									colorScheme="teal"
									isLoading={isSubmitting}
								>
									Register
								</Button>
							</Form>
						)}
					</Formik>

					<Divider my={6} orientation="horizontal" />

					<HStack>
						<Heading size="sm" as="h4">
							Already has an account?{" "}
							<Link href="/login">
								<Button
									cursor="pointer"
									as="a"
									colorScheme="teal"
									variant="link"
								>
									Login
								</Button>
							</Link>
						</Heading>
					</HStack>
				</Wrapper>
			</Center>
		</>
	);
};

export default RegisterPage;
