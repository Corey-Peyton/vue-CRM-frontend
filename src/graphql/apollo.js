import Vue from 'vue';
import { ApolloClient } from "apollo-client"; 
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from 'vue-apollo';

const httplink = new HttpLink({
    uri: process.env.VUE_APP_GRAPHQL_ENDPOINT || "http://localhost:4000/"
});

const authLink = setContext(async (_, { headers }) => {
    const token = localStorage.getItem('token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
    link: authLink.concat(errorLink).concat(httplink),
    cache: new InMemoryCache(),
    connectToDevTools: true
});

Vue.use(VueApollo);

export const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});