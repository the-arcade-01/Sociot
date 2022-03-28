import { useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import UserContext from "../../store/UserContext";

const CommentCard = ({ comment, handleDelete }) => {
  const UserCtx = useContext(UserContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();

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
          sx={{ width: 50, height: 50, background: "#95D3F9" }}
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
                  cursor: "pointer",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "450px",
                }}
              >
                {comment._creator._id === UserCtx.userData._id ? (
                  <div>
                    <i
                      className="fi fi-rr-trash"
                      style={{
                        color: "#657786",
                        fontSize: "18px",
                      }}
                      onClick={() => handleDelete(comment._id, comment)}
                    />
                  </div>
                ) : (
                  ""
                )}
                {pathname === "/activity" ? (
                  <Button
                    sx={{
                      background: "#1da1f2",
                      color: "#fff",
                      width: "120px",
                      height: "40px",
                      borderRadius: "50px",
                      "&:hover": {
                        background: "#65BFF6",
                      },
                      fontSize: "15px",
                      textTransform: "none",
                      fontFamily: "Inter",
                      alignSelf: "flex-end",
                      margin: "15px 20px 0 0",
                    }}
                    onClick={() => navigate(`/post/${comment._post}`)}
                  >
                    Open Post
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default CommentCard;
