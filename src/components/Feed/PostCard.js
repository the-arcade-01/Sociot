import React, { useContext } from "react";

import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import UserContext from "../../store/UserContext";

const PostCard = ({ feed }) => {
  const UserCtx = useContext(UserContext);
  return (
    <Paper
      sx={{
        // marginTop: "10px",
        // background: "#aab8c2",
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
                {feed._creator.name}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#657786",
                  marginTop: "-3px",
                }}
              >
                @{feed._creator.username}
              </Typography>
            </div>
            <Typography
              variant="body2"
              sx={{
                background: "#65BFF6",
                padding: "4px 12px",
                borderRadius: "50px",
                color: "#fff",
                fontWeight: "600",
                fontFamily: "Inter",
                marginTop: "-2px",
                position: "absolute",
                right: "340px",
              }}
            >
              Videos
            </Typography>
          </div>
          <div>
            <Typography variant="body1" sx={{ fontFamily: "Inter" }}>
              {feed.text}
            </Typography>
            {/* <Typography>
              <a
                href="https://www.youtube.com/watch?v=iDR7Je5ORwg"
                style={{ textDecoration: "none", color: "#1da1f2" }}
              >
                https://www.youtube.com/watch?v=iDR7Je...
              </a>
            </Typography> */}
            {/* <Box
              component="img"
              src="assets/monkey.jpeg"
              sx={{
                maxHeight: "400px",
                maxWidth: "600px",
                marginTop: "10px",
                borderRadius: "15px",
              }}
            /> */}
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
                }}
              >
                <i className="fi fi-rr-comment" style={{ color: "#657786" }} />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Inter", color: "#657786" }}
                >
                  19
                </Typography>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <i
                  className="fi fi-rr-thumbs-up"
                  style={{ color: "#657789" }}
                />
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "Inter", color: "#657786" }}
                >
                  1675
                </Typography>
              </div>
              <i className="fi fi-rr-bookmark" style={{ color: "#657786" }} />
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  cursor: "pointer",
                }}
              >
                {feed._creator._id === UserCtx.userData.id ? (
                  <div>
                    <i
                      className="fi fi-rr-pencil"
                      style={{
                        color: "#657786",
                      }}
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

export default PostCard;
