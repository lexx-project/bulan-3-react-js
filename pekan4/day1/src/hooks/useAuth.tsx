import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const USERS_KEY = "authUsers";
const ACTIVE_USER_KEY = "authUser";

type UsersMap = Record<string, string>;

function readUsers(): UsersMap {
  if (typeof window === "undefined") {
    return {};
  }

  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw) as UsersMap;
  } catch {
    localStorage.removeItem(USERS_KEY);
    return {};
  }
}

function writeUsers(users: UsersMap) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export default function useAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem(ACTIVE_USER_KEY);
    if (storedUser) {
      setUsername(storedUser);
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("Password and Confirm Password do not match");
      setLoading(false);
      return;
    } else if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      setLoading(false);
      return;
    }

    const users = readUsers();

    if (users[username]) {
      setError("An account with this username already exists");
      setLoading(false);
      return;
    } else {
      localStorage.removeItem(username);
      users[username] = password;
      writeUsers(users);
      localStorage.removeItem(ACTIVE_USER_KEY);
      setIsLogin(false);
      navigate("/login");
    }
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    setError(null);
    const users = readUsers();
    let storedPassword = users[username];

    if (!storedPassword) {
      const legacyPassword = localStorage.getItem(username);
      if (legacyPassword) {
        storedPassword = legacyPassword;
        users[username] = legacyPassword;
        writeUsers(users);
        localStorage.removeItem(username);
      }
    }
    if (!storedPassword) {
      setError("Account with this username does not exist");
      setLoading(false);
      return;
    } else if (storedPassword !== password) {
      setError("Incorrect password");
      setLoading(false);
      return;
    } else {
      localStorage.setItem(ACTIVE_USER_KEY, username);
      setIsLogin(true);
      navigate("/");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setLoading(false);
    setError(null);
    localStorage.removeItem(ACTIVE_USER_KEY);
    setIsLogin(false);
    navigate("/login");
  };

  const checkLogin = () => {
    if (localStorage.getItem(ACTIVE_USER_KEY)) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    error,
    handleSignup,
    handleLogin,
    handleLogout,
    isLogin,
    checkLogin,
  };
}
