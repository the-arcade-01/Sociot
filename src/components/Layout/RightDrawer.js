import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { categories } from "../utils/categoryArray";

const drawerWidth = 315;

const RightDrawer = () => {
  const [category, setCategory] = useState("all");

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
      <Typography
        sx={{
          fontWeight: "500",
          fontFamily: "Inter",
          margin: "225px 0px 0px 43px",
        }}
      >
        {" "}
        &copy; Made by{" "}
        <a
          href="https://github.com/the-arcade-01"
          style={{
            textDecoration: "none",
            fontWeight: "700",
            color: "#1da1f2",
          }}
          target="_blank"
          rel="noreferrer"
        >
          Aashish Koshti
        </a>
      </Typography>
    </Drawer>
  );
};

export default RightDrawer;
