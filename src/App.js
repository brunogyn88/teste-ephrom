import React, { useState, useEffect } from "react";
import "./App.css";
import datajson from "./data/data.json";
import { Container } from "react-bootstrap";
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Filter from './components/Filter';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);
  const [fitler, setFilter] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(datajson.questoes.map((item, index) =>{
        item.idPergunta = index;
        return item;
      }));
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container className="mt-5">
      <Filter fitler={fitler} filtered={setFilter} />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </Container>
  );
}

export default App;
