import { useState } from "react";

export default function ControlledComponents() {
  const [value, setValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const changeHandler = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmittedValue(value);

    // setValue(""); // Optionally clear the input after submission
  };

  return (
    <>
      <div className="p-4 m-4 justify-center items-center flex flex-col ">
        <h1 className="text-xl font-semibold ">Controlled Components</h1>
        <form action="" className="flex gap-2 mt-2">
          <input
            type="text"
            name=""
            id=""
            className="border border-black p-1 pl-2 rounded-md"
            placeholder="Ketik Sesuatu"
            value={value}
            onChange={changeHandler}
          />{" "}
          {/* Changed hanldeSubmit to handleSubmit */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer
            "
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        <p className="mt-4 text-[15px]">Input RealTime : {value}</p>
        <p>Submited : {submittedValue}</p>
      </div>
    </>
  );
}
