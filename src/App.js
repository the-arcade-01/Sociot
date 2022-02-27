import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, formControlClasses, ThemeProvider } from "@mui/material";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SignupForm from "./components/AuthForms/SignupForm";
import LoginForm from "./components/AuthForms/LoginForm";

import UserContext from "./store/UserContext";
import axios from "axios";

/*
  blue: #1da1f2
  black: #14171a
  darkGray: #657786
  lightGray: #aab8c2
  extraLightGray: #e1e8ed
  extraLLGray: #f5f8fa
*/

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Inter", "Ubuntu", "Nunito"].join(","),
  },
  shadows: Array(25).fill("none"),
});

const App = () => {
  const [userData, setUserData] = useState({});
  const { REACT_APP_API_ENDPOINT } = process.env;

  const checkLogin = async () => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
    }
    await axios
      .post(`${REACT_APP_API_ENDPOINT}/verifyUser`, null, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setUserData(res.data.user);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Routes>
            <Route path="/" element={<AuthPage />}>
              <Route path="register" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/home" element={<Layout />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
