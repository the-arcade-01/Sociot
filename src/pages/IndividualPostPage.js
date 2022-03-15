import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import PostCard from "../components/Feed/PostCard";
import CreateComment from "../components/Comments/CreateComment";
import CommentDisplay from "../components/Comments/CommentDisplay";

import UserContext from "../store/UserContext";
import PostContext from "../store/PostContext";

import axios from "axios";

const IndividualPostPage = () => {
  const postId = useParams().postId;
  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);

  const [loading, setLoading] = useState(true);

  // const feed = PostCtx.posts.find((post) => post._id === postId);
  const [feed, setFeed] = useState();

  const getPost = async () => {
    const token = localStorage.getItem("auth-token");
    await axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/posts/${postId}`, {
        headers: {
          "auth-token": token,
        },
      })
      .then((res) => {
        setFeed(res.data.post);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

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
          {feed._creator._id === UserCtx.userData.id ? null : (
            <CreateComment postId={postId} />
          )}
          <CommentDisplay comments={feed._comments} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default IndividualPostPage;
