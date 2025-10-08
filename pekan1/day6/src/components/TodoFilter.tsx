import hamburger from "../assets/hamburger.svg";
import petir from "../assets/petir.svg";
import centang from "../assets/centang.svg";

export default function TodoFilter({ filter, setFilter }: any) {
  return (
    <div className="p-[4px] flex gap-[10px] justify-center mt-5 bg-[rgb(225,225,225)] rounded-2xl">
      <button
        className={`flex items-center gap-2 text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
          filter === "all"
            ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
            : "border-2 border-gray-300 rounded-2xl"
        }`}
        onClick={() => setFilter("all")}
      >
        {" "}
        <img src={hamburger} alt="" className="w-4 h-4" />
        <span>All</span>
      </button>
      <button
        className={`flex items-center gap-2 text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
          filter === "active"
            ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
            : "border-2 border-gray-300 rounded-2xl"
        }`}
        onClick={() => setFilter("active")}
      >
        <img src={petir} alt="" className="w-4 h-4" />
        <span>Active</span>
      </button>
      <button
        className={`flex items-center gap-2 text-black px-4 py-2 transition-all duration-200 ease-in-out cursor-pointer ${
          filter === "completed"
            ? "text-blue-700 border-2 border-gray-300 rounded-2xl"
            : "border-2 border-gray-300 rounded-2xl"
        }`}
        onClick={() => setFilter("completed")}
      >
        <img src={centang} alt="" className="w-4 h-4" />
        <span>Completed</span>
      </button>
    </div>
  );
}
