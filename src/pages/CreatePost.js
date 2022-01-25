import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CreatePost = () => {
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
    </Paper>
  );
};

export default CreatePost;
