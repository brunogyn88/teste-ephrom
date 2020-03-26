import React, { useState, useEffect } from "react";
import "./App.css";
import datajson from "./data/data.json";

function App() {
  const [posts, setPosts] = useState([]);
  const [loadin, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(datajson);
      setLoading(false);
    };
    fetchPosts();
  },[]);

  return <div className="App"></div>;
}

export default App;
