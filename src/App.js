import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "./components/Layout";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";

const theme = createTheme({
  shadows: Array(25).fill("none"),
  typography: {
    fontFamily: "Nunito",
  },
  palette: {
    background: {
      default: "hsl(220, 16%, 96%)",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
