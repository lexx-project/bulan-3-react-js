import useToggle from "../hooks/UseToggle";

export default function HidenText() {
  const [isVisible, setIsVisible] = useToggle(false);
  return (
    <div className="flex flex-col items-center gap-3">
      {isVisible ? (
        <p
          className="text-center text-lg
        "
        >
          Ini Adalah Text Rahasia, Yang Sangat Rahasia Dan Tidak Sembarang Orang
          Bisa Membuka Text Rahasia Ini, Oke Mungkin Itu Saja Karena Saya Tidak
          Tahu Mau Menulis Apalagi, Ok Dah
        </p>
      ) : (
        ""
      )}
      <button
        onClick={setIsVisible}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {isVisible ? "hidden" : "show"}
      </button>
    </div>
  );
}
