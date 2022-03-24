import CommentCard from "./CommentCard";
import Typography from "@mui/material/Typography";

import { useState, useContext } from "react";

import CreateComment from "./CreateComment";

import UserContext from "../../store/UserContext";
import PostContext from "../../store/PostContext";
import UserCommentsContext from "../../store/UserCommentsContext";

import axios from "axios";

const CommentDisplay = ({ feed }) => {
  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);
  const UserCommentsCtx = useContext(UserCommentsContext);

  const [comments, setComments] = useState(feed?._comments);

  const handleDelete = async (_id, comment) => {
    const newComments = UserCommentsCtx.userComments.filter(
      (comment) => comment._id !== _id
    );
    UserCommentsCtx.setUserComments(newComments);
    const newPosts = PostCtx.posts.map((post) => {
      if (post._id === comment._post) {
        const newCommentsArray = post._comments.filter(
          (comment) => comment._id !== _id
        );
        post._comments = newCommentsArray;
      }
      return post;
    });
    PostCtx.setPosts(newPosts);

    const newCommentsArray = comments.filter((comment) => comment._id !== _id);
    setComments(newCommentsArray);

    const token = localStorage.getItem("auth-token");
    await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/comments/${_id}`,
      {
        headers: { "auth-token": token },
      }
    );
  };

  return (
    <>
      {feed === undefined ? (
        "Loading ..."
      ) : (
        <>
          {feed._creator._id === UserCtx.userData._id ? null : (
            <CreateComment
              postId={feed._id}
              comments={comments}
              setComments={setComments}
            />
          )}
          <Typography
            variant="h6"
            sx={{ fontWeight: "600", padding: "10px 25px" }}
          >
            Comments
          </Typography>
          {comments === undefined
            ? "Empty"
            : comments.map((comment) => {
                return (
                  <CommentCard
                    key={comment._id}
                    comment={comment}
                    handleDelete={handleDelete}
                  />
                );
              })}
        </>
      )}
    </>
  );
};

export default CommentDisplay;
