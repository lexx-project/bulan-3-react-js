import { useState } from "react";

export default function FormRegister() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPassowordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const emailHandle = (email: string) => {
    if (email === "") {
      setEmailError("Email tidak boleh kosong");
    } else if (!email.includes("@")) {
      setEmailError("Email tidak valid");
    } else {
      setEmailError("");
    }
  };

  const passwordHandle = (password: any) => {
    if (password === "") {
      setPassowordError("Masukkan Password!!");
    } else if (password.length < 8) {
      setPassowordError("Password minimal 8 karakter");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPassowordError("Password harus mengandung setidaknya satu simbol");
    } else if (!/[A-Z]/.test(password)) {
      setPassowordError(
        "Password harus mengandung setidaknya satu huruf kapital"
      );
    } else if (!/[a-z]/.test(password)) {
      setPassowordError(
        "Password harus mengandung setidaknya satu huruf kecil"
      );
    } else if (!/\d/.test(password)) {
    } else {
      setPassowordError("");
    }
  };

  const confirmPasswordHandle = (confirmPassword: string) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Konfirmasi password tidak cocok");
    } else {
      setConfirmPasswordError("");
    }
    setConfirmPassword(confirmPassword);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    emailHandle(email);
    passwordHandle(password);
    confirmPasswordHandle(confirmPassword);
  };

  return (
    <>
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="text-center font-bold text-4xl m-2">Register</h1>
        <label>Email : </label>
        <input
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan Email Anda"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {emailError ? (
          <p className="text-red-500 text-xs italic">{emailError}</p>
        ) : (
          ""
        )}

        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
          Password :{" "}
        </label>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan Password Anda"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError ? (
          <p className="text-red-500 text-xs italic">{passwordError}</p>
        ) : (
          ""
        )}
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">
          Confirm Password :{" "}
        </label>
        <input
          type="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukkan Password Anda"
          onChange={(e) => confirmPasswordHandle(e.target.value)}
        />
        {confirmPasswordError ? (
          <p className="text-red-500 text-xs italic">{confirmPasswordError}</p>
        ) : (
          ""
        )}

        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-6 "
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </>
  );
}
