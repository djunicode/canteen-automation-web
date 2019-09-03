/* eslint-disable linebreak-style */
import React from 'react';

import {
  Spinner,
} from 'react-bootstrap';

export default function CenteredSpinner() {
  return (
    <div className="d-flex h-100 w-100 align-items-center justify-content-center flex-column">
      <Spinner variant="success" animation="border" />
      <span>Loading</span>
    </div>
  );
}
