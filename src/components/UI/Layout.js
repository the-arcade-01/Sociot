import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Layout = () => {
  return (
    <Box component="div">
      <Typography variant="h4">Layout</Typography>
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
