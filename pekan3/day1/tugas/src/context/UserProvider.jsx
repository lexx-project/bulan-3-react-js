import { useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: null,
    email: null,
    isLogin: false,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
