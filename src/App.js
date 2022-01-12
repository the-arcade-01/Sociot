import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7f7",
    },
  },
  typography: {
    fontFamily: "Nunito",
  },
  shadows: Array(25).fill("none"),
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
