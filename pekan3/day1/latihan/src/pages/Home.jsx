import { useContext } from "react";
import Navbar from "../components/Navbar";
import UserContext from "../context/UserContext";
export default function Home() {
  const { user, login, logout } = useContext(UserContext);

  return (
    <>
      <main>
        <Navbar />
        <div className="flex justify-center items-center pt-10 flex-col gap-5">
          <h1 className="text-4xl">
            Welcome, <span className="font-bold">{user.name}</span>
          </h1>
          <div>
            {user.isLoggin ? (
              <button
                className="bg-red-500 text-white p-2 rounded ml-4"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <>
                <input
                  type="text"
                  className="border border-gray-400 p-2 rounded"
                  placeholder="Enter your name"
                  onChange={(e) => (user.name = e.target.value)}
                />
                <button
                  className="bg-green-500 text-white p-2 rounded ml-4"
                  onClick={() => login(user.name)}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
