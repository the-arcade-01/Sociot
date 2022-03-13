import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import UserContext from "../../store/UserContext";

import axios from "axios";

const CommentCard = ({ comment }) => {
  const UserCtx = useContext(UserContext);
  const token = localStorage.getItem("auth-token");

  const handleDelete = async (_id) => {
    await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/comments/${_id}`,
      {
        headers: { "auth-token": token },
      }
    );
  };
  return (
    <Paper
      sx={{
        minHeight: "100px",
        padding: "15px 20px",
        border: "1px solid #f3f3f3",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <Avatar
          alt="avatar"
          src="assets/taichi.png"
          sx={{ width: 50, height: 50, background: "#f5f8fa" }}
        />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                alignSelf: "flex-start",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "700", flexWrap: "nowrap" }}
              >
                {comment._creator.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#657786",
                  marginTop: "-3px",
                }}
              >
                @{comment._creator.username}
              </Typography>
            </div>
          </div>
          <div>
            <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
              {comment.text}
            </Typography>
            <div
              style={{
                display: "flex",
                gap: "130px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  cursor: "pointer",
                }}
              >
                {comment._creator._id === UserCtx.userData.id ? (
                  <div>
                    <i
                      className="fi fi-rr-trash"
                      style={{
                        color: "#657786",
                      }}
                      onClick={() => handleDelete(comment._id)}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CommentCard;
