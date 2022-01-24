import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Layout = ({ children }) => {
  const pages = [
    { icon: <i class="fi fi-rr-home" />, page: "Home" },
    { icon: <i class="fi fi-rr-picture" />, page: "Your Posts" },
    { icon: <i class="fi fi-rr-comment" />, page: "Your Activity" },
    { icon: <i class="fi fi-rr-bookmark" />, page: "Saved Posts" },
  ];
  return (
    <div style={{ padding: "30px 140px" }}>
      <section>
        <Paper
          sx={{
            background: "#fff",
            width: "300px",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="avatar"
            src="images/UA6.png"
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h2">Hello</Typography>
        </Paper>
        <Paper
          sx={{
            background: "#fff",
            width: "200px",
            height: "200px",
          }}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem key={index}>
                  {page.icon}
                  <Typography variant="body1">{page.page}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </section>
    </div>
  );
};

export default Layout;
