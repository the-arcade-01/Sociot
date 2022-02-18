import React from "react";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LogoutUser from "../AuthForms/LogoutUser";

const drawerWidth = 325;

const LeftDrawer = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        component="img"
        src="assets/sociot-logo.png"
        sx={{ transform: "scale(40%)" }}
      />
      <Typography variant="h4" sx={{ color: "#1da1f2" }}>
        Home
      </Typography>
      <LogoutUser />
    </Drawer>
  );
};

export default LeftDrawer;
