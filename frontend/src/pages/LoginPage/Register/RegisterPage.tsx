import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../api/authAPI";
import { Link } from "react-router-dom";

interface Props {}

const RegisterPage: React.FC<Props> = ({}) => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (!username || !password || !firstname || !lastname || !email) {
      enqueueSnackbar("Please fill in all fields", { variant: "warning" });
      return;
    }

    signUp({ firstName: firstname, lastName: lastname, username, email, password })
      .then((res) => {
        if (res.data) {
          enqueueSnackbar(res.data, { variant: "success" });
          navigate("/login");
        }
      })
      .catch((error) => {
        enqueueSnackbar(error.response?.data?.message || "Failed to register. Please try again.", { variant: "error" });
      });
  };

  return (
    <div className="h-[100%] w-[80%] relative flex flex-col items-center mt-7 justify-center">
      <div className="flex items-center">
        <p className="text-center text-3xl font-bold text-lime-800">Register to&nbsp;</p>
        <p className="text-center text-3xl font-bold text-ahaAmber-1">AHA</p>
      </div>

      <div className="w-full">
        <div className="">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">First Name</p>
          <input
            type="text"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Last Name</p>
          <input
            type="text"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">E-mail</p>
          <input
            type="email"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Username</p>
          <input
            type="text"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Password</p>
          <input
            type="password"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          className="cursor-pointer px-6 py-1 bg-ahaAmber-2 text-[#FCF9F2] border-none outline-none text-lg font-normal rounded-[12px]"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>

      <div className="">
        <p className="text-ahaAmber-2">
          Already have an account?&nbsp;
          <Link to="/login">
            <span className="underline hover:cursor-pointer text-ahaAmber-2">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
