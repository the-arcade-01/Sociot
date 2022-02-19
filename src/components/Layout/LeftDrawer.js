import React from "react";

import { Link, useNavigate } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";

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

  const navigate = useNavigate();

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
        sx={{ transform: "scale(40%)", marginTop: "15px", cursor: "pointer" }}
        onClick={() => navigate("/home")}
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
                <ListItemIcon sx={{ color: "#14171a" }}>
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
      <Button
        sx={{
          background: "#1da1f2",
          color: "#fff",
          width: "210px",
          height: "60px",
          borderRadius: "50px",
          "&:hover": {
            background: "#0C85D0",
          },
          fontSize: "18px",
          fontWeight: "700",
          textTransform: "none",
          fontFamily: "Inter",
          margin: "35px 0 0 60px",
        }}
        startIcon={
          <i
            className="fi fi-rr-magic-wand"
            style={{ padding: "5px 8px 0 0" }}
          />
        }
      >
        Create Post
      </Button>
      <Paper
        sx={{
          width: "250px",
          height: "75px",
          display: "flex",
          alignItems: "center",
          padding: "5px 15px",
          gap: "15px",
          marginBottom: "30px",
          cursor: "pointer",
          borderRadius: "50px",
          "&:hover": {
            background: "#e1e8ed",
          },
          paddingLeft: "20px",
          margin: "150px 0 0 35px",
        }}
      >
        <Avatar
          alt="avatar"
          src="images/taichi.png"
          sx={{ width: 45, height: 45 }}
        />
        <div>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700", flexWrap: "nowrap" }}
          >
            Aashish
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "15px",
              color: "#657786",
              marginTop: "-3px",
            }}
          >
            @the-arcade-01
          </Typography>
        </div>
        <i className="fi fi-rr-menu-dots-vertical" />
      </Paper>
    </Drawer>
  );
};

export default LeftDrawer;
