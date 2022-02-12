import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import accessToken from "../accessToken"

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const accessToken = localStorage.getItem('accessToken');
   // return the headers to the context so httpLink can read them
   return {
     headers: {
       ...headers,
       authorization: accessToken ? `Bearer ${accessToken}` : "",
     }
   }
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});
