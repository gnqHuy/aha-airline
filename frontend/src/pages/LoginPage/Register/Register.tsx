import React from 'react'
import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import bg from '../../../assets-test/Images/sunset4.jpg';

type Props = {}

const Register = (props: Props) => {
  return (
    <div className = "relative w-full h-screen overflow-hidden">
        <img src = {bg} alt = "" className = "absolute top-0 left-0 w-full h-full object-cover" id = "login-bg"/>
        <div className = "w-[70%] h-[40rem] z-10 absolute top-[5%] left-[15%] bg-[#1A4532] rounded-[12px] shadow-gray flex">
            {/* image */}
            <div className = "h-[100%] w-[50%] relative">
                <img src = "https://images.wallpaperscraft.com/image/single/airplane_wing_view_152515_3840x2160.jpg" alt = "" className = "w-full h-full rounded-tl-[12px] rounded-bl-[12px]"/>
                <Link to="/">
                    <div className="w-[10rem] h-[2rem] bg-gray-400 opacity-50 rounded-[15px] flex items-center justify-center absolute top-[1rem] right-[1rem] hover:opacity-60 hover:text-gray-950 text-white">
                        <p className="text-sm">Back to website</p>
                        <FaLongArrowAltRight className="ml-2" />
                    </div>
                </Link>
            </div>

            {/* form */}
            <RegisterPage/>
        </div>
    </div>
  )
}

export default Register