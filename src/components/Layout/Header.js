import React from "react";

import { useLocation } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { format } from "date-fns";

import { pages } from "../utils/pageArray";

const Header = () => {
  const location = useLocation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 20px",
        position: "sticky",
        zIndex: 1,
        top: 0,
        background: "#fff",
        marginLeft: "325px",
        width: "750px",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "700" }}>
        {pages.map((page) => {
          if (page.value === location.pathname) {
            return page.page;
          }
          return "";
        })}
      </Typography>
      <Typography
        variant="body1"
        sx={{ fontWeight: "500", fontFamily: "Inter", marginRight: "15px" }}
      >
        {format(new Date(), "do MMM y")}
      </Typography>
    </div>
  );
};

export default Header;
