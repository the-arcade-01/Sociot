import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";

import Box from "@mui/material/Box";

const Layout = ({ category, setCategory }) => {
  return (
    <Box component="div">
      <LeftDrawer />
      <RightDrawer category={category} setCategory={setCategory} />
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
