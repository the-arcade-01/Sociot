import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>From the layout</h1>
      {children}
    </div>
  );
};

export default Layout;
