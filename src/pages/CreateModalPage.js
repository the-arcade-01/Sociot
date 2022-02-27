import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import axios from "axios";

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
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, text });
    setTitle("");
    setText("");
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
              <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                sx={{ fontFamily: "Inter" }}
              />
              <TextareaAutosize
                style={{
                  minHeight: "100px",
                  maxWidth: "100%",
                  fontSize: "18px",
                  padding: "10px",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                  fontFamily: "Inter",
                }}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button type="submit">Post</Button>
            </Box>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};

export default CreateModalPage;
