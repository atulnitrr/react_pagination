import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from "./component/Posts";
import Pagination from "./component/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    setLoading(false);
  };

  const [postPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const postEndIndex = currentPage * postPerPage;
  const postStartIndex = postEndIndex - postPerPage;
  const currentPosts = posts.slice(postStartIndex, postEndIndex);

  const paginated = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1>Pagination demo</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totoalPosts={posts.length}
        paginated={paginated}
      />
    </div>
  );
}

export default App;
