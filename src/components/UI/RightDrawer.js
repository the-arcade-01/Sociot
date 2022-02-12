import React from "react";

import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

const drawerWidth = 250;

const RightDrawer = () => {
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
      anchor="right"
    >
      <Typography variant="h4">Trending</Typography>
    </Drawer>
  );
};

export default RightDrawer;
