import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Layout = ({ children }) => {
  const pages = [
    {
      icon: (
        <i
          className="fi fi-rr-home"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Home",
    },
    {
      icon: (
        <i
          className="fi fi-rr-picture"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Your Posts",
    },
    {
      icon: (
        <i
          className="fi fi-rr-time-fast"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Your Activity",
    },
    {
      icon: (
        <i
          className="fi fi-rr-bookmark"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Saved Posts",
    },
  ];
  const [sortBy, setSortBy] = useState("latest");

  return (
    <div style={{ padding: "30px 140px", display: "flex", gap: "50px" }}>
      <section>
        <Paper
          sx={{
            color: "#d8e3e7",
            background: "#132c33",
            width: "220px",
            height: "80px",
            display: "flex",
            alignItems: "center",
            padding: "5px 15px",
            gap: "15px",
            marginBottom: "30px",
          }}
        >
          <Avatar
            alt="avatar"
            src="images/UA6.png"
            sx={{ width: 45, height: 45, cursor: "pointer" }}
          />
          <div>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Alexandar
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "500", cursor: "pointer", color: "#acdbdf" }}
            >
              @alexandarborke
            </Typography>
          </div>
        </Paper>
        <Paper
          sx={{
            width: "220px",
            height: "250px",
            color: "#d8e3e7",
            background: "#126e82",
            padding: "10px 10px",
            marginBottom: "30px",
          }}
        >
          <List>
            {pages.map((page, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                  }}
                  button
                  divider
                >
                  {page.icon}
                  <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                    {page.page}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Paper>
      </section>
      <section>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "500", color: "#d8e3e7" }}
          >
            Sort By
          </Typography>
          <SortSelect sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </section>
    </div>
  );
};

const SortSelect = ({ sortBy, setSortBy }) => {
  return (
    <Box sx={{ background: "#126e82", borderRadius: "5px" }}>
      <FormControl>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          sx={{
            border: "none",
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            color: "#d8e3e7",
            fontWeight: "500",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        >
          <MenuItem value={"latest"}>Latest</MenuItem>
          <MenuItem value={"votes"}>Votes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Layout;
