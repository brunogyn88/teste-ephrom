import React from "react";
import { Table, Button } from "react-bootstrap";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>loading</h1>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width: "45px"}}>id</th>
          <th>Pergunta</th>
          <th style={{width: "127px"}}>Respostas</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{post.idPergunta}</td>
            <td>{post.Pergunta}</td>
            <td><Button variant="info">Respostas</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;
