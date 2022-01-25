import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Layout = ({ children }) => {
  const pages = [
    {
      icon: (
        <i
          className="fi fi-rr-home"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Home",
    },
    {
      icon: (
        <i
          className="fi fi-rr-picture"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Your Posts",
    },
    {
      icon: (
        <i
          className="fi fi-rr-time-fast"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Your Activity",
    },
    {
      icon: (
        <i
          className="fi fi-rr-bookmark"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Saved Posts",
    },
  ];
  return (
    <div style={{ padding: "30px 140px" }}>
      <section>
        <Paper
          sx={{
            color: "#d8e3e7",
            background: "#132c33",
            width: "220px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            padding: "5px 15px",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <Avatar
            alt="avatar"
            src="images/UA6.png"
            sx={{ width: 45, height: 45, cursor: "pointer" }}
          />
          <div>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Alexandar
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "500", cursor: "pointer", color: "#acdbdf" }}
            >
              @alexandarborke
            </Typography>
          </div>
        </Paper>
        <Paper
          sx={{
            width: "220px",
            height: "250px",
            color: "#d8e3e7",
            background: "#126e82",
            padding: "10px 10px",
            marginBottom: "30px",
          }}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                  button
                  divider
                >
                  {page.icon}
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    {page.page}
                  </Typography>
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
