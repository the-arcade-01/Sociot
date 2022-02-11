import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../store/UserContext";

const HomePage = () => {
  const [message, setMessage] = useState("");

  const UserCtx = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get("http://localhost:8000/private", {
        headers: { "auth-token": token },
      })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>
        {UserCtx.userData.name} {message}
      </h1>
    </div>
  );
};

export default HomePage;
