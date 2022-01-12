import React from "react";
import { Typography, Drawer } from "@mui/material";
import { makeStyles } from "@mui/styles";

const drawerWidth = 330;

const useStyles = makeStyles((theme) => {
  return {
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    position: {
      justifyItems: "center",
      paddingLeft: theme.spacing(10),
      paddingTop: theme.spacing(2),
    },
    title: {},
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div className={classes.position}>
          <Typography variant="h4" component="h1" className={classes.title}>
            FedIt
          </Typography>
        </div>
      </Drawer>
    </div>
  );
};

export default Layout;
