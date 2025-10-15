import { createContext, useContext } from "react";

const UserContext = createContext(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export default UserContext;
