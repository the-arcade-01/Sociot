import React from "react";

import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";

const AuthPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e1e8ed",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="div"
        elevation={3}
        sx={{
          backgroundColor: "#fff",
          width: "500px",
          height: "500px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};

export default AuthPage;
