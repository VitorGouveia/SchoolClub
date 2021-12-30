import { ChakraProvider } from "@chakra-ui/react";

import { Provider, createClient } from "urql";
import { theme } from "../theme";
import { AppProps } from "next/app";

import "../styles/global.css";

const client = createClient({
	url: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
	fetchOptions: {
		credentials: "include",
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider value={client}>
			<ChakraProvider resetCSS theme={theme}>
				<Component {...pageProps} />
			</ChakraProvider>
		</Provider>
	);
}
