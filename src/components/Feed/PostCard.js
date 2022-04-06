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

  const hasLiked = feed.likes.includes(UserCtx.userData._id);

  const token = localStorage.getItem("auth-token");
  let bookmarkArray = localStorage.getItem("sociot-bookmark") || [];

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
          const userId = UserCtx.userData._id;
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

    PostCtx.setPosts(newPosts);

    const newUserPosts = likeFunction(UserPostCtx.userPosts);

    UserPostCtx.setUserPosts(newUserPosts);

    UserPostCtx.setUserPosts(newUserPosts);

    await axios.patch(
      `${process.env.REACT_APP_API_ENDPOINT}/posts/${_id}`,
      null,
      {
        headers: { "auth-token": token },
      }
    );
  };

  const handleBookmark = (feed) => {
    if (bookmarkArray.includes(feed)) {
      bookmarkArray = bookmarkArray.filter((book) => {
        return book._id !== feed._id;
      });
    } else {
      bookmarkArray.push(feed);
    }
    localStorage.removeItem("sociot-bookmark");
    localStorage.setItem("sociot-bookmark", bookmarkArray);
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
        onClick={() => {
          if (UserCtx.userData.name) navigate(`/post/${feed._id}`);
          else navigate("/auth/login");
        }}
      >
        <div style={{ display: "flex", gap: "15px" }}>
          <Avatar
            alt="avatar"
            sx={{ width: 50, height: 50, background: "#95D3F9" }}
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
            className="fi fi-rr-comment-alt"
            style={{ color: "#657786", fontSize: "18px", cursor: "pointer" }}
            onClick={() => {
              if (UserCtx.userData.name) navigate(`/post/${feed._id}`);
              else navigate("/auth/login");
            }}
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
            className="fi fi-sr-thumbs-up"
            style={{
              color: hasLiked ? "#1da1f2" : "#aab8c2",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={() => {
              if (UserCtx.userData.name) handleLike(feed._id);
              else navigate("/auth/login");
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontFamily: "Inter", color: "#657786" }}
          >
            {feed.likes.length}
          </Typography>
        </div>
        {/* {feed._creator._id !== UserCtx.userData._id ? (
          <i
            className="fi fi-sr-bookmark"
            style={{
              color: bookmarkArray.includes(feed) ? "#1da1f2" : "#aab8c2",
              fontSize: "18px",
              cursor: "pointer",
            }}
            onClick={() => handleBookmark(feed)}
          />
        ) : null} */}

        {feed._creator._id === UserCtx.userData._id ? (
          <div>
            <i
              className="fi fi-rr-trash"
              style={{
                color: "#657786",
                fontSize: "18px",
                cursor: "pointer",
              }}
              onClick={() => handleDelete(feed._id)}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </Paper>
  );
};

export default PostCard;
