import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
} from "@apollo/client";

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";


// HTTP
const httpLink = new HttpLink({
    uri: "http://localhost:3002/graphql",
});


// Authentication for HTTP
const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("token");

    operation.setContext({
        headers: {
            Authorization: token ? `Bearer ${token}` : "",
        },
    });

    return forward(operation);
});


// WebSocket
const wsLink = new GraphQLWsLink(
    createClient({
        url: "ws://localhost:3002/graphql",
        connectionParams: () => {
            const token = localStorage.getItem("token");
            return {
                authorization: token ? `Bearer ${token}` : "",
            };
        },
    })
);


// HTTP + Authentication
const authenticatedHttpLink = authLink.concat(httpLink);


// Choose HTTP or WebSocket
const link = ApolloLink.split(
    ({ query }) => {
        const definition = getMainDefinition(query);

        return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
        );
    },
    wsLink,
    authenticatedHttpLink
);


// Apollo Client
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;