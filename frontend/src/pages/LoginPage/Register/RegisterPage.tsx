import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../../../api/authAPI';

interface Props {
}

const RegisterPage: React.FC<Props> = ({}) => {
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();
    
      const handleSubmit = () => {
        if (!username || !password || !firstname || !lastname || !email) {
          alert("Please fill in both fields");
          return;
        }
    
        signUp({
            firstName: firstname,
            lastName: lastname,
            username: username,
            email: email,
            password: password
        }).then((res) => {
          if (res.data) {
            console.log(res.data);
            alert(res.data);
            navigate("/");
          }
        }).catch((error) => {
            alert(error || "Failed to log in. Please try again.");
        });
      };

  return (
    <div className = "h-[40rem] w-[50%] relative bg-white rounded-tr-[12px] rounded-br-[12px]">
        <p className = "text-center text-3xl font-bold text-Green relative bottom-[1rem]">Register to <span className = "text-golden">AHA</span></p>

        <div className = "relative bottom-[1.5rem]">
            <div className = "flex">
                {/* first name */}
                <div className = "relative left-[1rem] bottom-[1.5rem]">
                    <p className = "relative left-[0.5rem] text-golden">Firstname</p>
                    <input 
                        type = "text" 
                        className = "w-[13rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" 
                        placeholder = "Your firstname" 
                        onChange={e => setFirstname(e.target.value)}/>
                    {/* <div className = "h-[0.1rem]">
                        <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                    </div> */}
                </div>

                {/* last name */}
                <div className = "relative left-[1rem] bottom-[1.5rem] ml-[2rem]">
                    <p className = "relative left-[0.5rem] text-golden">Lastname</p>
                    <input 
                        type = "text" 
                        className = "w-[14rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" 
                        placeholder = "Your lastname" 
                        onChange={e => setLastname(e.target.value)}/>
                    {/* <div className = "h-[0.1rem]">
                        <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                    </div> */}
                </div>
            </div>

            {/* email */}
            <div className = "relative left-[1rem] bottom-[2.5rem]">
                <p className = "relative left-[0.5rem] text-golden">E-mail</p>
                <input type = "text" className = "w-[29rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" placeholder = "Your e-mail" onChange={e => setEmail(e.target.value)}/>
                {/* <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div> */}
            </div>

            {/* username */}
            <div className = "relative left-[1rem] bottom-[3.5rem]">
                <p className = "relative left-[0.5rem] text-golden">Username</p>
                <input type = "text" className = "w-[29rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" placeholder = "Your username" onChange={e => setUsername(e.target.value)}/>
                {/* <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div> */}
            </div>

            {/* password */}
            <div className = "relative left-[1rem] bottom-[4.5rem]">
                <p className = "relative left-[0.5rem] text-golden">Password</p>
                <input type = "password" className = "w-[29rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" placeholder = "Your password" onChange={e => setPassword(e.target.value)}/>
                {/* <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div> */}
            </div>

            {/* re-type password */}
            <div className = "relative left-[1rem] bottom-[5.5rem]">
                <p className = "relative left-[0.5rem] text-golden">Re-enter password</p>
                <input type = "password" className = "w-[29rem] h-[2rem] bg-[#FCF9F2] relative bottom-[1rem] rounded-[15px] border-orange-200 outline-none text-green-950 pl-[2%]" placeholder = "Re-enter your password"/>
                {/* <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div> */}
            </div>

            {/* submit */}
            <div className = "relative bottom-[5rem]">
                <button 
                    className = "w-[30%] h-[2.5rem] bg-golden text-white ml-[35%] border-none outline-none text-lg font-bold rounded-[12px]"
                    onClick={handleSubmit}
                >
                    Sign Up
                </button>
            </div>

            {/* additional  */}
            <div className = "relative bottom-[5rem]">
                <p className = "text-center text-lg font-bold text-golden">Already have an account? 
                    <Link to = "/login">
                        <span className = "underline hover:cursor-pointer text-golden">Sign in</span>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage