/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  ListGroup,
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
  const border = is_fulfilled ? 'success' : 'warning';

  const scheduleTimeObj = new Date(time_scheduled);

  const orderItems = props.items.map((item, index) => <ListGroup.Item key={index}>{item.quantity} 𝗑 {item.info.name}</ListGroup.Item>);

  return (
    <Card style={cardStyle} border={border}>
      <Card.Header>
        Order #{id}
      </Card.Header>
      <ListGroup variant="flush">
          {orderItems}
      </ListGroup>

      <Card.Footer>
        <div className="text-right">
          {scheduleTimeObj.toLocaleTimeString()}
        </div>
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
