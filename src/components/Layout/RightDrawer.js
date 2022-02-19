import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const drawerWidth = 300;

const RightDrawer = () => {
  const [category, setCategory] = useState("all");
  const categories = [
    "all",
    "music",
    "funny",
    "videos",
    "programming",
    "news",
    "fashion",
  ];
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
      <Typography
        variant="h6"
        sx={{
          margin: "30px 0 20px 20px",
          fontWeight: "500",
          fontFamily: "Inter",
        }}
      >
        Categories
      </Typography>
      <ToggleButtonGroup
        value={category}
        orientation="vertical"
        exclusive
        onChange={(e, newCategory) => setCategory(newCategory)}
      >
        {categories.map((cate, index) => {
          return (
            <ToggleButton
              value={cate}
              key={index}
              sx={{
                color: "#14171a",
                fontFamily: "Open Sans",
                fontWeight: "500",
                "&.Mui-selected": {
                  background: "#1da1f2",
                  color: "#fff",
                  fontWeight: "700",
                },
                "&.Mui-selected:hover": {
                  background: "#1da1f2",
                  color: "#fff",
                  fontWeight: "700",
                },
              }}
            >
              {cate}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </Drawer>
  );
};

export default RightDrawer;
