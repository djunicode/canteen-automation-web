/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  Modal,
  Form,
  Button,
} from 'react-bootstrap';

export default function AddCategoryModal(props) {
  const { show, onHide } = props;
  const [name, setName] = useState();

  const onClick = (performMutation) => {
    performMutation({
      variables: {
        name,
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
        <Modal.Title>Add new Category</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
            <Form.Group controlId="categoryInformation">
              <Form.Label>Category Name</Form.Label>
              <Form.Control placeholder="Enter Category Name" onChange={e => setName(e.target.value)} />
              <Form.Text className="text-muted">
                Categories are assigned to menu items.
              </Form.Text>
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Mutation mutation={queries.ADD_CATEGORY}>
            {(performMutation, { loading, error }) => {
              const config = {
                text: 'Add Category',
                disabled: false,
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

AddCategoryModal.defaultProps = {
  onHide: null,
};

AddCategoryModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
};
