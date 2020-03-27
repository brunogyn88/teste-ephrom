import React, { useState, useEffect } from "react";
import "./App.css";
import datajson from "./data/data.json";
import { Container } from "react-bootstrap";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";
import * as _ from "lodash";

var arrayHistory = (localStorage.getItem("historico") || "").split(",") || [] ;
var onExemplo = filter => {
  if (!filter) return;
  arrayHistory.push(filter);
  localStorage.setItem("historico", arrayHistory)
};

const saveHistoric = _.debounce(text => onExemplo(text), 2000);

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);
  const [fitler, setFilter] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setPosts(
        datajson.questoes.map((item, index) => {
          item.idPergunta = index;
          return item;
        })
      );
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log(posts);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const filterList = text => {
    var updatedList = posts;
    updatedList = updatedList.filter(function(item) {
      return item.Respostas.filter(resp => {
        return resp.Texto.toLowerCase().search(text.toLowerCase()) !== -1;
      }).length;
    });
    console.log("Pesquisando");
    setPosts(updatedList);
    setFilter(text);
  };

  const onChange = event => {
    saveHistoric(event);
    filterList(event);
  };

  return (
    <Container className="mt-5">
      <Filter fitler={fitler} filtered={onChange} />
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Container>
  );
}

export default App;
