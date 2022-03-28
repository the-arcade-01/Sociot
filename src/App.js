import React, { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import IndividualPostPage from "./pages/IndividualPostPage";

import SignupForm from "./components/AuthForms/SignupForm";
import LoginForm from "./components/AuthForms/LoginForm";
import Layout from "./components/Layout/Layout";

import UserContext from "./store/UserContext";
import PostContext from "./store/PostContext";
import UserPostContext from "./store/UserPostContext";
import UserCommentsContext from "./store/UserCommentsContext";
import BookmarkContext from "./store/BookmarkContext";

import axios from "axios";

/*
  extraLigntBlue: #95D3F9
  lightBlue: #65BFF6
  blue: #1da1f2
  black: #14171a
  darkGray: #657786
  lightGray: #aab8c2
  extraLightGray: #e1e8ed
  extraLLGray: #f5f8fa
  like: #FF5A5F
*/

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Inter", "Ubuntu", "Nunito"].join(","),
  },
  shadows: Array(25).fill("none"),
});

const App = () => {
  const [userData, setUserData] = useState({});
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [userComments, setUserComments] = useState([]);

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

  const [category, setCategory] = useState("All");

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
          <PostContext.Provider value={{ posts, setPosts }}>
            <UserPostContext.Provider value={{ userPosts, setUserPosts }}>
              <UserCommentsContext.Provider
                value={{ userComments, setUserComments }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Layout category={category} setCategory={setCategory} />
                    }
                  >
                    <Route
                      path="home"
                      element={<MainPage category={category} />}
                    />
                    <Route
                      path="posts"
                      element={<MainPage category={category} />}
                    />
                    <Route
                      path="saved"
                      element={<MainPage category={category} />}
                    />
                    <Route
                      path="activity"
                      element={<MainPage category={category} />}
                    />
                    <Route
                      path="post/:postId"
                      element={<IndividualPostPage />}
                    />
                  </Route>
                </Routes>
              </UserCommentsContext.Provider>
            </UserPostContext.Provider>
          </PostContext.Provider>
        </UserContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
