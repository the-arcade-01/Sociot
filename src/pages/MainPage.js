import { useEffect, useContext } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import FeedDisplay from "../components/Feed/FeedDisplay";
import CommentCard from "../components/Comments/CommentCard";

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

    const handleDelete = (_id, comment) => {
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

      const newCommentsArray = newResults.filter(
        (comment) => comment._id !== _id
      );
      newResults = newCommentsArray;

      const token = localStorage.getItem("auth-token");
      axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/comments/${_id}`, {
        headers: { "auth-token": token },
      });
    };
    component = (
      <>
        {newResults === undefined
          ? "Empty"
          : newResults.map((comment) => {
              return (
                <CommentCard
                  key={comment._id}
                  comment={comment}
                  handleDelete={handleDelete}
                />
              );
            })}
      </>
    );
  } else if (pathname === "/saved") {
    newResults = localStorage.getItem("sociot-bookmark") || [];
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
