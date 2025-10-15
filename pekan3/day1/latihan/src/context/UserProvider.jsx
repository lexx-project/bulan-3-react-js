import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Guest",
    isLoggin: false,
  });

  const login = (username) => {
    setUser({ name: username, isLoggin: true });
  };

  const logout = () => {
    setUser({ name: "Guest", isLoggin: false });
  };

  const contextValue = { user, login, logout };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
