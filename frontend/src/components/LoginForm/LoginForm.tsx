import { useState } from "react";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/useAuth";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    if (!username || !password) {
      enqueueSnackbar("Please fill in both fields", { variant: "warning" });
      return;
    }

    login(
      username,
      password,
      () => {
        enqueueSnackbar("Logged in!", { variant: "success" });
        navigate("/");
      },
      (error) => {
        enqueueSnackbar(error, { variant: "error" });
      }
    );
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center">
      <div className="flex items-center mb-6">
        <p className="text-3xl font-bold text-lime-800">Login to&nbsp;</p>
        <p className="text-3xl font-bold text-ahaAmber-1">AHA</p>
      </div>

      <div className="w-full mb-4">
        <label htmlFor="username-input" className="block text-sm mb-1 ml-2">
          Username
        </label>
        <div className="flex items-center rounded-xl px-4 py-2 shadow-sm bg-white border border-solid border-ahaAmber-4">
          <FaUser className="text-[#D4A422] mr-2" />
          <input
            id="username-input"
            type="text"
            className="flex-1 focus:outline-none bg-white autofill:bg-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <div className="w-full mb-8">
        <label htmlFor="password-input" className="block text-sm mb-1 ml-2">
          Password
        </label>
        <div className="flex items-center rounded-xl px-4 py-2 shadow-sm bg-white border border-solid border-ahaAmber-4">
          <MdLock className="text-[#D4A422] mr-2" />
          <input
            id="password-input"
            type="password"
            className="flex-1 focus:outline-none bg-white autofill:bg-white"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-ahaAmber-2 text-[#FCF9F2] text-lg font-medium rounded-3xl transition hover:opacity-90 mb-6"
      >
        Login
      </button>
    </div>
  );
};

export default LoginForm;
