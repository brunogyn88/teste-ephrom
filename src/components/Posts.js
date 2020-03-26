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
          <th>id</th>
          <th>Pergunta</th>
          <th>Respostas</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{post.Pergunta}</td>
            <td><Button variant="info">Respostas</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Posts;
