import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    axios
      .get("http://localhost:8000/private", {
        headers: { "auth-token": token },
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
