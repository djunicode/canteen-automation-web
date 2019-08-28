import React from 'react';

import { NavLink } from 'react-router-dom';

import {
  Navbar, Nav,
} from 'react-bootstrap';

export default function AppBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand>
        DJ Canteen
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={NavLink} exact to="/">HOME</Nav.Link>
        <Nav.Link as={NavLink} to="/orders">ORDERS</Nav.Link>
      </Nav>
    </Navbar>
  );
}
