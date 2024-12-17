import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import Explore from "./Explore/Explore";
import Booking from "./Booking/Booking";
import TravelInfo from "./TravelInfo/TravelInfo";

type Props = {};

const NavBar: React.FC<Props> = () => {
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

  const isLoggedIn = false;

  return (
    <nav className="grid grid-cols-[2fr_2fr_1fr] w-[80%] mx-auto items-center text-black">
      <div className="text-center py-4 small:relative small:right-[2rem]">
        <Link to="/" className="block no-underline text-black font-bold">
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
              dropdownState.Explore ? "text-golden" : "text-black hover:text-golden"
            } text-lg medium:text-sm small:text-sm`}
          >
            Explore
          </Link>
          <div
            className={`absolute top-full text-left left-[80%] z-10 w-[1000px] bg-white transform -translate-x-1/2 transition-transform transition-opacity duration-500 ease-in-out ${
              dropdownState.Explore
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <Explore />
          </div>
        </div>

        <div
          className="relative pb-[30px] mt-[30px] mx-6"
          onMouseEnter={() => handleMouseEnter("Booking")}
          onMouseLeave={() => handleMouseLeave("Booking")}
        >
          <Link
            to="/booking"
            className={`block font-bold no-underline ${
              dropdownState.Booking ? "text-golden" : "text-black hover:text-golden"
            } text-lg medium:text-sm small:text-sm`}
          >
            Booking
          </Link>
          <div
            className={`absolute top-full text-left left-[-71px] z-10 w-[1000px] bg-white transform -translate-x-1/2 transition-transform transition-opacity duration-500 ease-in-out ${
              dropdownState.Booking
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <Booking />
          </div>
        </div>

        <div
          className="relative pb-[30px] mt-[30px] mx-6 medium:mx-1"
          onMouseEnter={() => handleMouseEnter("TravelInfo")}
          onMouseLeave={() => handleMouseLeave("TravelInfo")}
        >
          <Link
            to="/travel-info"
            className={`block font-bold no-underline ${
              dropdownState.TravelInfo ? "text-golden" : "text-black hover:text-golden"
            } text-lg medium:text-sm medium:w-[6rem] w-[6rem] small:text-sm`}
          >
            Travel Info
          </Link>
          <div
            className={`absolute top-full text-left left-[-235px] z-10 w-[1000px] bg-white transform -translate-x-1/2 transition-transform transition-opacity duration-500 ease-in-out ${
              dropdownState.TravelInfo
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5 pointer-events-none"
            }`}
          >
            <TravelInfo />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 ml-[5rem]">
        {isLoggedIn ? (
          <>
            <Link
              to="/profile"
              className="text-black font-bold hover:text-golden no-underline"
            >
              Account
            </Link>
            <Link
              to="/logout"
              className="text-black font-bold hover:text-golden no-underline"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-black font-bold hover:text-golden no-underline"
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="text-black font-bold hover:text-golden no-underline"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
