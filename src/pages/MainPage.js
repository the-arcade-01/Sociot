import { useEffect, useContext } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import FeedDisplay from "../components/Feed/FeedDisplay";
import CommentDisplay from "../components/Comments/CommentDisplay";

import PostContext from "../store/PostContext";
import UserPostContext from "../store/UserPostContext";
import UserCommentsContext from "../store/UserCommentsContext";

const MainPage = ({ category }) => {
  const { pathname } = useLocation();

  const PostCtx = useContext(PostContext);
  const UserPostCtx = useContext(UserPostContext);
  const UserCommentsCtx = useContext(UserCommentsContext);

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

  const getUserComments = async () => {
    await axios
      .get(`${REACT_APP_API_ENDPOINT}/comments/userComments`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        UserCommentsCtx.setUserComments(res.data.comments);
      });
  };

  useEffect(() => {
    getAllPosts();
    getUserPosts();
    getUserComments();
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
  } else if (pathname === "/activity") {
    newResults =
      UserCommentsCtx.userComments.length > 0
        ? UserCommentsCtx.userComments
        : [];

    component = <CommentDisplay comments={newResults} />;
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
