import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../store/UserContext";

import LogoutUser from "../components/AuthForms/LogoutUser";

import Typography from "@mui/material/Typography";

import { format } from "date-fns";

const HomePage = () => {
  const [message, setMessage] = useState("");

  const UserCtx = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get("http://localhost:8000/private", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
        // background: "#aab8c2",
        padding: "15px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          Home
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "500", fontFamily: "Inter" }}
        >
          {format(new Date(), "do MMMM Y")}
        </Typography>
      </div>
      <h1>
        {UserCtx.userData.name} {message}
      </h1>
      <LogoutUser />
    </div>
  );
};

export default HomePage;
