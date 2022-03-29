import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import axios from "axios";

const SignupForm = () => {
  const { REACT_APP_API_ENDPOINT } = process.env;

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${REACT_APP_API_ENDPOINT}/register`, {
        name: name,
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));

    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "15px",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "600", fontFamily: "Inter" }}>
        Hello, new here?
      </Typography>
      <form
        autoComplete="off"
        style={{ display: "flex", gap: "15px", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
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
          Register
        </Button>
      </form>
      <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
        Already have an account?{" "}
        <Link
          to="/auth/login"
          style={{
            textDecoration: "none",
            fontWeight: "600",
            color: "#1da1f2",
          }}
        >
          Sign In
        </Link>
      </Typography>
    </div>
  );
};

export default SignupForm;
