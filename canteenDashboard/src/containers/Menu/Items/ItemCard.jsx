/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Mutation } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  Button,
  Card,
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import EditItemModal from './EditItemModal';

export default function ItemCard(props) {
  const { id, name, price, category, options, onDelete } = props;
  const [show, setShow] = useState(false);
  const toggle = () => setShow(s => !s);
  const onHide = () => {
    toggle();
  }
  const onClick = async (performMutation) => {
    performMutation({
      variables: {
        id,
      },
    })
      .then(() => {
        if (onDelete) {
          onDelete(id);
        }
      });
  };

  return (
    <Mutation mutation={queries.DELETE_MENU_ITEM}>
      {(performMutation, { data, error, loading }) => {
        const config = {
          disabled: false,
          text: '⤬',
        };

        if (loading || (data && data.deleteMenuItemMutation && data.deleteMenuItemMutation.ok)) {
          config.disabled = true;
          config.text = '...';
        }

        if (error) {
          config.disabled = true;
          config.text = 'ERR';
        }

        return (
          <Card className="w-100 m-1">
            <Card.Header className="d-flex align-items-center">
              <span className="mr-auto">{name}</span>
              <span className="mr-auto">{options}</span>
              <Button className="mr-5" variant="success" size="sm" onClick={toggle}> edit </Button>             
                <EditItemModal show={show} onHide={onHide} />
              <Button
                onClick={() => onClick(performMutation)}
                size="sm"
                variant="outline-danger"
                disabled={config.disabled}
              >
                {config.text}
              </Button>
            </Card.Header>
            <Card.Body className="p-0">
              <Container fluid>
                <Row>
                  <Col xs={1} className="bg-success py-3" />
                  <Col xs={8}>
                    {category.name}
                  </Col>
                  <Col xs={3}>
                    {price}
                  </Col>
                </Row>
              </Container>
            </Card.Body>            
          </Card>
          
        );
        
      }}
    </Mutation>
  );
}

ItemCard.defaultProps = {
  onDelete: null,
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  options: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  is_available: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};
