import { createContext, useState } from "react";

const UserContext = createContext({
  token: null,
  addUser: (newUser) => {},
  removeUser: () => {},
});

export const UserContextProvider = (props) => {
  const [user, setUser] = useState("");

  const addUserHandler = (newUser) => {
    localStorage.removeItem("auth-token");
    localStorage.setItem("auth-token", newUser);
    setUser(newUser);
  };
  const removeUserHandler = () => {
    localStorage.removeItem("auth-token");
    setUser("");
  };
  const context = {
    token: user,
    addUser: addUserHandler,
    removeUser: removeUserHandler,
  };
  return (
    <UserContext.Provider value={context}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
