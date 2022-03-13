import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import PostCard from "../components/Feed/PostCard";
import CreateComment from "../components/Comments/CreateComment";
import CommentDisplay from "../components/Comments/CommentDisplay";

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
  }, [postId]);
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
      }}
    >
      {!loading ? (
        <div>
          <PostCard feed={feed} />
          <CreateComment postId={postId} />
          <CommentDisplay comments={feed._comments} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default IndividualPostPage;
