import React from 'react';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import PendingOrders from '../containers/Orders/PendingOrders';
import MenuEditor from '../containers/Menu/MenuEditor';

function PendingColumn() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center my-2">Pending Orders</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <PendingOrders />
        </Col>
      </Row>
    </Container>
  );
}

export default function HomePage() {
  return (
    <Container fluid>
      <Row>
        <Col md={4} className="border-right">
          <PendingColumn />
        </Col>

        <Col md={8}>
          <MenuEditor />
        </Col>
      </Row>
    </Container>
  );
}
