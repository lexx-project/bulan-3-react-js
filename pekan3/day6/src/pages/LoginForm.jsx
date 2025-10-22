import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import InputLogin from "../components/login/InputLogin";
import LabelLogin from "../components/login/LabelLogin";
import ButtonLogin from "../components/login/ButtonLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from ?? "/";

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate, redirectPath]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("token", "admin");
      navigate(redirectPath, { replace: true });
      return;
    }
    setErrorMessage("Username atau password salah");
  };

  return (
    <main className="min-h-screen  from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4 py-10">
      <section className="w-full max-w-md rounded-3xl border border-white/60 bg-white/80 backdrop-blur-md shadow-2xl overflow-hidden">
        <div className="px-8 py-10 space-y-8">
          <header className="space-y-3 text-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Masuk ke akun
              </h1>
              <p className="mt-1 text-sm text-gray-500">Login Ke Lexx Store</p>
            </div>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="space-y-2">
              <LabelLogin htmlFor="username">Username</LabelLogin>
              <InputLogin
                id="username"
                name="username"
                type="text"
                placeholder="Masukkan username kamu"
                autoComplete="username"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
              />
            </div>

            <div className="space-y-2">
              <LabelLogin htmlFor="password">Password</LabelLogin>
              <InputLogin
                id="password"
                name="password"
                type="password"
                placeholder="Masukkan password kamu"
                autoComplete="current-password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (errorMessage) setErrorMessage("");
                }}
              />
            </div>

            {errorMessage && (
              <p className="text-sm font-medium text-red-500">{errorMessage}</p>
            )}

            <ButtonLogin type="submit">Masuk</ButtonLogin>
          </form>
        </div>
      </section>
    </main>
  );
}
