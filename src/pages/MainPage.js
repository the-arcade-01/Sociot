import { useState, useEffect } from "react";
import axios from "axios";

import { useLocation } from "react-router-dom";

import FeedDisplay from "../components/Feed/FeedDisplay";

const MainPage = () => {
  const [feeds, setFeeds] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    let URL = `${process.env.REACT_APP_API_ENDPOINT}/posts`;
    if (location.pathname === "/posts") {
      URL += "/userPosts";
    }
    axios
      .get(URL, {
        headers: { "auth-token": token },
      })
      .then((res) => {
        console.log(res.data);
        setFeeds(res.data.posts);
      })
      .catch((err) => console.log(err));
  }, [location]);
  return (
    <div
      style={{
        marginLeft: "325px",
        width: "750px",
      }}
    >
      <FeedDisplay feeds={feeds} />
    </div>
  );
};

export default MainPage;
