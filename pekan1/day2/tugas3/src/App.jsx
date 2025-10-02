import { useState } from "react";
import "./App.css";

const Dashboard = () => {
  return (
    <>
      <p>Welcome to dashboard!</p>
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <p>Login please!</p>
    </>
  );
};

function App() {
  let isLogin = false;
  return <>{isLogin ? <Dashboard /> : <LoginPage />}</>;
}

export default App;
