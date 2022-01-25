import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
  },
  shadows: Array(25).fill("none"),
  palette: {
    background: {
      default: "#172126",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePost />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
