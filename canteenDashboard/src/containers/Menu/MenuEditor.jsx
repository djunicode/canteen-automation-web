import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import Categories from './Categories';
import Items from './Items';

export default function MenuEditor() {
  return (
    <Container fluid>
      <Row className="border-bottom">
        <Col>
          <h1 className="text-center my-2">Menu Editor</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="border-right">
          <Categories />
        </Col>
        <Col sm={8}>
          <Items />
        </Col>
      </Row>
    </Container>
  );
}
