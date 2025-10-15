import { useUserContext } from "../context/UserContext";

export default function UserInfo() {
  const { user, setUser } = useUserContext();
  const { name, email, isLogin } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    setUser({ ...user, isLogin: true });
  };

  const handleLogout = () => {
    setUser({ name: null, email: null, isLogin: false });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 rounded shadow">
        {isLogin ? (
          <>
            <p className="text-lg font-semibold">Welcome, {name}!</p>
            <p className="text-gray-600">Email: {email}</p>
            <button
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <p
              className="text-lg font-semibold text-red-500 m-5
            "
            >
              You Not Login, Please Login!
            </p>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-[-10px]"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id=""
                className="border p-2 mt-4"
                value={name}
                onChange={handleChange}
              />
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700 mb-[-10px] mt-5"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="border p-2 mt-4"
                value={email}
                onChange={handleChange}
              />
            </div>
            <button
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        )}
      </div>
    </>
  );
}
