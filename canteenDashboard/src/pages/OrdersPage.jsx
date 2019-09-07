/* eslint-disable linebreak-style */
import React from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import OrdersNavbar from '../components/Navbar/OrdersNavbar';
import PendingOrders from '../containers/Orders/PendingOrders';
import CompletedOrders from '../containers/Orders/CompletedOrders';

export default function PendingOrdersPage() {
  return (
    <Container fluid>
      <OrdersNavbar />
      <Row>
        <Col>
          <Switch>
            <Route exact path="/orders" component={PendingOrders} />
            <Route exact path="/orders/completed" component={CompletedOrders} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
}
