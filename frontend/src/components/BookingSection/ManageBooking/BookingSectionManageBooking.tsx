import React from 'react'
import './BookingSectionManageBooking.css';
import { IoTimer } from "react-icons/io5";
import { RiLuggageCartFill } from "react-icons/ri";
import { PiSeatFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
}

const BookingSectionManageBooking: React.FC<Props> = ({sectionTab, handleChangeTab}) => {
  return (
    <div>
        <div className = {sectionTab === "manageBooking" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {sectionTab === "manageBooking" ? "bookingSection_manageBooking_container fadeIn focusedDiv" : "bookingSection_manageBooking_container fadeIn"} >
            <div className = "form-search-booking">
                <div className = "input-box-ticketNumber">
                    <label className = "input-box-ticketNumber-reservationCode-label">Reservation Code/Ticket Number</label>
                    <input type = "text" className = "detail-input-ticketNumber"/>
                </div>
                <div className = "input-box-lastName">
                    <label>Last Name</label>
                    <input type = "text" className = "detail-input-lastName"/>
                </div>
                <div className = "bookingSection_manageBooking_buttonSearch">
                    <button>Search</button>
                </div>
            </div>
            <div className = "bookingSection_manageBooking_otherBenefit">
                <p>Customize your flight with our wide range of options:</p>
                <div className = "benefits-section">
                    <div className = "benefit-detail">
                        <IoTimer style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Secure my fare</span>
                    </div>
                    <div className = "benefit-detail">
                        <RiLuggageCartFill style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Baggage Information</span>
                    </div>
                    <div className = "benefit-detail">
                        <PiSeatFill style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Seat options</span>
                    </div>
                    <div className = "benefit-detail">
                        <FaCirclePlus style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Add ancillaries</span>
                    </div>
                    <div className = "benefit-detail">
                        <FaPlaneCircleCheck style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Upgrade flights</span>
                    </div>
                    <div className = "benefit-detail">
                        <IoTicket style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/>
                        <span>Exchange flights</span>
                    </div>
                </div>
            </div>
            <div className = "manageBooking_closeTab_section">
                <button onClick = {() => handleChangeTab("default")}>
                    <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookingSectionManageBooking