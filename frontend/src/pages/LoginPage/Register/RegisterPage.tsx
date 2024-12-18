import React from 'react'

interface Props {
    handleSetRegister: () => void;
}

const RegisterPage: React.FC<Props> = ({handleSetRegister}) => {
  return (
    <div className = " h-[40rem] w-[50%] relative">
        <p className = "text-center text-4xl font-bold text-golden relative bottom-[1rem]">REGISTER</p>

        <div className = "relative bottom-[1.5rem]">
            <div className = "flex">
                {/* first name */}
                <div className = "relative left-[1rem] bottom-[1.5rem]">
                    <p className = "text-lg font-bold relative left-[0.5rem] text-golden">Firstname</p>
                    <input id = "animated-input" type = "text" className = "w-[13rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Your firstname"/>
                    <div className = "h-[0.1rem]">
                        <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                    </div>
                </div>

                {/* last name */}
                <div className = "relative left-[1rem] bottom-[1.5rem] ml-[2rem]">
                    <p className = "text-lg font-bold relative left-[0.5rem] text-golden">Lastname</p>
                    <input id = "animated-input" type = "text" className = "w-[14rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Your lastname"/>
                    <div className = "h-[0.1rem]">
                        <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                    </div>
                </div>
            </div>

            {/* email */}
            <div className = "relative left-[1rem] bottom-[3rem]">
                <p className = "text-lg font-bold relative left-[0.5rem] text-golden">E-mail</p>
                <input id = "animated-input" type = "text" className = "w-[29rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Your e-mail"/>
                <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div>
            </div>

            {/* username */}
            <div className = "relative left-[1rem] bottom-[4.5rem]">
                <p className = "text-lg font-bold relative left-[0.5rem] text-golden">Username</p>
                <input id = "animated-input" type = "text" className = "w-[29rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Your username"/>
                <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div>
            </div>

            {/* password */}
            <div className = "relative left-[1rem] bottom-[6rem]">
                <p className = "text-lg font-bold relative left-[0.5rem] text-golden">Password</p>
                <input id = "animated-input" type = "password" className = "w-[29rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Your password"/>
                <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div>
            </div>

            {/* re-type password */}
            <div className = "relative left-[1rem] bottom-[7.5rem]">
                <p className = "text-lg font-bold relative left-[0.5rem] text-golden">Re-enter password</p>
                <input id = "animated-input" type = "password" className = "w-[29rem] h-[2rem] bg-[#2c694e] relative bottom-[1rem] rounded-[15px] border-none outline-none text-white  pl-[2%]" placeholder = "Re-enter your password"/>
                <div className = "h-[0.1rem]">
                    <p className = "text-sm font-bold relative left-[0.5rem] text-red-500 bottom-[1.5rem]">Error</p>
                </div>
            </div>

            {/* submit */}
            <div className = "relative bottom-[6.5rem]">
                <button className = "w-[30%] h-[2.5rem] bg-golden text-Green ml-[35%] border-none outline-none  text-lg font-bold rounded-[12px]">SIGN UP</button>
            </div>

            {/* additional  */}
            <div className = "relative bottom-[7rem]">
                <p className = "text-center text-lg font-bold text-golden">Already have an account? <span className = "underline hover:cursor-pointer" onClick = {handleSetRegister}>Sign in</span></p>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage