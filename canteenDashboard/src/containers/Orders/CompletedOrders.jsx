import React from 'react';

import { Query } from 'react-apollo';
import * as queries from '../../helpers/graphql/queries';

import { CardDeck } from 'react-bootstrap';
import Card from '../../components/Orders/OrderCard';
import CenteredSpinner from '../../components/Spinner/CenteredSpinner';

export default function PendingOrders() {
  return (
    <CardDeck>
      <Query query={queries.GET_COMPLETED_ORDERS}>
        {({ data, loading, error }) => {
          if (loading) {
            return <CenteredSpinner />;
          }

          if (error) {
            return `Error: ${error}`;
          }

          return data.orders.map(o => <Card {...o} key={o.id} />);
        }}
      </Query>
    </CardDeck>
  );
}
