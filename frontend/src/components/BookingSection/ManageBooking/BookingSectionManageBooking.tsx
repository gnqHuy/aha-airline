import React, { useEffect, useState } from 'react'
import './BookingSectionManageBooking.css';
import { IoTimer } from "react-icons/io5";
import { RiLuggageCartFill } from "react-icons/ri";
import { PiSeatFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { FaPlaneCircleCheck } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import ManageBookingInfo from './ManageBookingInfo';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
    prevTab: string;
}

const BookingSectionManageBooking: React.FC<Props> = ({sectionTab, handleChangeTab, prevTab}) => {
    const [isFocusReservation, setIsFocusReservation] = useState<Boolean>(false);
    const [isFocusLastname, setIsFocusLastname] = useState<Boolean>(false);

    const [reservationCode, setReservationCode] = useState<string>("");
    const [lastName, setLastname] = useState<string>("");

    const [displayInfo, setDisplayInfo] = useState<boolean>(false);

    const [storeReservationCode, setStoreReservationCode] = useState<string>("");
    const [storeLastname, setStoreLastname] = useState<string>("");

    const handleSearch = () => {
        if (reservationCode.length > 0 && lastName.length > 0) {
            setDisplayInfo(true);
            setStoreReservationCode(reservationCode);
            setStoreLastname(lastName);
            setReservationCode("");
            setLastname("");
            setIsFocusReservation(false);
            setIsFocusLastname(false);
        } else {
            setReservationCode("");
            setLastname("");
            setIsFocusReservation(false);
            setIsFocusLastname(false);
        }
    }

    const handleDisplayInfo = () => {
        displayInfo === true ? setDisplayInfo(false) : setDisplayInfo(true);
    }
  return (
    <div>
        <div className = {sectionTab === "manageBooking" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {sectionTab === "manageBooking" ? (prevTab === "default" ? "bookingSection_manageBooking_container fadeIn focusedDiv medium:w-[90vw] medium:left-[1%] medium:h-[25rem] small:w-[90vw] small:left-[1%] big:w-[78vw]" : "bookingSection_manageBooking_container focusedDiv medium:w-[90vw] medium:left-[1%] medium:h-[25rem] small:w-[90vw] small:left-[1%] big:w-[78vw]") : "bookingSection_manageBooking_container fadeIn"} >
            <div className = "form-search-booking">
                <div className = "relative top-[3.1rem] left-[2rem] input-box-ticketNumber block">
                    <div className = "relative left-[0.5rem]">
                        <label className = {isFocusReservation === false ? "text-label transition-all duration-300 ease-in-out medium:text-sm small:text-xs" : "text-focus relative bottom-4 transition-all duration-300 medium:text-sm small:text-xs"}>Reservation Code/Ticket Number</label>
                    </div>
                    <div className = "relative bottom-[1rem]">
                        <input type = "text" className = "detail-input-ticketNumber left-[-0.5rem] top-[0.2rem] medium:w-[31vw] small:w-[31vw]" onFocus = {() => setIsFocusReservation(true)} onBlur = {() => {
                            if (reservationCode.length === 0) {
                                setIsFocusReservation(false);
                            }
                        }} onChange = {e => setReservationCode(e.target.value)} value = {reservationCode}/>
                    </div>
                </div>

                <div className = "relative top-[3.1rem] left-[3rem] input-box-lastName medium:left-[38vw] small:left-[38vw]">
                    <div className = "relative left-[0.5rem]">
                        <label className = {isFocusLastname === false ? "text-label transition-all duration-300 ease-in-out medium:text-sm small:text-xs" : "text-focus relative bottom-4 transition-all duration-300 medium:text-sm small:text-xs"}>Last Name</label>
                    </div>
                    <div className = "relative bottom-[1rem]">
                        <input type = "text" className = "detail-input-lastName medium:w-[31vw] small:w-[31vw]" onFocus = {() => setIsFocusLastname(true)} onBlur = {() => {
                            if (lastName.length === 0) {
                                setIsFocusLastname(false);
                            }
                        }} onChange = {e => setLastname(e.target.value)} value = {lastName}/>
                    </div>
                </div>

                <div className = "bookingSection_manageBooking_buttonSearch top-[3.5rem] left-[48rem] medium:left-[73vw] small:left-[73vw]">
                    <button className = "w-[8rem] h-[3rem] small:w-[6rem] small:h-[2.5rem] hover:cursor-pointer" onClick = {handleSearch}>Search</button>
                </div>
            </div>

            {displayInfo === true && 
                <div className = "relative mt-[5rem] ml-[2rem]">
                    <ManageBookingInfo 
                        storeReservationCode = {storeReservationCode}
                        storeLastname = {storeLastname}
                        handleDisplayInfo={handleDisplayInfo}
                    />
                </div>
            }

            {/* benefit */}
            <div className = "bookingSection_manageBooking_otherBenefit mb-[8rem]">
                <p>Customize your flight with our wide range of options:</p>
                <div className = "benefits-section">
                    <div className = "benefit-detail medium:mr-[1vw]">
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
            <div className = "manageBooking_closeTab_section left-[28.25rem] top-[0.1rem] medium:top-[22.8rem] medium:left-[43vw] small:left-[43vw]">
                <button onClick = {() => handleChangeTab("default")}>
                    <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookingSectionManageBooking