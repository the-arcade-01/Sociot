import { useState, useContext } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import UserContext from "../store/UserContext";
import PostContext from "../store/PostContext";
import UserPostContext from "../store/UserPostContext";

import { categories } from "../components/utils/categoryArray";

const style = {
  position: "absolute",
  top: "10%",
  left: "27%",
  width: 600,
  minHeight: 300,
  color: "#14171a",
  backgroundColor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const CreateModalPage = ({ openCreateModal, setOpenCreateModal }) => {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  const [category, setCategory] = useState("All");

  const UserCtx = useContext(UserContext);
  const PostCtx = useContext(PostContext);
  const UserPostCtx = useContext(UserPostContext);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const token = localStorage.getItem("auth-token");
    await axios
      .post(
        `${process.env.REACT_APP_API_ENDPOINT}/posts/create`,
        { text, link, category },
        {
          headers: { "auth-token": token },
        }
      )
      .then((res) => {
        const {
          category,
          createdAt,
          likes,
          link,
          postImage,
          text,
          _comments,
          _id,
        } = res.data.newPost;

        const newPost = {
          category,
          createdAt,
          likes,
          link,
          postImage,
          text,
          _comments,
          _id,
          _creator: UserCtx.userData,
        };

        const newPosts = PostCtx.posts;
        newPosts.unshift(newPost);
        PostCtx.setPosts(newPosts);

        const newUserPosts = UserPostCtx.userPosts;
        newUserPosts.unshift(newPost);
        UserPostCtx.setUserPosts(newUserPosts);

        setText("");
        setLink("");
        setCategory("All");
        setOpenCreateModal(false);
        navigate("/home", { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCreateModal}>
          <form onSubmit={handleSubmit}>
            <Box sx={style}>
              <TextareaAutosize
                style={{
                  minHeight: "70px",
                  maxWidth: "100%",
                  fontSize: "18px",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                  fontFamily: "Inter",
                }}
                placeholder="Write something awesome :)"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <TextField
                autoComplete="off"
                sx={{
                  marginTop: "15px",
                  outline: "none",
                  input: {
                    color: "#1da1f2",
                    fontFamily: "Inter",
                    fontWeight: "600",
                  },
                  background: "#f3f3f3",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
                placeholder="Want to add a link? (eg. youtube, blog post, website etc)"
                onChange={(e) => setLink(e.target.value)}
              />
              <div
                style={{
                  paddingTop: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: 170 }}>
                  <FormControl fullWidth>
                    <Select
                      value={category}
                      onChange={handleChange}
                      sx={{
                        background: "#f5f5f5",
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    >
                      {categories.map((category, index) => {
                        return (
                          <MenuItem key={index} value={category}>
                            {category}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  sx={{
                    background: "#1da1f2",
                    color: "#fff",
                    width: "80px",
                    height: "40px",
                    borderRadius: "50px",
                    "&:hover": {
                      background: "#0C85D0",
                    },
                    fontSize: "16px",
                    textTransform: "none",
                    fontFamily: "Inter",
                  }}
                >
                  Post
                </Button>
              </div>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateModalPage;
