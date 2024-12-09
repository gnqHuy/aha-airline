import React, { useState } from 'react'
import './BookingSectionCheckIn.css';
import { IoIosArrowUp } from 'react-icons/io';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
    prevTab: string;
}

const BookingSectionCheckIn: React.FC<Props> = ({sectionTab, handleChangeTab, prevTab}) => {
    const [activeOption, setActiveOption] = useState<string>("reservationCode");
  return (
    <div>
        <div className = {sectionTab === "checkIn" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {sectionTab === "checkIn" ? (prevTab === "default" ? "bookingSection_checkIn_container fadeIn focusedDiv medium:w-[90vw] medium:left-[1%] small:w-[90vw] small:left-[1%] small:h-[29rem] big:w-[78vw]" : "bookingSection_checkIn_container focusedDiv medium:w-[90vw] medium:left-[1%] small:w-[90vw] small:left-[1%] small:h-[29rem] big:w-[78vw]") : "bookingSection_checkIn_container fadeIn"}>
            <p className = "bookingSection_checkIn_title1">Web Checkin is available 24 to 1 hour before flight departure</p>
            <p className = "bookingSection_checkIn_title2">Please ensure you input the family name as it appears in your ticket</p>
            <div className = "bookingSection_checkIn_options">
                <button className = {activeOption === "reservationCode" ? "active-button" : ""} onClick = {() => setActiveOption("reservationCode")}>Enter your reservation Code</button>
                <button className = {activeOption === "eTicket" ? "active-button" : ""} onClick = {() => setActiveOption("eTicket")}>eTicket number</button>
                <button className = {activeOption === "flyerNumber" ? "active-button": ""} onClick = {() => setActiveOption("flyerNumber")}>Frequent Flyer Number</button>
            </div>
            {activeOption === "reservationCode" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[4rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode">Reservation Code</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[35vw]"/>
                    </div>
                </div>
                <div className = "relative left-[16rem] top-[4rem]">
                    <div className = "relative top-[1.5rem]">
                        <label className = "relative right-[11.5rem]">Family Name</label>
                    </div>
                    <div>
                        <input type = "text" id = "options_input_familyName" className = "w-[18rem] medium:w-[26vw] small:w-[35vw]"/>
                    </div>
                </div>
                <div className = " relative left-[10rem] medium:left-[15vw] small:left-[-5rem] small:top-[3rem]">
                    <button>CHECK IN</button>
                </div>
            </div>}
            {activeOption === "eTicket" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[4rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode">eTicket</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[35vw]"/>
                    </div>
                </div>
                <div className = "relative left-[16rem] top-[4rem]">
                    <div className = "relative top-[1.5rem]">
                        <label className = "relative right-[11.5rem]">Family Name</label>
                    </div>
                    <div>
                        <input type = "text" id = "options_input_familyName" className = "w-[18rem] medium:w-[26vw] small:w-[35vw]"/>
                    </div>
                </div>
                <div className = " relative left-[10rem] medium:left-[15vw] small:left-[-5rem] small:top-[3rem]">
                    <button>CHECK IN</button>
                </div>
            </div>}
            {activeOption === "flyerNumber" && <div className = "options_input_reservationCode">
                <div className = "relative left-[2rem] top-[4rem]">
                    <div className = "top-[1.5rem] relative">
                        <label id = "options_label_reservationCode" className = "text-[15px] medium:text-[13px] small:text-[13px]">Reservation Code</label>
                    </div>
                    <div>
                        <input type = "text" className = "w-[18rem] medium:w-[26vw] small:w-[25vw]"/>
                    </div>
                </div>

                <div className = "relative left-[15rem] top-[4rem]">
                    <div className = "relative top-[1.5rem]">
                        <label className = "relative right-[11.5rem] text-[15px] medium:text-[13px] small:text-[13px]">Family Name</label>
                    </div>
                    <div>
                        <input type = "text" id = "options_input_familyName" className = "w-[18rem] medium:w-[26vw] small:w-[25vw]"/>
                    </div>
                </div>

                <div className = "relative left-[16rem] top-[4rem]">
                    <div className = "relative top-[1.5rem]">
                        <label className = "relative right-[11.5rem] text-[15px] medium:text-[13px] small:text-[13px]">Frequent Flyer Program</label>
                    </div>
                    <div>
                        <input type = "text" id = "options_input_familyName" className = "w-[18rem] medium:w-[26vw] small:w-[25vw]"/>
                    </div>
                </div>

                <div className = " relative left-[-8rem] top-[1rem] medium:left-[-8rem] medium:top-[2rem] small:left-[-5rem] small:top-[3rem]">
                    <button>CHECK IN</button>
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