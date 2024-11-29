import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

type CardProps = {
  image: string;
  title: string;
  link: string;
  width?: string; // Chiều rộng tùy chỉnh cho thẻ
};

const CardComponent: React.FC<CardProps> = ({ image, title, link, width = "500px" }) => {
  return (
    <Link
      to={link} 
      className="relative rounded-lg overflow-hidden shadow-lg h-[280px] group" 
      style={{ width }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover top-0 left-0 absolute transition-transform duration-300 group-hover:scale-105" 
      />

      <div className="absolute text-[25px] bottom-0 left-0 right-0 bg-bgGreen bg-opacity-50 text-white font-bold px-4 pt-4 pb-5 flex justify-between items-center">
        <span>{title}</span>
        <IoIosArrowForward />
      </div>
    </Link>
  );
};

export default CardComponent;
