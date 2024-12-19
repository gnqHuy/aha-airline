import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdLock } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface Props {
}

const LoginForm: React.FC<Props> = ({}) => {
  return (
    <div className = "h-[100%] w-[50%] relative font-space-grotesk">
        <p className = "text-center text-4xl font-bold text-golden">LOGIN</p>

        <div className = "mt-[0rem]">
            {/* input form */}
            <div className = "mt-[0%]">
                <p className = "font-space-grotesk text-[15px] relative top-[0.5rem] left-[20%] text-golden opacity-1">Username</p>
                <div className = "flex">
                    <FaUser className = "w-[1.8rem] h-[1.8rem] relative top-[0%] left-[12%] opacity-1" style = {{color: "#D4A422"}}/>
                    <input id = "animated-input" type = "text" className = "w-[60%] h-[2rem] bg-[#2c694e] relative left-[14%] rounded-[15px] border-none outline-none text-white font-space-grotesk pl-[2%]" placeholder = "Username" autoFocus/>
                </div>
            </div>

            {/* password form */}
            <div className = "mt-[5%]">
                <p className = "font-space-grotesk text-[15px] relative top-[0.5rem] left-[20%] text-golden opacity-1">Password</p>
                <div className = "flex">
                    <MdLock className = "w-[1.8rem] h-[1.8rem] relative top-[0%] left-[12%] opacity-1" style = {{color: "#D4A422"}}/>
                    <input id = "animated-input" type = "password" className = "w-[60%] h-[2rem] bg-[#2c694e] relative left-[14%] rounded-[15px] border-none outline-none text-white font-space-grotesk pl-[2%]" placeholder = "Password" autoFocus/>
                </div>
            </div>
        </div>

        {/* remember me and forgot password */}
        <div className = "flex mt-[2%]">
            {/* remember me */}
            <div className = "flex ml-[12%]">
                <input type = "checkbox" className = "border-none outline-none"/>
                <p className = "font-space-grotesk text-golden">Remember me</p>
            </div>

            {/* forgot password */}
            <div className = "ml-[33%]">
                <p className = "font-space-grotesk text-golden">Forgot?</p>
            </div>
        </div>

        {/* submit button */}
        <div className = "mt-[5%]">
            <button className = "w-[30%] h-[2.5rem] bg-golden text-Green ml-[35%] border-none outline-none font-space-grotesk text-lg font-bold rounded-[12px]">LOGIN</button>
        </div>

        {/* register suggest */}
        <div className = "absolute left-[25%] bottom-[2rem]">
            <p className = "text-golden">Doesn't have an account? 
                <Link to = "/sign-up">
                    <span className = "underline hover:cursor-pointer text-golden">Register</span>
                </Link>
            </p>
        </div>
    </div>
  )
}

export default LoginForm