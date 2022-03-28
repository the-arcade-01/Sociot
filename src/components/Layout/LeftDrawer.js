import React, { useState, useContext } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import LogoutUser from "../AuthForms/LogoutUser";
import CreateModalPage from "../../pages/CreateModalPage";

import UserContext from "../../store/UserContext";

import { pages } from "../utils/pageArray";

const drawerWidth = 325;

const LeftDrawer = () => {
  const UserCtx = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [openCreateModal, setOpenCreateModal] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        sx={{
          transform: "scale(35%)",
          marginTop: "15px",
          cursor: "pointer",
          marginLeft: "-60px",
        }}
        onClick={() => navigate("/home")}
      />
      <Paper sx={{ marginLeft: "50px", marginTop: "30px" }}>
        <List
          sx={{
            maxWidth: "220px",
            bgcolor: "background.paper",
          }}
        >
          {pages.map((page) => {
            return (
              <ListItemButton
                key={page.page}
                sx={{
                  borderRadius: "50px",
                  background:
                    location.pathname === page.value ? "#f5f5f5" : null,
                }}
                component={Link}
                to={page.value}
              >
                <ListItemIcon sx={{ color: "#14171a" }}>
                  {page.icon}
                </ListItemIcon>
                <Typography
                  sx={{
                    fontFamily: "Open Sans",
                    fontSize: "20px",
                    fontWeight:
                      location.pathname === page.value ? "600" : "500",
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
        onClick={() => setOpenCreateModal(true)}
      >
        Create Post
      </Button>
      <CreateModalPage
        setOpenCreateModal={setOpenCreateModal}
        openCreateModal={openCreateModal}
      />
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
          src="assets/taichi.png"
          sx={{ width: 50, height: 50, background: "#f5f8fa" }}
        />
        <div>
          <Typography
            variant="body1"
            sx={{ fontWeight: "700", flexWrap: "nowrap" }}
          >
            {UserCtx.userData.name}
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "15px",
              color: "#657786",
              marginTop: "-3px",
            }}
          >
            @{UserCtx.userData.username}
          </Typography>
        </div>
        <i
          className="fi fi-rr-menu-dots-vertical"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{ marginTop: "-20px" }}
        >
          <MenuItem onClick={handleClose}>
            <LogoutUser />
          </MenuItem>
        </Menu>
      </Paper>
    </Drawer>
  );
};

export default LeftDrawer;
