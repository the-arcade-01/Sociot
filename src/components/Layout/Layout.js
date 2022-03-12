import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";

import Box from "@mui/material/Box";

const Layout = () => {
  return (
    <Box component="div">
      <LeftDrawer />
      <RightDrawer />
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
