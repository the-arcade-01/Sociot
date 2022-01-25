import React from "react";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <Box sx={{ background: "#126e82", borderRadius: "5px" }}>
      <FormControl>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          sx={{
            border: "none",
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            color: "#d8e3e7",
            fontWeight: "500",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value={"latest"}>Latest</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortSelect;
