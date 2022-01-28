import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

const PostLayout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <PostCard />
    </div>
  );
};

const PostCard = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "#132c33",
        minHeight: "100px",
        color: "#d8e3e7",
        display: "flex",
        flexDirection: "column",
        padding: "15px 20px 10px 15px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        <Avatar
          alt="avatar"
          src="images/taichi.png"
          sx={{ width: 50, height: 50, cursor: "pointer" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <section
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px",
              gap: "10px",
            }}
          >
            <Typography variant="h6">Aashish</Typography>
            <Typography variant="body2">@the-arcade-01</Typography>
          </section>
          <section style={{ padding: "5px" }}>
            <a
              href="https://www.youtube.com/watch?v=AoUZXN35Xf0&list=PLwLSw1_eDZl0CVpnjetepbYfC4ZuePqo6&index=11"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                color: "magenta",
              }}
            >
              https://www.youtube.com/watch?v=AoUZXN35Xf0
            </a>
            <Typography variant="body1" sx={{ paddingTop: "10px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, :)
            </Typography>
            <Box
              component="img"
              src="images/wallpaper.jpg"
              sx={{
                maxWidth: "80%",
                maxHeight: "400px",
                paddingTop: "15px",
              }}
            />
          </section>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <section style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton sx={{ marginTop: "5px" }}>
            <i className="fi fi-rr-heart" style={{ color: "#d8e3e7" }} />
          </IconButton>
          <Typography variant="subtitle1">342</Typography>
        </section>
        <section style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton sx={{ marginTop: "5px" }}>
            <i className="fi fi-rr-comments" style={{ color: "#d8e3e7" }} />
          </IconButton>
          <Typography variant="subtitle1">342</Typography>
        </section>
        <section style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <IconButton sx={{ marginTop: "5px" }}>
            <i class="fi fi-rr-bookmark" style={{ color: "#d8e3e7" }} />
          </IconButton>
        </section>
      </div>
    </div>
  );
};

export default PostLayout;
