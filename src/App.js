import React, { useState, useEffect } from "react";
import "./App.css";
import datajson from "./data/data.json";
import { Container } from "react-bootstrap";
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(datajson.questoes);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container className="mt-5">
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    </Container>
  );
}

export default App;
