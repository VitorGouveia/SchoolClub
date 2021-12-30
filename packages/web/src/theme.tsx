import { Theme, theme as ChakraTheme } from "@chakra-ui/react";

export const theme: Theme = {
	...ChakraTheme,
	config: {
		useSystemColorMode: true,
		initialColorMode: "system",
	},
	colors: {
		...ChakraTheme.colors,
		black: "#16161D",
	},
	breakpoints: {
		...ChakraTheme.breakpoints,
		sm: "40em",
		md: "52em",
		lg: "64em",
		xl: "80em",
	},
	fonts: {
		...ChakraTheme.fonts,
		mono: `'Menlo', monospace`,
	},
};
