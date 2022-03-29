import React, { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";

import UserContext from "../../store/UserContext";

const LoginForm = () => {
  const { REACT_APP_API_ENDPOINT } = process.env;

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserCtx = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${REACT_APP_API_ENDPOINT}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        const { token, user } = res.data;
        UserCtx.setUserData(user);
        localStorage.removeItem("auth-token");
        localStorage.setItem("auth-token", token);
        navigate("/home");
      })
      .catch((err) => console.log(err));

    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "600", fontFamily: "Inter" }}>
        Welcome back!
      </Typography>
      <form
        autoComplete="off"
        style={{ display: "flex", gap: "15px", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{
            fontSize: "20px",
            textTransform: "none",
            backgroundColor: "#1da1f2",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#1da1f2",
            },
            fontFamily: "Inter",
          }}
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          style={{
            textDecoration: "none",
            fontWeight: "600",
            color: "#1da1f2",
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </div>
  );
};

export default LoginForm;
