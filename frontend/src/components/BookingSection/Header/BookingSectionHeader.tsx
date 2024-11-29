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
  return (
    <div className = "bookingSectionHeaderContainer">
        <div className = {(sectionTab === "book" || sectionTab === "default" || sectionTab === "bookingContent") ? "bookingSectionHeaderItem hoverItem" : "bookingSectionHeaderItem"} onClick={() => {
            handleChangeTab("book");
        }}>
          <span><IoAirplaneSharp style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "1rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>BOOK</p>
        </div>
        <div className = {sectionTab === "manageBooking" ? "bookingSectionHeaderItem hoverItem" : "bookingSectionHeaderItem"} onClick={() => {
            handleChangeTab("manageBooking");
        }}>
          <span><FaBook style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "0.5rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>MANAGE BOOKING</p>
        </div>
        <div className = {sectionTab === "checkIn" ? "bookingSectionHeaderItem hoverItem" : "bookingSectionHeaderItem"} onClick={() => handleChangeTab("checkIn")}>
          <span><MdAirplaneTicket style = {{width: "2rem", height: "1.5rem", position: "relative", top: "0.8rem", right: "0.5rem", color: "#ebc94e"}}/></span>
          <p className = {sectionTab === "book" ? "hoverText" : ""}>CHECK IN</p>
        </div>
    </div>
  )
}

export default BookingSectionHeader;