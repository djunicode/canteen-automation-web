/* eslint-disable linebreak-style */
import ApolloClient from 'apollo-client';

import { HttpLink } from 'apollo-link-http';

import { InMemoryCache } from 'apollo-cache-inmemory';

const httpsUri = `http://${process.env.REACT_APP_GRAPHQL_ENDPOINT}`;

const httpLink = new HttpLink({
  uri: httpsUri,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
