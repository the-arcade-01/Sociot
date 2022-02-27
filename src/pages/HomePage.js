import React, { useState, useEffect } from "react";
import axios from "axios";

import Typography from "@mui/material/Typography";

import { format } from "date-fns";
import FeedDisplay from "../components/Feed/FeedDisplay";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/posts`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        console.log(res.data);
        setPosts(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
        // background: "#aab8c2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px 20px",
          position: "sticky",
          zIndex: 1,
          top: 0,
          background: "#fff",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "700" }}>
          Home
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "500", fontFamily: "Inter" }}
        >
          {format(new Date(), "do MMM y")}
        </Typography>
      </div>
      <FeedDisplay posts={posts} />
    </div>
  );
};

export default HomePage;
