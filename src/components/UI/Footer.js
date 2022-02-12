import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box
      component="div"
      sx={{
        marginTop: "1rem",
        bottom: 0,
        left: 0,
        position: "fixed",
        backgroundColor: "#ded8d5",
        padding: "1.2rem",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontWeight: "500" }}>
        {" "}
        &copy; Made by{" "}
        <a
          href="https://github.com/the-arcade-01"
          style={{
            textDecoration: "none",
            fontWeight: "600",
            color: "#1da1f2",
          }}
          target="_blank"
          rel="noreferrer"
        >
          Aashish Koshti
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
