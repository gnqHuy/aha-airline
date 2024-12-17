import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlane, FaCity, FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineConnectingAirports } from "react-icons/md";
import { TbBuildingAirport } from "react-icons/tb";

type Props = {};

const SideBar: React.FC<Props> = () => {
  return (
    <nav className="h-full w-60 bg-white shadow-lg flex flex-col">
      <NavLink to={"/"} className="text-3xl font-bold text-golden p-5 no-underline">
        AHA Airline
      </NavLink>
      <ul className="flex-1 space-y-4 list-none">
        <li>
          <NavLink
            to="aircrafts"
            className={({ isActive }) =>
              `flex items-center transition-colors duration-200 no-underline ${
                isActive ? "text-golden font-bold" : "text-gray-700 hover:text-golden"
              }`
            }
          >
            <FaPlane className="text-xl" />
            <span className="ml-3 text-lg font-semibold">Aircrafts</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="airports"
            className={({ isActive }) =>
              `flex items-center transition-colors duration-200 no-underline ${
                isActive ? "text-golden font-bold" : "text-gray-700 hover:text-golden"
              }`
            }
          >
            <TbBuildingAirport className="text-xl" />
            <span className="ml-3 text-lg font-semibold">Airports</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              `flex items-center transition-colors duration-200 no-underline ${
                isActive ? "text-golden font-bold" : "text-gray-700 hover:text-golden"
              }`
            }
          >
            <FaCity className="text-xl" />
            <span className="ml-3 text-lg font-semibold">Cities</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="flight-routes"
            className={({ isActive }) =>
              `flex items-center transition-colors duration-200 no-underline ${
                isActive ? "text-golden font-bold" : "text-gray-700 hover:text-golden"
              }`
            }
          >
            <MdOutlineConnectingAirports  className="text-xl" />
            <span className="ml-3 text-lg font-semibold">Flight Routes</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="flights"
            className={({ isActive }) =>
              `flex items-center transition-colors duration-200 no-underline ${
                isActive ? "text-golden font-bold" : "text-gray-700 hover:text-golden"
              }`
            }
          >
            <FaPlaneDeparture className="text-xl" />
            <span className="ml-3 text-lg font-semibold">Flights</span>
          </NavLink>
        </li>
      </ul>

      <div className="text-center text-gray-400 text-base mb-4">
        © 2024 AHA Airline
      </div>
    </nav>
  );
};

export default SideBar;
