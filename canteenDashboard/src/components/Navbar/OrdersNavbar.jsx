/* eslint-disable linebreak-style */
import React from 'react';

import { NavLink } from 'react-router-dom';

import {
  Nav,
} from 'react-bootstrap';

export default function OrdersNavbar() {
  return (
    <Nav className="my-2" variant="pills">
      <Nav.Link as={NavLink} exact to="/orders">PENDING</Nav.Link>
      <Nav.Link as={NavLink} exact to="/orders/completed">COMPLETED</Nav.Link>
    </Nav>
  );
}
