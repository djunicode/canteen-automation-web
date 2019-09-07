import React from 'react';

import { Query } from 'react-apollo';
import * as queries from '../../helpers/graphql/queries';

import { CardDeck } from 'react-bootstrap';
import Card from '../../components/Orders/OrderCard';
import CenteredSpinner from '../../components/Spinner/CenteredSpinner';

export default function PendingOrders() {
  return (
    <CardDeck>
      <Query query={queries.SUSCRIBE_PENDING_ORDERS} pollInterval={10 * 1000}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return <CenteredSpinner />;
          }

          if (error) {
            return `Error: ${error}`;
          }

          return data.orders.map(o => <Card onPrepare={refetch} {...o} key={o.id} />);
        }}
      </Query>
    </CardDeck>
  );
}
