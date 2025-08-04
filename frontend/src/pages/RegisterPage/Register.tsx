import React from 'react'
import RegisterPage from './RegisterPage'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'
import bg from '../../assets-test/Images/sunset4.jpg'

const Register = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        id="login-bg"
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50%] h-[90%] z-10 bg-[#FCF9F2] rounded-[12px] shadow-gray flex items-center justify-center">
          {/* Content section */}
          <div className="h-full w-full flex flex-col items-center justify-center relative">
            <Link to="/">
              <div className="w-[10rem] h-[2rem] bg-gray-400 opacity-50 rounded-[15px] flex items-center justify-center absolute top-[1rem] right-[1rem] hover:opacity-60 hover:text-gray-950 text-white">
                <p className="text-sm">Back to website</p>
                <FaLongArrowAltRight className="ml-2" />
              </div>
            </Link>
            <RegisterPage />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
