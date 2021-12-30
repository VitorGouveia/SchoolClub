import { Box, BoxProps } from "@chakra-ui/layout";
import { FC } from "react";

type WrapperProps = BoxProps & {
	variant?: "small" | "regular";
};

export const Wrapper: FC<WrapperProps> = ({
	children,
	variant = "regular",
	...rest
}) => {
	return (
		<Box
			{...rest}
			mx="auto"
			w="100%"
			maxWidth={variant === "regular" ? "800px" : "400px"}
		>
			{children}
		</Box>
	);
};
