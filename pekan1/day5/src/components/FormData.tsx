import { useState } from "react";

export default function FormData() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all fields.");
    } else {
      alert(
        `Data submitted: Nama Lengkap - ${formData.firstName} ${formData.lastName}, Email - ${formData.email}`
      );
    }
  };

  return (
    <>
      <form className="flex flex-col text-center items-center justify-center h-[100vh] bg-=">
        {" "}
        <h1 className="mb-[50px] text-[60px] font-bold text-red-500 font-serif">
          Form Data
        </h1>
        <label className="m-[10px] text-left w-[300px]">Nama Depan: </label>
        <input
          type="text"
          className="w-[300px] border-2 m-[4px] placeholder:text-slate-400 p-[5px] rounded-md mb-[20px]"
          placeholder="Masukkan Nama Depan Anda"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label className="m-[10px] text-left w-[300px]">Nama Belakang: </label>
        <input
          type="text"
          className="w-[300px] border-2 m-[4px] placeholder:text-slate-400 p-[5px] rounded-md mb-[20px]"
          placeholder="Masukkan Nama Belakang Anda"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label className="m-[10px] text-left w-[300px]">Email: </label>
        <input
          type="text"
          className="w-[300px] border-2 m-[4px] placeholder:text-slate-400 p-[5px] rounded-md mb-[20px]"
          placeholder="Masukkan Email Anda"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white p-[10px] rounded-md w-[100px] hover:bg-blue-700 mb-3"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p>Current Data: {JSON.stringify(formData)}</p>
      </form>
    </>
  );
}
