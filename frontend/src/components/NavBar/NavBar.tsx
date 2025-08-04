import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Explore from "./Explore/Explore";
import Booking from "./Booking/Booking";
import TravelInfo from "./TravelInfo/TravelInfo";
import LoginAvatar from '../../assets-test/Images/sunset3.jpg';
import LoginDropdown from "../LoginDropdown/LoginDropdown";
import { useAuth } from "../../store/hooks/useAuth";

type Props = {
  isDarkText?: boolean; // optional, mặc định là false (tức trắng)
};

const NavBar: React.FC<Props> = ({ isDarkText = false }) => {
  const {logout, user} = useAuth();
  const [dropdownState, setDropdownState] = useState<{ [key: string]: boolean }>(
    {
      Explore: false,
      Booking: false,
      TravelInfo: false,
    }
  );

  const handleMouseEnter = (key: string) => {
    setDropdownState((prev) => ({ ...prev, [key]: true }));
  };

  const handleMouseLeave = (key: string) => {
    setDropdownState((prev) => ({ ...prev, [key]: false }));
  };
  
  // check dropdown logout
  const [loginDropdown, setLoginDropdown] = useState<boolean>(false);

  // dropdown ref
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLoginDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  // logout
  const handleLogout = () => {
    logout();
  }

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat pt-[6px]">
      <nav className="grid grid-cols-[2fr_3fr_1fr] w-full text-white">
        <div className="text-center py-4 small:relative small:right-[2rem]">
          <Link to="/" className={`block no-underline font-bold ${isDarkText ? "text-black" : "text-white"}`}>
            <span className="text-xl font-bold">AHA AIRLINE</span> <br />
            <span className="text-sm">FLYING WITHOUT WINGS</span>
          </Link>

        </div>  
        <div className="grid grid-cols-3 text-center">
          <div
            className="relative pb-[30px] mt-[30px] mx-6 small:mx-[0.5rem]"
            onMouseEnter={() => handleMouseEnter("Explore")}
            onMouseLeave={() => handleMouseLeave("Explore")}
          >
            <Link
              to="/explore"
              className={`block font-bold no-underline ${
                dropdownState.Explore
                  ? "text-ahaAmber-2"
                  : isDarkText
                  ? "text-black hover:text-ahaAmber-2"
                  : "text-white hover:text-ahaAmber-2"
              } text-base medium:text-sm small:text-sm`}
            >
              Explore
            </Link>
            <div
              className={`absolute top-[3.1rem] text-left left-[120%] z-10 w-[800px] bg-white transform -translate-x-1/2 transition-transform duration-500 ease-in-out ${
                dropdownState.Explore
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <Explore />
            </div>
          </div>

          <div
            className="relative pb-[30px] mt-[30px] mx-6 small:mx-[0.5rem]"
            onMouseEnter={() => handleMouseEnter("Booking")}
            onMouseLeave={() => handleMouseLeave("Booking")}
          >
            <Link
              to="/booking"
              className={`block font-bold no-underline ${
                dropdownState.Booking
                  ? "text-ahaAmber-2"
                  : isDarkText
                  ? "text-black hover:text-ahaAmber-2"
                  : "text-white hover:text-ahaAmber-2"
              } text-base medium:text-sm small:text-sm`}
            >
              Booking
            </Link>
            <div
              className={`absolute top-[3.1rem] text-left left-[-10%] z-10 w-[800px] bg-white transform -translate-x-1/2 transition-transform duration-500 ease-in-out ${
                dropdownState.Booking
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <Booking />
            </div>
          </div>

          <div
            className="relative pb-[30px] mt-[30px] mx-6 small:mx-[0.5rem]"
            onMouseEnter={() => handleMouseEnter("TravelInfo")}
            onMouseLeave={() => handleMouseLeave("TravelInfo")}
          >
            <Link
              to="/travel-info"
              className={`block font-bold no-underline ${
                dropdownState.TravelInfo
                  ? "text-ahaAmber-2"
                  : isDarkText
                  ? "text-black hover:text-ahaAmber-2"
                  : "text-white hover:text-ahaAmber-2"
              } text-base medium:text-sm small:text-sm`}
            >
              Travel Info
            </Link>
            <div
              className={`absolute top-[3.1rem] text-left left-[-130%] z-10 w-[800px] bg-white transform -translate-x-1/2 transition-transform duration-500 ease-in-out ${
                dropdownState.TravelInfo
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 pointer-events-none"
              }`}
            >
              <TravelInfo />
            </div>
          </div>
        </div>

       <div className="items-center mx-auto justify-center mt-[30px] pb-[30px]">
          {user ? (
            <div className = "rounded-[50%] w-[2.3rem] h-[2.3rem] border-ahaGreen-0 border-solid border-[3px] font-bold" ref = {dropdownRef}>
              <div onClick = {() => loginDropdown === true ? setLoginDropdown(false) : setLoginDropdown(true)}>
                <img src = {LoginAvatar} alt = "" className = "rounded-[50%] w-[2.3rem] h-[2.3rem] hover:cursor-pointer"/>
              </div>
              {loginDropdown === true && 
                <div className = "absolute z-50 right-[0rem] mr-[13rem] mt-[1.5rem] small:mr-[10vw] medium:mr-[10vw] big:mr-[12vw]">
                  <LoginDropdown 
                    username = {user.username}
                    roles = {user.roles}
                    handleLogout = {handleLogout}
                  />
                </div>
              }
            </div> 
          ) : (
            <>
              <Link
                to="/login"
                className="text-ahaAmber-1 bg-ahaGreen-9 px-[0.75rem] pt-[0.25rem] pb-[0.4rem] text-center rounded-2xl font-bold hover:text-ahaAmber-2 no-underline"
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </nav>
       <div className="absolute bottom-0 top-[85px] left-[2.5%] w-[95%] h-[0.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
    </section>
  );
};

export default NavBar;
