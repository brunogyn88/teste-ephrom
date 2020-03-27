import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ModalRespostas = posts => {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = id => {
    setItem(
      posts.map(item => {
        return id === item.ID ? item.Respostas : "";
      })
    );
    setShow(true);
  };

  return (
    <div>
      <Button variant="info">Respostas</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
