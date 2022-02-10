import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material";

import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SignupForm from "./components/AuthForms/SignupForm";
import LoginForm from "./components/AuthForms/LoginForm";

import { UserContextProvider } from "./store/UserContext";

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
    fontFamily: ["Ubuntu", "Nunito"].join(","),
  },
  shadows: Array(25).fill("none"),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<AuthPage />}>
              <Route path="register" element={<SignupForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
          </Routes>
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
