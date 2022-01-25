import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import SortSelect from "./SortSelect";
import CategoriesToggleButton from "./CategoriesToggleButton";

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
    {
      icon: (
        <i
          className="fi fi-rr-sign-out-alt"
          style={{ fontSize: "20px", marginTop: "5px" }}
        />
      ),
      page: "Logout",
    },
  ];
  const [sortBy, setSortBy] = useState("latest");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search, sortBy, category);
    setSearch("");
  };

  return (
    <div
      style={{
        margin: "35px 140px",
        display: "flex",
        gap: "70px",
      }}
    >
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
            src="images/taichi.png"
            sx={{ width: 45, height: 45, cursor: "pointer" }}
          />
          <div>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Aashish
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "500", cursor: "pointer", color: "#acdbdf" }}
            >
              @the-arcade-01
            </Typography>
          </div>
        </Paper>
        <Paper
          sx={{
            width: "220px",
            height: "300px",
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
      <section style={{ marginTop: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "40px",
          }}
        >
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
          <form autoComplete="off" onSubmit={onSubmit}>
            <FormControl>
              <TextField
                placeholder="Search"
                sx={{
                  background: "#d8e3e7",
                  color: "#132c33",
                  fontWeight: "500",
                  height: "55px",
                  width: "400px",
                  borderRadius: "10px",
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <i
                        className="fi fi-rr-search"
                        style={{ fontSize: "20px", paddingRight: "5px" }}
                      />
                    </InputAdornment>
                  ),
                }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </FormControl>
          </form>
          <Button
            sx={{
              background: "#126e82",
              color: "#d8e3e7",
              width: "150px",
              height: "50px",
              borderRadius: "10px",
              "&:hover": {
                background: "#132c33",
              },
            }}
            startIcon={
              <i
                className="fi fi-rr-magic-wand"
                style={{ paddingLeft: "5px" }}
              />
            }
          >
            Create Post
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
            margin: "30px auto",
          }}
        >
          <Typography
            variant="subtitle"
            sx={{ fontWeight: "500", color: "#d8e3e7" }}
          >
            Categories
          </Typography>
          <CategoriesToggleButton
            category={category}
            setCategory={setCategory}
          />
        </div>
      </section>
    </div>
  );
};

export default Layout;
