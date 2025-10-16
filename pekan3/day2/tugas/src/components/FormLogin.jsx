import useToggle from "../hooks/UseToggle";

export default function FormLogin() {
  const [isShow, setIsShow] = useToggle(false);
  return (
    <>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-bold mb-5">Login Page</h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <div>
            <label className="text-lg">Username</label>
            <input
              type="text"
              className="border border-black rounded-md p-2 w-full mt-1"
              placeholder="masukkan username"
            />
          </div>

          <div>
            <label className="text-lg">Password</label>
            <div className="relative flex items-center border border-black rounded-md mt-1">
              <input
                type={isShow ? "text" : "password"}
                className="p-2 w-full border-none focus:outline-none focus:ring-0 bg-transparent"
                placeholder="masukkan password"
              />
              <button
                type="button"
                onClick={() => setIsShow()}
                className="absolute right-3 text-sm cursor-pointer text-gray-500"
              >
                {isShow ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
