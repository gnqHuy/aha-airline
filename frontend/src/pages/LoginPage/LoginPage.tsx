import React, { useState } from 'react'
import './LoginPage.css';
import bg from '../../assets-test/Images/sunset4.jpg';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import RegisterPage from './Register/RegisterPage';

type Props = {}

const LoginPage = (props: Props) => {
    const [register, setRegister] = useState<boolean>(false);

    const handleSetRegister = () => {
        register === true ? setRegister(false) : setRegister(true);
    }
  return (
    <div className = "w-full h-[45.8rem] overflow-hidden">
        <img src = {bg} alt = "" className = "w-full h-[45.8rem] object-cover object-center z-0" id = "login-bg"/>
        <div className = "w-[70%] h-[40rem] z-10 absolute top-[5%] left-[15%] bg-[#1A4532] rounded-[12px] shadow-gray flex">
            {/* image */}
            <div className = "h-[100%] w-[50%] relative">
                <img src = "https://images.wallpaperscraft.com/image/single/airplane_wing_view_152515_3840x2160.jpg" alt = "" className = "w-full h-full rounded-tl-[12px] rounded-bl-[12px]"/>
                <Link to = "/">
                    <div className = "w-[10rem] h-[2rem] bg-gray-400 font-space-grotesk rounded-[15px] flex absolute top-[1rem] right-[1rem] hover:bg-Green hover:text-golden text-black">
                        <p className = "relative bottom-[0.7rem] ml-[0.5rem]">Back to website</p>
                        <FaLongArrowAltRight className = "relative left-[0.2rem] top-[0.5rem]"/>
                    </div>
                </Link>
            </div>

            {/* form */}
            {register === false ? 
                <LoginForm handleSetRegister = {handleSetRegister}/> : 
                <RegisterPage handleSetRegister={handleSetRegister}/>
            }
        </div>
    </div>
  )
}

export default LoginPage