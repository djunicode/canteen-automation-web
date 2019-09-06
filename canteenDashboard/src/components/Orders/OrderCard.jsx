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
    is_fulfilled,
    time_scheduled,
  } = props;

  const onPreparedClick = useCallback((mutate) => {
    const variables = {
      id,
    };

    mutate({
      variables,
    });
  }, [id]);

  const border = is_fulfilled ? 'success' : 'warning';

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

        if (loading || (data && 0)) {
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
      <Card.Header className="d-flex align-items-center">
        <span>Order #{id}</span>
        <section className="ml-auto">
          <Button variant="danger" size="sm">REJECT</Button>
        </section>
      </Card.Header>
      <ListGroup variant="flush">
          {orderItems}
      </ListGroup>

      <Card.Footer className="d-flex align-items-center">
        <section>
          {preparedButton}
        </section>
        <section className="ml-auto">
          Scheduled: {scheduleTimeObj.toLocaleTimeString()}
        </section>
      </Card.Footer>
    </Card>
  );
}

PendingOrders.defaultProps = {
  is_fulfilled: false,
};

PendingOrders.propTypes = {
  id: PropTypes.number.isRequired,
  time_scheduled: PropTypes.string.isRequired,
  is_fulfilled: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string,
    }),
    quantity: PropTypes.number,
  })).isRequired,
};
