import React from "react";

import Typography from "@mui/material/Typography";

const Welcome = () => {
  const features = [
    "Users can create an account (authentication)",
    "Users can create a post including image and a link",
    "Users can like and comment on a post",
    "Users can see their activity",
    "Users can delete their posts and comments",
    "Users can get categorized feed",
  ];
  return (
    <div style={{ marginLeft: "350px", padding: "20px", width: "700px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "600", paddingBottom: "15px" }}
      >
        Welcome!!
      </Typography>
      <Typography sx={{ fontSize: "18px", paddingBottom: "15px" }}>
        This project is basically an example of a fullstack social media
        application.
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: "600" }}>
        Features:
      </Typography>
      <div style={{ padding: "0px 20px" }}>
        <ul>
          {features.map((feature, index) => {
            return (
              <li key={index}>
                <Typography sx={{ padding: "5px" }}>{feature}</Typography>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
