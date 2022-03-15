import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import FeedDisplay from "../components/Feed/FeedDisplay";

import PostContext from "../store/PostContext";
import UserPostContext from "../store/UserPostContext";

const MainPage = ({ category }) => {
  const { pathname } = useLocation();

  const PostCtx = useContext(PostContext);
  const UserPostCtx = useContext(UserPostContext);

  const token = localStorage.getItem("auth-token");
  const { REACT_APP_API_ENDPOINT } = process.env;

  const getAllPosts = async () => {
    await axios
      .get(`${REACT_APP_API_ENDPOINT}/posts`, {
        headers: {
          "auth-token": token,
        },
      })
      .then((res) => {
        PostCtx.setPosts(res.data.posts);
      });
  };

  const getUserPosts = async () => {
    await axios
      .get(`${REACT_APP_API_ENDPOINT}/posts/userPosts`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        UserPostCtx.setUserPosts(res.data.posts);
      });
  };

  useEffect(() => {
    getAllPosts();
    getUserPosts();
  }, []);

  const filterFeeds = (array) => {
    return category === "All"
      ? array
      : array.filter((post) => post.category === category);
  };

  let component, newResults;
  if (pathname === "/home") {
    newResults = PostCtx.posts.length > 0 ? filterFeeds(PostCtx.posts) : [];

    component = <FeedDisplay feeds={newResults} />;
  } else if (pathname === "/posts") {
    newResults =
      UserPostCtx.userPosts.length > 0
        ? filterFeeds(UserPostCtx.userPosts)
        : [];
    component = <FeedDisplay feeds={newResults} />;
  }
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
      }}
    >
      {component}
    </div>
  );
};

export default MainPage;
