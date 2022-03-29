import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import UserContext from "../../store/UserContext";
import PostContext from "../../store/PostContext";
import UserPostContext from "../../store/UserPostContext";
import UserCommentsContext from "../../store/UserCommentsContext";

const LogoutUser = () => {
  const navigate = useNavigate();
  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);
  const UserCommentsCtx = useContext(UserCommentsContext);
  const UserPostCtx = useContext(UserPostContext);

  return (
    <Button
      onClick={() => {
        UserCtx.setUserData({});
        PostCtx.setPosts([]);
        UserCommentsCtx.setUserComments([]);
        UserPostCtx.setUserPosts([]);

        localStorage.removeItem("auth-token");
        navigate("/auth/login");
      }}
      sx={{ textTransform: "none", color: "#14171a" }}
    >
      Log out
    </Button>
  );
};

export default LogoutUser;
