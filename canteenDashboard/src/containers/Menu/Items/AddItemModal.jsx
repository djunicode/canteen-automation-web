/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Mutation, Query } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  Modal,
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';

export default function AddItemModal(props) {
  const { show, onHide } = props;
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [categoryId, setCategoryId] = useState();

  const onClick = (performMutation) => {
    performMutation({
      variables: {
        name,
        price,
        categoryId,
      },
    })
      .then(() => {
        if (onHide) {
          onHide();
        }
      });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>Add new menu item</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
            <Form.Group controlId="itemFrom.name">
              <Form.Label>Item Name</Form.Label>
              <Form.Control placeholder="Enter Item Name" onChange={e => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="itemFrom.price">
              <Form.Label>Price</Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>₹</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control placeholder="00" type="number" onChange={e => setPrice(e.target.value)} />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="itemForm.category">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple onChange={e => setCategoryId(e.target.value)}>
                <Query query={queries.GET_CATEGORIES}>
                  {({ data, loading, error }) => {
                    if (error) {
                      alert('Error loading categories: ', error);
                    }

                    return data.categories.map(c => <option value={c.id}>{c.name}</option>);
                  }}
                </Query>
              </Form.Control>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Mutation mutation={queries.ADD_MENU_ITEM}>
            {(performMutation, { loading, error }) => {
              const config = {
                text: 'Add Item',
                disabled: !name || !Number(price) || !categoryId,
              };

              if (loading) {
                config.disabled = true;
              }

              if (error) {
                config.disabled = true;
                config.text = 'ERR';
              }

              return <Button type="submit" variant="success" onClick={() => onClick(performMutation)} disabled={config.disabled || !name}>{config.text}</Button>;
            }}
          </Mutation>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

AddItemModal.defaultProps = {
  onHide: null,
};

AddItemModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};
