/* eslint-disable linebreak-style */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Mutation } from 'react-apollo';
import * as queries from 'helpers/graphql/queries';

import {
  Card,
  ListGroup,
  Button,
} from 'react-bootstrap';

const cardStyle = {
  margin: '0.4rem',
  minWidth: 'auto',
};

export default function PendingOrders(props) {
  const {
    id,
    isFulfilled,
    time_scheduled,
    onPrepare,
  } = props;

  const onPreparedClick = useCallback((mutate) => {
    const variables = {
      id,
    };

    mutate({
      variables,
    }).then(() => {
      if (onPrepare) {
        onPrepare();
      }
    });
  }, [id, onPrepare]);

  const border = isFulfilled ? 'success' : 'warning';

  const scheduleTimeObj = new Date(time_scheduled);

  const orderItems = props.items.map((item, index) => (
    <ListGroup.Item key={index}>
      <p className="m-0 p-0">
        {item.quantity} 𝗑 {item.info.name}
      </p>
      <small>{item.comment}</small>
    </ListGroup.Item>
  ));

  const preparedButton = (
    <Mutation mutation={queries.PREPARE_ORDER}>
      {(performMutation, { data, loading, error }) => {
        const config = {
          disabled: false,
          text: 'PREPARED',
        };

        if (loading || (data && data.fulfillOrderMutation && data.fulfillOrderMutation.ok)) {
          config.disabled = true;
          config.text = '...';
        }

        if (error) {
          config.disabled = true;
          config.text = 'ERR';
        }

        return (
          <Button
            onClick={() => onPreparedClick(performMutation)}
            variant="info"
            disabled={config.disabled}
            size="sm">
              {config.text}
          </Button>
        );
      }}
    </Mutation>
  );

  return (
    <Card style={cardStyle} border={border}>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <span>Order #{id}</span>
        <section>
          {!isFulfilled && preparedButton}
        </section>
      </Card.Header>
      <ListGroup variant="flush">
          {orderItems}
      </ListGroup>

      <Card.Footer className="d-flex align-items-center">
        <section className="ml-auto">
          Scheduled: {scheduleTimeObj.toLocaleTimeString()}
        </section>
      </Card.Footer>
    </Card>
  );
}

PendingOrders.defaultProps = {
  isFulfilled: false,
};

PendingOrders.propTypes = {
  id: PropTypes.number.isRequired,
  time_scheduled: PropTypes.string.isRequired,
  isFulfilled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string,
    }),
    quantity: PropTypes.number,
  })).isRequired,
};
