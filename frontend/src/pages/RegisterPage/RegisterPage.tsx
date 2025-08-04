import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../store/hooks/useAuth";

const RegisterPage = () => {
  const { register, error } = useAuth();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (Object.values(form).some((v) => !v)) {
      enqueueSnackbar("Please fill all fields", { variant: "warning" });
      return;
    }

    register({
      username: form.username,
      email: form.email,
      password: form.password,
      firstName: form.firstname,
      lastName: form.lastname,
    });
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted && !error) {
      enqueueSnackbar("Registered successfully!", { variant: "success" });
      navigate("/login");
    }
  }, [submitted, error]);

  useEffect(() => {
    if (error && submitted) {
      enqueueSnackbar(error, { variant: "error" });
      setSubmitted(false);
    }
  }, [error]);

  return (
    <div className="h-[100%] w-[80%] relative flex flex-col items-center mt-7 justify-center">
      <div className="flex items-center">
        <p className="text-center text-3xl font-bold text-lime-800">Register to&nbsp;</p>
        <p className="text-center text-3xl font-bold text-ahaAmber-1">AHA</p>
      </div>

      <div className="w-full">
        {/* First Name */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">First Name</p>
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
          />
        </div>

        {/* Last Name */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Last Name</p>
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
          />
        </div>

        {/* Email */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">E-mail</p>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleInputChange}
            placeholder="E-mail"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
          />
        </div>

        {/* Username */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Username</p>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
          />
        </div>

        {/* Password */}
        <div className="mt-4">
          <p className="text-[15px] text-left text-ahaAmber-1 ml-[20%]">Password</p>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="w-[60%] h-[2rem] bg-[#FCF9F2] ml-[20%] rounded-[15px] border-orange-200 outline-none text-ahaGreen-0-950 pl-[2%]"
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          className="cursor-pointer px-6 py-1 bg-ahaAmber-2 text-[#FCF9F2] border-none outline-none text-lg font-normal rounded-[12px]"
        >
          Register
        </button>
      </div>

      {/* Already have account */}
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
