import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";
import ThemedButton from "./ThemedButton";

export default function Navbar() {
  const { theme } = useContext(ThemeContext);

  const user = useContext(UserContext).user;
  return (
    <>
      <nav
        className={`${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-[#637AB9]"
        } flex justify-between items-center p-2`}
      >
        <div className="flex items-center gap-2">
          <img
            src="https://upload.lexxganz.my.id/uploads/avatar.png"
            alt="avatar"
            className="flex w-20 h-20 rounded-[50%]"
          />
          <p
            className={`text-[20px] font-bold ${
              theme === "dark" ? "text-white" : "text-blue-200"
            }`}
          >
            {user.name}
          </p>
        </div>
        <ThemedButton />
      </nav>
    </>
  );
}
