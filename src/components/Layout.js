import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import { FiEdit } from "react-icons/fi";

const Layout = ({ children }) => {
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
          <FiEdit />
        </Paper>
      </section>
    </div>
  );
};

export default Layout;
