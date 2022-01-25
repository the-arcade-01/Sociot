import React from "react";

import SideDrawer from "./SideDrawer";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        margin: "35px 140px",
        display: "flex",
        gap: "70px",
      }}
    >
      <SideDrawer />
      {children}
    </div>
  );
};

export default Layout;
