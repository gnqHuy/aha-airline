import React from 'react'
import './BookingSectionHeader.css';
import { IoAirplaneSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { MdAirplaneTicket } from "react-icons/md";

interface Props {
  handleChangeTab: (tabName: string) => void
  sectionTab: string, 
}

const BookingSectionHeader: React.FC<Props> = ({handleChangeTab, sectionTab}) => {
  const windowWidth = window.innerWidth;
  return (
    <div className = "bookingSectionHeaderContainer medium:relative medium:left-[1%]">
        <div className = {(sectionTab === "book" || sectionTab === "default" || sectionTab === "bookingContent") ? "bookingSectionHeaderItem hoverItem medium:w-[30vw] small:w-[30vw] big:w-[28vw]" : "bookingSectionHeaderItem medium:w-[30vw] small:w-[30vw] big:w-[28vw]"} onClick={() => {
            handleChangeTab("book");
        }}>
          <span><IoAirplaneSharp style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "1rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>BOOK</p>
        </div>

        <div className = {sectionTab === "manageBooking" ? "bookingSectionHeaderItem hoverItem medium:w-[30vw] small:w-[30vw] big:w-[25vw]" : "bookingSectionHeaderItem medium:w-[30vw] small:w-[30vw] big:w-[25vw]"} onClick={() => {
            handleChangeTab("manageBooking");
        }}>
          <span><FaBook style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "0.5rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>MANAGE BOOKING</p>
        </div>

        <div className = {sectionTab === "checkIn" ? "bookingSectionHeaderItem hoverItem medium:w-[30vw] small:w-[30vw] big:w-[25vw]" : "bookingSectionHeaderItem medium:w-[30vw] small:w-[30vw] big:w-[25vw]"} onClick={() => handleChangeTab("checkIn")}>
          <span><MdAirplaneTicket style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "0.5rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>CHECK IN</p>
        </div>
    </div>
  )
}

export default BookingSectionHeader;