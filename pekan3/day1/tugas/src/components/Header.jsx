import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { NotificationContext } from "../context/NotificationContext";

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { unreadCount, clearNotifications, addNotification } =
    useContext(NotificationContext);

  const languageLabel = language === "english" ? "English" : "Indonesia";

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-blue-600 text-white ">
      <div>
        <h1 className="text-xl font-semibold">TUGAS NO 3</h1>
        <p className="text-sm">Bahasa saat ini: {languageLabel}</p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={toggleLanguage}
          className="rounded bg-white px-3 py-1 text-sm font-medium text-blue-600 shadow hover:bg-gray-200  cursor-pointer"
        >
          Ganti Bahasa
        </button>
        <div className="flex items-center gap-2">
          <span className="text-sm">Notifikasi: {unreadCount}</span>
          <button
            type="button"
            onClick={() => {
              addNotification();
            }}
            className="rounded bg-white px-3 py-1 text-sm font-medium text-blue-600 shadow hover:bg-gray-200 cursor-pointer"
          >
            Tambah Notifikasi
          </button>
          <button
            type="button"
            onClick={clearNotifications}
            className="rounded border border-white px-3 py-1 text-sm hover:bg-white hover:text-blue-600 cursor-pointer"
          >
            Bersihkan
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
