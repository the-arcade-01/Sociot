import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import PostCard from "../components/Feed/PostCard";
import CreateComment from "../components/Comments/CreateComment";
import CommentDisplay from "../components/Comments/CommentDisplay";

import UserContext from "../store/UserContext";

const IndividualPostPage = () => {
  const UserCtx = useContext(UserContext);
  const postId = useParams().postId;
  const [feed, setFeed] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/posts/${postId}`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setFeed(res.data.post);
        setComments(feed._comments);
        setLoading(false);
      });
  }, [postId, feed._comments]);

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
          <CommentDisplay comments={comments} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default IndividualPostPage;
