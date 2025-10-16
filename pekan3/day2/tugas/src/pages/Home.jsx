import FormLogin from "../components/FormLogin";
import HidenText from "../components/HidenText";
import Post from "../components/Post";
import Scoreboard from "../components/Scoreboard";
import LiveForm from "../components/LiveForm";
import ThemePreference from "../components/ThemePreference";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center ">
      <div className="p-5 mt-10 border border-gray-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tugas 1 (Use Toggle)
        </h1>
        <div className="flex gap-5 p-10">
          <div className="border border-gray-400 rounded-md p-10 shadow-sm w-70">
            <HidenText />
          </div>
          <div className="border border-gray-400 rounded-md p-10 shadow-sm">
            <FormLogin />
          </div>
        </div>
      </div>
      <div className="p-5 mt-10 border border-gray-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tugas 2 (Use Fetch)
        </h1>
        <div className="flex gap-5 p-10">
          <Post />
        </div>
      </div>
      <div className="p-5 mt-10 border border-gray-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tugas 3 (Use Counter + Toggle = useCounterWithToggle)
        </h1>
        <div className="flex gap-5 p-10">
          <Scoreboard />
        </div>
      </div>
      <div className="p-5 mt-10 border border-gray-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tugas 4 (Use Form)
        </h1>
        <div className="flex gap-5 p-10">
          <LiveForm />
        </div>
      </div>
      <div className="p-5 mt-10 border border-gray-500 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-5 text-center">
          Tugas 5 (Use Local Storage)
        </h1>
        <div className="flex gap-5 p-10">
          <ThemePreference />
        </div>
      </div>
    </div>
  );
}
