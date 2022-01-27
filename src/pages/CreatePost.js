import React, { useState } from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("music");
  const [link, setLink] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, category, link);
    setTitle("");
    setCategory("music");
    setLink("");
  };

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
        height: "630px",
        width: "780px",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "500", color: "#d8e3e7" }}>
        Create Post
      </Typography>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        style={{ margin: "30px 40px" }}
      >
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
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            marginTop: "25px",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#d8e3e7" }}>
            Categories
          </Typography>
          <Box
            sx={{
              background: "#126e82",
              borderRadius: "5px",
            }}
          >
            <Select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              sx={{
                border: "none",
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
              {categories.map((cate, index) => {
                return (
                  <MenuItem key={index} value={cate.toLowerCase()}>
                    {cate}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            gap: "100px",
            marginTop: "25px",
          }}
        >
          <InputLabel>
            <Typography
              variant="h6"
              sx={{ color: "#d8e3e7", marginTop: "10px" }}
            >
              Link
            </Typography>
          </InputLabel>
          <TextField
            value={link}
            onChange={(e) => setLink(e.target.value)}
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
        <Button
          sx={{
            background: "#126e82",
            color: "#d8e3e7",
            width: "100px",
            height: "50px",
            borderRadius: "10px",
            "&:hover": {
              background: "#172126",
            },
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CreatePost;
