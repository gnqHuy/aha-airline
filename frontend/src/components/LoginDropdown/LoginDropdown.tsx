import React from 'react'
import LoginAvatar from '../../assets-test/Images/sunset3.jpg';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { IoLogOutSharp } from "react-icons/io5";

interface Props {
    username: string;
    roles: string[];
    handleLogout: () => void;
}

const LoginDropdown:React.FC<Props> = ({username, roles, handleLogout}) => {
  return (
    <div className = "w-[20vw] bg-[#faf9f7] rounded-[5px] small:w-[40vw] medium:w-[40vw]">
        {/* username and roles */}
        <div className = "w-full flex">
            <img src = {LoginAvatar} className = "rounded-[50%] w-[2.5rem] h-[2.5rem] border-solid border-[2px] border-Green ml-[1rem] mt-[1.8rem]" alt = ""/>
            <div className = "ml-[1rem] relative bottom-[0.5rem]">
                <p className = "text-[20px] font-bold text-Green">{username}</p>
                <div className = "flex">
                    {roles.map((role) => {
                        return (
                            <div className = "bg-Green text-white rounded-[15px] text-center mr-[0.5rem] h-[2rem]">
                                <p className = "text-sm px-[0.5rem] relative bottom-[0.6rem]">{role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        <div className = "w-full h-[0.01rem] bg-[#b8b6b6] mt-[1rem]"></div>

        {/* credit point and ticket */}
        <div className = "w-full">
            <div className = "flex ml-[1.5rem] mt-[0.5rem] hover:cursor-pointer">
                <BsCreditCard2FrontFill style = {{color: "#1A4532"}} className = "w-[1.8rem] h-[1.8rem]"/>
                <p className = "text-base ml-[1rem] relative bottom-[0.9rem]">Credit point: 0</p>
            </div>
            <div className = "flex ml-[1.5rem] mt-[0rem] relative bottom-[1rem] hover:cursor-pointer">
                <IoTicket style = {{color: "#1A4532"}} className = "w-[1.8rem] h-[1.8rem]" />
                <p className = "text-base ml-[1rem] relative bottom-[0.9rem]">Your tickets</p>
            </div>
        </div>

        <div className = "w-full h-[0.01rem] bg-[#b8b6b6] relative bottom-[2rem]"></div>
        
        {/* sign out */}
        <div className = "w-full flex ml-[1.5rem] relative bottom-[1.5rem] h-[1rem] hover:cursor-pointer" onClick={handleLogout}>
            <IoLogOutSharp style = {{color: "#1A4532"}} className = "w-[1.8rem] h-[1.8rem]" />
            <p className = "text-base ml-[1rem] relative bottom-[0.9rem]">Log out</p>
        </div>
    </div>
  )
}

export default LoginDropdown