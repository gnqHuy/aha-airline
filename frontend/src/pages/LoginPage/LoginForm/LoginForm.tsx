import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../api/authAPI";
import { login } from "../../../redux/slice/authSlice";
import { RootState } from "../../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { selectAccessToken } from "../../../redux/selector/authSelector";

interface Props {}

const LoginForm: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectAccessToken);
  const user = useSelector((state: RootState) => state.auth.user);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!username || !password) {
      alert("Please fill in both fields");
      return;
    }

    logIn({
      usernameOrEmail: username,
      password: password,
    }).then((res) => {
      if (res.data.isSuccess) {
        dispatch(
          login({
            accessToken: res.data.token,
            user: {
                id: res.data.user.id,
                username: res.data.user.username,
                roles: res.data.user.roles,
            },
          })
        );
        navigate("/");
      }
    }).catch((error) => {
        alert(error.response?.data?.message || "Failed to log in. Please try again.");
    });
  };

  return (
    <div className="h-[100%] w-[50%] relative flex flex-col items-center justify-center">
      {/* Login to AHA */}
      <div className="flex items-center mb-6">
        <p className="text-center text-3xl font-bold text-lime-800">
          Login to&nbsp;
        </p>
        <p className="text-center text-3xl font-bold text-golden-ramsay">AHA</p>
      </div>

      <div className="mt-0 w-full">
        {/* Username input */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-golden-ramsay ml-[20%]">
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
              className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[2%] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]"
              placeholder="Username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-golden-ramsay ml-[20%]">
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
              className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[2%] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="mt-8">
        <button
          className="cursor-pointer px-6 py-1 bg-golden text-[#FCF9F2] border-none outline-none text-lg font-normal rounded-[12px]"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>

      {/* register suggest */}
      <div className="absolute left-[25%] bottom-[2rem]">
        <p className="text-golden">
          Doesn't have an account?
          <Link to="/sign-up">
            <span className="underline hover:cursor-pointer text-golden">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
