import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Mutation, Query } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  Modal,
  Form,
  InputGroup,
  Button,
} from 'react-bootstrap';

const OPTIONS = [
  {
    name: 'Jain',
    value: 'JAIN',
  },
  {
    name: 'Non-jain',
    value: 'NON_JAIN',
  },
  {
    name: 'Both',
    value: 'BOTH',
  },
];

export default function AddItemModal(props) {
  const { show, onHide, item } = props;
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [categoryId, setCategoryId] = useState();
  const [choice, setChoice] = useState();
  const isEditMode = useMemo(() => !!item, [item]);

  const onModalHide = () => {
    setName(null);
    setChoice(null);
    setPrice(null);
    setCategoryId(null);
    setId(null);
    if (onHide) {
      onHide();
    }
  };

  const onClick = (performMutation) => {
    performMutation({
      variables: {
        name,
        price,
        categoryId,
        choice,
        id,
      },
    })
      .then(() => {
        onModalHide();
      });
  };

  useEffect(() => {
    if (item) {
      setName(item.name);
      setPrice(item.price);
      setCategoryId(item.category.id);
      setChoice(item.options);
      setId(item.id);
    }
  }, [item]);

  return (
    <Modal show={show} onHide={onModalHide}>
      <Modal.Header>
        <Modal.Title>{isEditMode ? 'Add new' : 'Edit'} menu item</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
          <Form.Group controlId="itemFrom.name">
            <Form.Label>Item Name</Form.Label>
            <Form.Control placeholder="Enter Item Name" onChange={e => setName(e.target.value)} value={name} />
          </Form.Group>
          <Form.Group controlId="itemFrom.price">
            <Form.Label>Price</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>₹</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control placeholder="00" type="number" onChange={e => setPrice(e.target.value)} value={price} />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="itemForm.choice">
            <Form.Label>Choice</Form.Label>
            <Form.Control as="select" multiple onChange={e => setChoice(e.target.value)} value={choice}>
              {OPTIONS.map((o, i) => <option key={i} value={o.value}>{o.name}</option>)}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="itemForm.category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" multiple onChange={e => setCategoryId(e.target.value)} value={categoryId}>
              <Query query={queries.GET_CATEGORIES}>
                {({ data, error }) => {
                  if (error) {
                    alert('Error loading categories: ', error);
                  }

                  return data.categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>);
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
                disabled: !name || !Number(price) || !categoryId || !choice,
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
  item: null,
};

AddItemModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  item: PropTypes.object,
};
