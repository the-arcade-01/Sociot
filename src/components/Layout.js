import React from "react";

import { Typography, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 300;

const useStyles = makeStyles({
  root: {
    color: "#000",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Typography variant="h5" sx={{ color: "#000" }}>
          Meowth
        </Typography>
      </Drawer>
    </div>
  );
};

export default Layout;
