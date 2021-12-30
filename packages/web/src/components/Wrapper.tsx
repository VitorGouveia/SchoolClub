import { Box } from "@chakra-ui/layout";
import { FC } from "react";

type WrapperProps = {
	variant?: "small" | "regular";
};

export const Wrapper: FC<WrapperProps> = ({
	children,
	variant = "regular",
}) => {
	return (
		<Box
			mt={8}
			mx="auto"
			w="100%"
			maxWidth={variant === "regular" ? "800px" : "400px"}
		>
			{children}
		</Box>
	);
};
