import { ChakraProvider } from "@chakra-ui/react";

import { Provider, createClient, dedupExchange, fetchExchange } from "urql";
import { theme } from "../theme";
import { AppProps } from "next/app";

import { AuthProvider } from "../context";
import "../styles/global.css";
import {
	LoginMutation,
	MeDocument,
	MeQuery,
	RegisterMutation,
} from "../generated/graphql";
import { cacheExchange, QueryInput, Cache } from "@urql/exchange-graphcache";

function betterUpdateQuery<Result, Query>(
	cache: Cache,
	qi: QueryInput,
	result: any,
	fn: (r: Result, q: Query) => Query
) {
	return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

const client = createClient({
	url: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
	fetchOptions: {
		credentials: "include",
	},
	exchanges: [
		dedupExchange,
		cacheExchange({
			updates: {
				Mutation: {
					login: (_result, args, cache, info) => {
						betterUpdateQuery<LoginMutation, MeQuery>(
							cache,
							{
								query: MeDocument,
							},
							_result,
							(result, query) => {
								if (result.login.errors) {
									return query;
								} else {
									return {
										me: {
											user: result.login.user,
										},
									};
								}
							}
						);
					},
					register: (_result, args, cache, info) => {
						betterUpdateQuery<RegisterMutation, MeQuery>(
							cache,
							{
								query: MeDocument,
							},
							_result,
							(result, query) => {
								if (result.register.errors) {
									return query;
								} else {
									return {
										me: {
											user: result.register.user,
										},
									};
								}
							}
						);
					},
				},
			},
		}),
		fetchExchange,
	],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider value={client}>
			<AuthProvider>
				<ChakraProvider resetCSS theme={theme}>
					<Component {...pageProps} />
				</ChakraProvider>
			</AuthProvider>
		</Provider>
	);
}
