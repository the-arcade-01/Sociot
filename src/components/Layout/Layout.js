import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import SideDrawer from "./SideDrawer";
import SortSelect from "./SortSelect";
import CategoriesToggleButton from "./CategoriesToggleButton";

const Layout = ({ children }) => {
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
      <SideDrawer />
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
