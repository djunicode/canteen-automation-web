import ApolloClient from 'apollo-client';

import { WebSocketLink } from 'apollo-link-ws';
import { HttpLink } from 'apollo-link-http';
import { split } from 'apollo-link';

import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';

const wssUri = `wss://${process.env.REACT_APP_GRAPHQL_ENDPOINT}`;
const httpsUri = `https://${process.env.REACT_APP_GRAPHQL_ENDPOINT}`;

const wsLink = new WebSocketLink({
  uri: wssUri,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: httpsUri,
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
