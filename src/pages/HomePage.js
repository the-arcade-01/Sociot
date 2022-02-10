import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import UserContext from "../store/UserContext";

const HomePage = () => {
  const [message, setMessage] = useState("");

  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:8000/private", {
        headers: { "auth-token": user.token },
      })
      .then((res) => {
        console.log(res);
        setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{message}</h1>
    </div>
  );
};

export default HomePage;
