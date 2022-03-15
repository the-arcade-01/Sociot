import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import UserContext from "../../store/UserContext";
import PostContext from "../../store/PostContext";
import UserCommentsContext from "../../store/UserCommentsContext";

import axios from "axios";

const CommentCard = ({ comment }) => {
  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);
  const UserCommentsCtx = useContext(UserCommentsContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("auth-token");

  const handleDelete = async (_id) => {
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
    await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/comments/${_id}`,
      {
        headers: { "auth-token": token },
      }
    );
  };
  return (
    <Paper
      sx={{
        minHeight: "100px",
        padding: "15px 20px",
        border: "1px solid #f3f3f3",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <Avatar
          alt="avatar"
          src="assets/taichi.png"
          sx={{ width: 50, height: 50, background: "#f5f8fa" }}
        />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                alignSelf: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "700", flexWrap: "nowrap" }}
              >
                {comment._creator.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#657786",
                  marginTop: "-3px",
                }}
              >
                @{comment._creator.username}
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
              {comment.text}
            </Typography>
            <div
              style={{
                display: "flex",
                gap: "130px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  cursor: "pointer",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "450px",
                }}
              >
                {comment._creator._id === UserCtx.userData._id ? (
                  <div>
                    <i
                      className="fi fi-rr-trash"
                      style={{
                        color: "#657786",
                        fontSize: "18px",
                      }}
                      onClick={() => handleDelete(comment._id)}
                    />
                  </div>
                ) : (
                  ""
                )}
                {pathname === "/activity" ? (
                  <Button
                    sx={{
                      background: "#1da1f2",
                      color: "#fff",
                      width: "120px",
                      height: "40px",
                      borderRadius: "50px",
                      "&:hover": {
                        background: "#65BFF6",
                      },
                      fontSize: "15px",
                      textTransform: "none",
                      fontFamily: "Inter",
                      alignSelf: "flex-end",
                      margin: "15px 20px 0 0",
                    }}
                    onClick={() => navigate(`/post/${comment._post}`)}
                  >
                    Open Post
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CommentCard;
