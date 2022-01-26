import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CreatePost = () => {
  const categories = [
    "Music",
    "Funny",
    "Videos",
    "Programming",
    "News",
    "Fashion",
  ];

  return (
    <Paper
      sx={{
        background: "#132c33",
        padding: "20px 40px",
        height: "500px",
        width: "780px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "500", color: "#d8e3e7" }}>
        Create Post
      </Typography>
      <form autoComplete="off" style={{ margin: "30px 40px" }}>
        <div
          style={{
            display: "flex",
            gap: "95px",
          }}
        >
          <InputLabel>
            <Typography
              variant="h6"
              sx={{ color: "#d8e3e7", marginTop: "10px" }}
            >
              Title
            </Typography>
          </InputLabel>
          <TextField
            sx={{
              background: "#d8e3e7",
              color: "#132c33",
              fontWeight: "500",
              height: "55px",
              width: "400px",
              borderRadius: "10px",
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
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "20px",
          }}
        >
          <Typography variant="h6" sx={{ color: "#d8e3e7" }}>
            Categories
          </Typography>
          <Box sx={{ background: "#126e82", borderRadius: "5px" }}>
            <Select
              sx={{
                border: "none",
                width: "100px",
                height: "50px",
                borderRadius: "5px",
                color: "#d8e3e7",
                fontWeight: "500",
                minWidth: "100px",
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
              {categories.map((cate, index) => {
                return (
                  <MenuItem key={index} value={`${cate}.toLowerCase()`}>
                    {cate}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </div>
      </form>
    </Paper>
  );
};

export default CreatePost;
