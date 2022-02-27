import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

import UserContext from "../../store/UserContext";

const LogoutUser = () => {
  const navigate = useNavigate();
  const UserCtx = useContext(UserContext);
  return (
    <Button
      onClick={() => {
        UserCtx.setUserData({});
        localStorage.removeItem("auth-token");
        navigate("/login");
      }}
      sx={{ textTransform: "none", color: "#14171a" }}
    >
      Log out
    </Button>
  );
};

export default LogoutUser;
