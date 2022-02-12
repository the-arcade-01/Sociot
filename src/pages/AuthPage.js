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
          width: "1000px",
          height: "500px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div style={{ paddingLeft: "50px" }}>
          <Outlet />
        </div>
        <Box
          component="img"
          src="assets/auth.svg"
          sx={{
            height: "700px",
            width: "700px",
            marginRight: "-100px",
            marginTop: "-40px",
          }}
        />
      </Box>
    </Box>
  );
};

export default AuthPage;
