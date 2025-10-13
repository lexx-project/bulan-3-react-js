import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

function ChildA({ onDataFromChildA }) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [childAInput, setChildAInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setChildAInput(value);
    onDataFromChildA(value);
  };

  return (
    <div
      className={`p-4 rounded-md transition-colors duration-300 ${
        isLight
          ? "border border-blue-400 bg-blue-50 text-blue-800"
          : "border border-blue-500 bg-blue-900/40 text-blue-100"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2"> Childern A</h3>
      <input
        type="text"
        className={`border p-2 rounded-md w-full transition-colors duration-300 ${
          isLight
            ? "border-blue-300 bg-white text-blue-900"
            : "border-blue-600 bg-gray-900 text-blue-100 placeholder-blue-200"
        }`}
        value={childAInput}
        onChange={handleChange}
        placeholder="Ketik di Anak A"
      />
      <p className="mt-2">{`Childern A Data: ${childAInput}`}</p>
    </div>
  );
}

function ChildB({ dataFromParent }) {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div
      className={`p-4 rounded-md transition-colors duration-300 ${
        isLight
          ? "border border-green-400 bg-green-50 text-green-800"
          : "border border-green-500 bg-green-900/40 text-green-100"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">children b</h3>
      <p>
        get from Parent: <span className="font-medium">{dataFromParent}</span>
      </p>
    </div>
  );
}

function StateSharingBetweenComponents() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [sharedData, setSharedData] = useState("");

  const handleDataFromChildA = (data) => {
    setSharedData(data);
  };

  return (
    <div
      className={`max-w-2xl mx-auto p-8 rounded-lg transition-colors duration-300 ${
        isLight
          ? "bg-white text-gray-800 shadow-lg"
          : "bg-gray-800 text-gray-100 shadow-lg border border-gray-700"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 text-center ${
          isLight ? "text-gray-800" : "text-gray-100"
        }`}
      >
        Berbagi State Antar Komponen
      </h2>
      <div
        className={`p-6 rounded-md transition-colors duration-300 ${
          isLight
            ? "border border-purple-500 bg-purple-50 text-purple-800"
            : "border border-purple-400 bg-purple-900/40 text-purple-100"
        }`}
      >
        <h3 className="text-xl font-bold">Parent Component</h3>
        <p className="mb-4">
          Shared Data: <span className="font-medium">{sharedData}</span>
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <ChildA onDataFromChildA={handleDataFromChildA} />
          <ChildB dataFromParent={sharedData} />
        </div>
      </div>
    </div>
  );
}

export default StateSharingBetweenComponents;
