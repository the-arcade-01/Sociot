import { useState, useEffect } from "react";
import axios from "axios";

import CommentDisplay from "../components/Comments/CommentDisplay";

const ActivityPage = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get(`${process.env.REACT_APP_API_ENDPOINT}/comments/userComments`, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setComments(res.data.comments);
      });
  });
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
      }}
    >
      <CommentDisplay comments={comments} />
    </div>
  );
};

export default ActivityPage;
