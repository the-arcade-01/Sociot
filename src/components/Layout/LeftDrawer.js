import React from "react";

import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LogoutUser from "../AuthForms/LogoutUser";

const drawerWidth = 325;

const LeftDrawer = () => {
  const pages = [
    {
      icon: (
        <i
          className="fi fi-rr-home"
          style={{ fontSize: "25px", marginTop: "5px" }}
        />
      ),
      page: "Home",
    },
    {
      icon: (
        <i
          className="fi fi-rr-picture"
          style={{ fontSize: "25px", marginTop: "5px" }}
        />
      ),
      page: "Your Posts",
    },
    {
      icon: (
        <i
          className="fi fi-rr-time-fast"
          style={{ fontSize: "25px", marginTop: "5px" }}
        />
      ),
      page: "Your Activity",
    },
    {
      icon: (
        <i
          className="fi fi-rr-bookmark"
          style={{ fontSize: "25px", marginTop: "5px" }}
        />
      ),
      page: "Saved Posts",
    },
    // {
    //   icon: (
    //     <i
    //       className="fi fi-rr-sign-out-alt"
    //       style={{ fontSize: "25px", marginTop: "5px" }}
    //     />
    //   ),
    //   page: "Logout",
    // },
  ];

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box
        component="img"
        src="assets/sociot-logo.png"
        sx={{ transform: "scale(40%)", marginTop: "15px" }}
      />
      <Paper sx={{ marginLeft: "50px", marginTop: "10px" }}>
        <List
          sx={{
            maxWidth: "220px",
            bgcolor: "background.paper",
          }}
        >
          {pages.map((page) => {
            return (
              <ListItemButton sx={{ borderRadius: "50px" }}>
                <ListItemIcon sx={{ color: "rgba(0, 0, 0, 0.87)" }}>
                  {page.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontFamily: "Inter",
                    fontSize: "20px",
                  }}
                >
                  {page.page}
                </Typography>
              </ListItemButton>
            );
          })}
        </List>
      </Paper>
    </Drawer>
  );
};

export default LeftDrawer;
