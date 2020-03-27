import React from "react";
import { Form } from "react-bootstrap";

const Filter = ({fitler, filtered}) => {
  return (
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Pesquisa</Form.Label>
      <Form.Control value={fitler} onChange={(e) => filtered(e.target.value)} type="text" placeholder="Pesquisa" />
    </Form.Group>
  );
};

export default Filter;
