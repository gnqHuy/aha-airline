import React from 'react';
import { Link } from 'react-router-dom';
import { BsCreditCard2FrontFill } from "react-icons/bs";
import { IoTicket, IoLogOutSharp, IoPerson } from "react-icons/io5";

interface Props {
  username: string;
  roles: string[];
  handleLogout: () => void;
}

const LoginDropdown: React.FC<Props> = ({ username, roles, handleLogout }) => {
  const isAdmin = roles.includes("FlightAdmin");

  return (
    <div className="w-[17vw] small:w-[30vw] medium:w-[40vw] bg-[#faf9f7] rounded-md shadow-lg py-4 px-5 space-y-4">
      {/* Header: Avatar + Username */}
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-lg font-bold text-ahaGreen-0">{username}</p>
          <div className="flex flex-wrap gap-2 mt-1">
            {roles.map((role, index) => (
              <span
                key={index}
                className="bg-ahaGreen-0 text-white text-xs font-medium px-2 py-0.5 rounded-full"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-300" />

      {/* Info options */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3 cursor-default">
          <BsCreditCard2FrontFill className="w-5 h-5 text-ahaGreen-0" />
          <p className="text-sm text-gray-700">Credit point: 0</p>
        </div>

        <Link to="/your-ticket" className="flex items-center space-x-3 text-ahaGreen-0 hover:underline">
          <IoTicket className="w-5 h-5" />
          <p className="text-sm">Your tickets</p>
        </Link>

        {isAdmin && (
          <Link to="/admin/aircrafts" className="flex items-center space-x-3 text-ahaGreen-0 font-semibold hover:underline">
            <IoPerson className="w-5 h-5" />
            <p className="text-sm">Admin Page</p>
          </Link>
        )}
      </div>

      <hr className="border-t border-gray-300" />

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 text-gray-800 hover:text-red-600 transition-colors font-semibold"
      >
        <IoLogOutSharp className="w-5 h-5" />
        <span className="text-sm">Log out</span>
      </button>
    </div>
  );
};

export default LoginDropdown;
