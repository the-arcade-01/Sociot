import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import ActivityPage from "./pages/ActivityPage";

import SignupForm from "./components/AuthForms/SignupForm";
import LoginForm from "./components/AuthForms/LoginForm";
import Layout from "./components/Layout/Layout";

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
            <Route path="/" element={<Layout />}>
              <Route path="home" element={<MainPage />} />
              <Route path="posts" element={<MainPage />} />
              <Route path="saved" element={<MainPage />} />
              <Route path="activity" element={<ActivityPage />} />
            </Route>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
