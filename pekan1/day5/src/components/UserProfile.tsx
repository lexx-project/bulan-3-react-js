import { useState } from "react";

export default function UserProfile() {
  const [name, setName] = useState("Lexx");
  const [age, setAge] = useState(17);
  const [isEditing, setIsediting] = useState(false);

  return (
    <>
      <div>
        {isEditing ? (
          <div className="flex flex-col justify-center text-center h-[100vh] gap-2">
            <h1 className="flex flex-col text-center text-red-400 text-[50px] font-sans mb-[20px] font-bold">
              Profile :
            </h1>
            <div className="flex flex-col gap-3 items-center">
              <label className="text-xl font-semibold">Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-[250px] rounded-md border border-blue-400 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="text-xl font-semibold">Age:</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-[250px] rounded-md border border-blue-400 bg-white px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={() => setIsediting(false)}
              className="bg-blue-500 text-white p-[10px] rounded-md w-[100px] hover:bg-blue-700 mx-auto cursor-pointer mt-4"
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex flex-col justify-center text-center h-[100vh] gap-2">
            <h1 className="flex flex-col text-center text-red-400 text-[50px] font-sans mb-[20px] font-bold">
              Profile :{" "}
            </h1>
            <p className="text-xl font-semibold mb-2 ">Name: {name}</p>
            <p className="text-xl font-semibold mb-4">Age: {age}</p>
            <button
              onClick={() => setIsediting(true)}
              className="bg-blue-500 text-white p-[10px] rounded-md w-[100px] hover:bg-blue-700 mx-auto cursor-pointer"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
}
