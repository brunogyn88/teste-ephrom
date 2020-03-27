import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const Posts = ({ posts, loading }) => {
  const [show, setShow] = useState(false);
  const [respostas, setRespostas] = useState([]);
  const [updatedList, setUpdatedList] = useState([]);
  console.log({updatedList});
  const handleClose = () => setShow(false);
  const handleShow = e => {

    setUpdatedList(
      posts.find(item => e.target.value === item.ID).Respostas
    );
    setShow(true);
  };
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ width: "45px" }}>id</th>
            <th>Pergunta</th>
            <th style={{ width: "127px" }}>Respostas</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.idPergunta}</td>
              <td>{post.Pergunta}</td>
              <td>
                <Button value={post.ID} onClick={handleShow} variant="info">
                  Respostas
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Repostas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {updatedList.map((resposta, index) => (
            <Form.Check
              inline
              label={resposta.Texto}
              type="radio"
              name="perguntas"
              key={index}
            />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Posts;
