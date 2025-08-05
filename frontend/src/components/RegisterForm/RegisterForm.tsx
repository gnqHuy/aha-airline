import { useState } from "react";
import { useSnackbar } from "notistack";
import { useAuth } from "../../store/hooks/useAuth";

type RegisterFormProps = {
  handleSwitchForm: () => void;
};

const RegisterForm = ({ handleSwitchForm }: RegisterFormProps) => {
  const { register, error } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
    },
      () => {
        enqueueSnackbar("Register successfully!", { variant: "success" });
        handleSwitchForm();
      },
      (error) => {
        enqueueSnackbar(error, { variant: "error" });
      }
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center mb-4">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold text-lime-800">Register to&nbsp;</h2>
        <h2 className="text-3xl font-bold text-ahaAmber-1">AHA</h2>
      </div>

      <form
        className="w-full space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {[
          { label: "First Name", name: "firstname", type: "text" },
          { label: "Last Name", name: "lastname", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Username", name: "username", type: "text" },
          { label: "Password", name: "password", type: "password" },
        ].map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-sm font-medium mb-1">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              name={field.name}
              value={(form as any)[field.name]}
              onChange={handleInputChange}
              placeholder={field.label}
              className="w-full h-11 px-4 border border-ahaAmber-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ahaAmber-3"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-4 py-3 bg-ahaAmber-2 text-white text-lg font-semibold rounded-3xl hover:opacity-90 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
