/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

import { Mutation } from 'react-apollo';
import * as queries from '../../../helpers/graphql/queries';

import {
  ListGroupItem,
  Button,
} from 'react-bootstrap';

export default function CategoryCard(props) {
  const { id, name, onDelete } = props;

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
    <Mutation mutation={queries.DELETE_CATEGORY_BY_ID}>
      {(performMutation, { data, error, loading }) => {
        const config = {
          disabled: false,
          text: '⤬',
        };

        if (loading || (data && data.delete_categories.affected_rows === 1)) {
          config.disabled = true;
          config.text = '...';
        }

        if (error) {
          config.disabled = true;
          config.text = 'ERR';
        }

        return (
          <ListGroupItem className="d-flex align-items-center">
            <b>{name}</b>
            <Button onClick={() => onClick(performMutation)} size="sm" variant="outline-danger" className="ml-auto" disabled={config.disabled}> {config.text} </Button>
          </ListGroupItem>
        );
      }}
    </Mutation>
  );
}

CategoryCard.defaultProps = {
  onDelete: null,
};

CategoryCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};
