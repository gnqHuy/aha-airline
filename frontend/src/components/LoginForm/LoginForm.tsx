import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/hooks/useAuth";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, accessToken } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = () => {
    if (!username || !password) {
      enqueueSnackbar("Please fill in both fields", { variant: "warning" });
      return;
    }
    login(username, password);
  };

  useEffect(() => {
    if (accessToken) {
      enqueueSnackbar("Logged in!", { variant: "success" });
      navigate("/");
    }
  }, [accessToken]);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
  }, [error]);

  return (
    <div className="h-[100%] w-[80%] relative flex flex-col items-center mt-32 pb-24 justify-center">
      {/* Login to AHA */}
      <div className="flex items-center mb-6">
        <p className="text-center text-3xl font-bold text-lime-800">
          Login to&nbsp;
        </p>
        <p className="text-center text-3xl font-bold text-ahaAmber-1">AHA</p>
      </div>

      <div className="mt-0 w-full">

        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">
            Username
          </p>
          <div className="flex items-center">
            <FaUser
              className="w-[1.4rem] h-[1.4rem] ml-[12%]"
              style={{ color: "#D4A422" }}
            />
            <input
              id="username-input"
              type="text"
              className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[2%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
              placeholder="Username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">
            Password
          </p>
          <div className="flex items-center">
            <MdLock
              className="w-[1.4rem] h-[1.4rem] ml-[12%]"
              style={{ color: "#D4A422" }}
            />
            <input
              id="password-input"
              type="password"
              className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[2%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-14">
        <button
          className="cursor-pointer px-6 py-1 bg-ahaAmber-2 text-[#FCF9F2] border-none outline-none text-lg font-normal rounded-[12px]"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      {/* register suggest */}
      <div className="pb-20">
        <p className="text-ahaAmber-2">
          Doesn't have an account?&nbsp;
          <Link to="/sign-up">
            <span className="underline hover:cursor-pointer text-ahaAmber-2">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
