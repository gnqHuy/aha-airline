import React, { useState } from 'react'
import './BookingSectionCheckIn.css';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useFlightContext } from '../../../context/FlightContext/FlightContext';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
    prevTab: string;
}

const BookingSectionCheckIn: React.FC<Props> = ({sectionTab, handleChangeTab, prevTab}) => {
    const [activeOption, setActiveOption] = useState<string>("reservationCode");

    const [focusReservationCode, setFocusReservationCode] = useState<boolean>(false);
    const [focusEticket, setFocusEticket] = useState<boolean>(false);

    const [reservationCode, setReservationCode] = useState<string>("");
    const [eTicket, setETicket] = useState<string>("");

    // context
    const {setCheckinReservationCode} = useFlightContext();
    const {setCheckinTicket} = useFlightContext();
    const {setCheckinOption} = useFlightContext();

    const setupCheckinReservationCode = () => {
        setCheckinReservationCode(reservationCode);
        localStorage.setItem("checkinReservationCode", reservationCode);
        setCheckinOption("reservation");
        localStorage.setItem("checkinOption", "reservation");
    }

    const setupCheckinTicket = () => {
        setCheckinTicket(eTicket);      
        localStorage.setItem("checkinTicket", eTicket);
        setCheckinOption("ticket");
        localStorage.setItem("checkinOption", "ticket");
    }
  return (
    <div>
        <div className = {sectionTab === "checkIn" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {sectionTab === "checkIn" ? (prevTab === "default" ? "bookingSection_checkIn_container fadeIn focusedDiv medium:w-[90vw] medium:left-[1%] small:w-[90vw] small:left-[1%] small:h-[29rem] big:w-[78vw]" : "bookingSection_checkIn_container focusedDiv medium:w-[90vw] medium:left-[1%] small:w-[90vw] small:left-[1%] small:h-[29rem] big:w-[78vw]") : "bookingSection_checkIn_container fadeIn"}>
            {/* header */}
            <p className = "bookingSection_checkIn_title1">Web Checkin is available 24 to 1 hour before flight departure</p>
            <p className = "bookingSection_checkIn_title2">Please ensure you input the family name as it appears in your ticket</p>
            <div className = "bookingSection_checkIn_options">
                <button className = {activeOption === "reservationCode" ? "active-button" : ""} onClick = {() => {
                    setActiveOption("reservationCode");
                    setReservationCode("");
                }}>Enter your reservation Code</button>
                <button className = {activeOption === "eTicket" ? "active-button" : ""} onClick = {() => {
                    setActiveOption("eTicket");
                    setETicket("");
                }}>eTicket number</button>
                <button className = {activeOption === "flyerNumber" ? "active-button": ""} onClick = {() => {
                    setActiveOption("flyerNumber");
                    setReservationCode("");
                }}>Frequent Flyer Number</button>
            </div>

            {/* reservation code option */}
            {activeOption === "reservationCode" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[3.95rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode" className = {focusReservationCode === false ? "text-label transition-all duration-300 ease-in-out medium:text-sm small:text-xs" : "text-focus relative bottom-4 transition-all duration-300 medium:text-sm small:text-xs"}>Reservation Code</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[35vw] text-sm" onFocus = {() => setFocusReservationCode(true)} onBlur = {() => {
                            if (reservationCode.length === 0) {
                                setFocusReservationCode(false);
                            }
                        }} onChange = {e => setReservationCode(e.target.value)} value = {reservationCode}/>
                    </div>
                </div>
                <div className = " relative left-[10rem] medium:left-[15vw] small:left-[-5rem] small:top-[3rem]">
                    {(reservationCode.length > 0) ?
                        <Link to = "/checkin-management">
                            <button className = "hover:cursor-pointer" onClick={setupCheckinReservationCode}>CHECK IN</button>
                        </Link> : 
                        <button className = "hover:cursor-pointer" onClick={setupCheckinReservationCode}>CHECK IN</button>
                    }
                </div>
            </div>}

            {/* eTicket option */}
            {activeOption === "eTicket" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[4rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode" className = {focusEticket === false ? "text-label transition-all duration-300 ease-in-out medium:text-sm small:text-xs" : "text-focus relative bottom-4 transition-all duration-300 medium:text-sm small:text-xs"}>eTicket</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[35vw]" onFocus = {() => setFocusEticket(true)} onBlur = {() => {
                            if (eTicket.length === 0) {
                                setFocusEticket(false);
                            }
                        }} onChange = {e => setETicket(e.target.value)} value = {eTicket}/>
                    </div>
                </div>
                <div className = " relative left-[10rem] medium:left-[15vw] small:left-[-5rem] small:top-[3rem]">
                    {(eTicket.length > 0) ?
                        <Link to = "/checkin-management">
                            <button className = "hover:cursor-pointer" onClick={setupCheckinTicket}>CHECK IN</button>
                        </Link> : 
                        <button className = "hover:cursor-pointer" onClick={setupCheckinTicket}>CHECK IN</button>
                    }
                </div>
            </div>}

            {/* frequent flyer number option */}
            {activeOption === "flyerNumber" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[4rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode" className = {focusReservationCode === false ? "text-label transition-all duration-300 ease-in-out text-[15px] medium:text-[13px] small:text-[13px]" : "text-focus relative bottom-4 transition-all duration-300 text-[15px] medium:text-[13px] small:text-[13px]"}>Reservation Code</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[25vw]" onFocus = {() => setFocusReservationCode(true)} onBlur = {() => {
                            if (reservationCode.length === 0) {
                                setFocusReservationCode(false);
                            }
                        }} onChange = {e => setReservationCode(e.target.value)} value = {reservationCode}/>
                    </div>
                </div>

                <div className = " relative left-[8rem] top-[1rem] medium:left-[-8rem] medium:top-[2rem] small:left-[-5rem] small:top-[3rem]">
                    {(reservationCode.length > 0) ?
                        <Link to = "/checkin-management">
                            <button className = "hover:cursor-pointer" onClick={setupCheckinReservationCode}>CHECK IN</button>
                        </Link> : 
                        <button className = "hover:cursor-pointer" onClick={setupCheckinReservationCode}>CHECK IN</button>
                    }
                </div>
            </div>}
            <div className = "closeTab_section absolute top-[22.8rem] medium:left-[43vw] small:left-[43vw] small:top-[26.8rem]">
                <button onClick = {() => handleChangeTab("default")}>
                    <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e", position: "relative"}}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookingSectionCheckIn