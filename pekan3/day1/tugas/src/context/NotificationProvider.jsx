import { useState } from "react";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({ children }) => {
  const [unreadCount, setUnreadCount] = useState(0);

  const clearNotifications = () => {
    setUnreadCount(0);
  };

  const addNotification = () => {
    setUnreadCount((prevCount) => prevCount + 1);
  };

  const value = {
    unreadCount,
    addNotification,
    clearNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
