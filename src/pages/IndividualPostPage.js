import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import PostCard from "../components/Feed/PostCard";

const IndividualPostPage = () => {
  const postId = useParams().postId;
  const [feed, setFeed] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/posts/${postId}`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        console.log(res.data.post);
        setFeed(res.data.post);
        setLoading(false);
      });
  }, []);
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
      }}
    >
      {!loading ? <PostCard feed={feed} /> : <h1>Loading</h1>}
    </div>
  );
};

export default IndividualPostPage;
