import { FC } from "react";

import { Formik, Form } from "formik";
import { Wrapper, Input } from "../components";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { useMutation } from "urql";

type indexProps = {};

const index: FC<indexProps> = ({}) => {
	const [] = useMutation(`
    
  `);

	return (
		<Wrapper variant="small">
			<Formik
				initialValues={{ username: "", password: "" }}
				onSubmit={(props) => {
					console.log(props);
				}}
			>
				{({ isSubmitting }) => (
					<Form>
						<Input
							name="username"
							placeholder="Set your username"
							label="Username"
						/>

						<Box mt={4}>
							<Input
								name="password"
								type="password"
								placeholder="Set your password"
								label="Password"
							/>
						</Box>

						<Button
							mt={6}
							w="100%"
							type="submit"
							variant="solid"
							colorScheme="whatsapp"
							isLoading={isSubmitting}
						>
							Register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default index;
