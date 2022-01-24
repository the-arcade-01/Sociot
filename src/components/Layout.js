import React from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { FiEdit } from "react-icons/fi";
import { BiCommentDetail } from "react-icons/bi";
import { BsJournalBookmark } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";

const Layout = ({ children }) => {
  const pages = [
    { icon: <HiOutlinePhotograph />, page: "Posts" },
    { icon: <BiCommentDetail />, page: "Activity" },
    { icon: <BsJournalBookmark />, page: "Saved Posts" },
  ];
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
        <Paper
          sx={{
            background: "#fff",
            width: "200px",
            height: "200px",
          }}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem key={index}>
                  {page.icon}
                  <Typography variant="body1">{page.page}</Typography>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </section>
    </div>
  );
};

export default Layout;
