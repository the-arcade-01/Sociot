import React from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const CategoriesToggleButton = ({ category, setCategory }) => {
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
    <ToggleButtonGroup
      value={category}
      exclusive
      onChange={(e, newCategory) => setCategory(newCategory)}
      sx={{
        background: "#126e82",
      }}
    >
      {categories.map((cate, index) => {
        return (
          <ToggleButton
            value={cate}
            key={index}
            sx={{
              color: "#d8e3e7",
            }}
          >
            {cate}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};

export default CategoriesToggleButton;
