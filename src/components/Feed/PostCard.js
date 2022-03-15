import React, { useContext } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import UserContext from "../../store/UserContext";
import PostContext from "../../store/PostContext";
import UserPostContext from "../../store/UserPostContext";

import axios from "axios";

import { locationArray } from "../utils/locationArray";

const PostCard = ({ feed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);
  const UserPostCtx = useContext(UserPostContext);

  const token = localStorage.getItem("auth-token");

  const handleDelete = async (_id) => {
    const newPosts = PostCtx.posts.filter((post) => post._id !== _id);
    const newUserPosts = UserPostCtx.userPosts.filter(
      (post) => post._id !== _id
    );
    PostCtx.setPosts(newPosts);
    UserPostCtx.setUserPosts(newUserPosts);

    await axios
      .delete(`${process.env.REACT_APP_API_ENDPOINT}/posts/${_id}`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        navigate(
          locationArray.includes(location.pathname)
            ? location.pathname
            : "/posts"
        );
      });
  };

  const handleLike = async (_id) => {
    const likeFunction = (posts) => {
      return posts.map((post) => {
        if (post._id === _id) {
          const userId = UserCtx.userData.id;
          const liked = post.likes.includes(userId);
          if (liked) {
            const newLiked = post.likes.filter((id) => id !== userId);
            post.likes = newLiked;
          } else {
            post.likes.push(userId);
          }
        }
        return post;
      });
    };
    const newPosts = likeFunction(PostCtx.posts);
    const newUserPosts = likeFunction(UserPostCtx.userPosts);

    PostCtx.setPosts(newPosts);
    UserPostCtx.setUserPosts(newUserPosts);

    await axios.patch(
      `${process.env.REACT_APP_API_ENDPOINT}/posts/${_id}`,
      null,
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

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
        }}
        onClick={() => navigate(`/post/${feed._id}`)}
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
                  {feed._creator.name}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#657786",
                    marginTop: "-3px",
                  }}
                >
                  @{feed._creator.username}
                </Typography>
              </div>
              <Typography
                variant="body2"
                sx={{
                  background: "#65BFF6",
                  padding: "4px 12px",
                  borderRadius: "50px",
                  color: "#fff",
                  fontWeight: "600",
                  fontFamily: "Inter",
                  marginTop: "-2px",
                  position: "absolute",
                  right: "340px",
                }}
              >
                {feed.category}
              </Typography>
            </div>
            <div>
              <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
                {feed.text}
              </Typography>
              {feed.link && (
                <Typography>
                  <a
                    href={feed.link}
                    style={{
                      textDecoration: "none",
                      color: "#1da1f2",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {feed.link.length > 50
                      ? `${feed.link.substr(0, 50)} ...`
                      : feed.link}
                  </a>
                </Typography>
              )}

              {/* <Box
              component="img"
              src="assets/monkey.jpeg"
              sx={{
                maxHeight: "400px",
                maxWidth: "600px",
                marginTop: "10px",
                borderRadius: "15px",
              }}
            /> */}
            </div>
          </div>
        </div>
      </Box>
      <div
        style={{
          display: "flex",
          gap: "130px",
          marginTop: "25px",
          alignSelf: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "15px",
          }}
        >
          <i
            className="fi fi-rr-comment"
            style={{ color: "#657786", fontSize: "18px", cursor: "pointer" }}
            onClick={() => navigate(`/post/${feed._id}`)}
          />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Inter", color: "#657786" }}
          >
            {feed._comments.length}
          </Typography>
        </div>
        <div style={{ display: "flex", gap: "15px" }}>
          <i
            className="fi fi-rr-thumbs-up"
            style={{ color: "#657789", fontSize: "18px", cursor: "pointer" }}
            onClick={() => handleLike(feed._id)}
          />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Inter", color: "#657786" }}
          >
            {feed.likes.length}
          </Typography>
        </div>
        <i
          className="fi fi-rr-bookmark"
          style={{ color: "#657786", fontSize: "18px" }}
        />
        <div
          style={{
            display: "flex",
            gap: "15px",
            cursor: "pointer",
          }}
        >
          {feed._creator._id === UserCtx.userData.id ? (
            <div>
              <i
                className="fi fi-rr-trash"
                style={{
                  color: "#657786",
                  fontSize: "18px",
                }}
                onClick={() => handleDelete(feed._id)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Paper>
  );
};

export default PostCard;
