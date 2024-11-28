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
        <div className = {sectionTab === "checkIn" ? (prevTab === "default" ? "bookingSection_checkIn_container fadeIn focusedDiv" : "bookingSection_checkIn_container focusedDiv") : "bookingSection_checkIn_container fadeIn"}>
            <p className = "bookingSection_checkIn_title1">Web Checkin is available 24 to 1 hour before flight departure</p>
            <p className = "bookingSection_checkIn_title2">Please ensure you input the family name as it appears in your ticket</p>
            <div className = "bookingSection_checkIn_options">
                <button className = {activeOption === "reservationCode" ? "active-button" : ""} onClick = {() => setActiveOption("reservationCode")}>Enter your reservation Code</button>
                <button className = {activeOption === "eTicket" ? "active-button" : ""} onClick = {() => setActiveOption("eTicket")}>eTicket number</button>
                <button className = {activeOption === "flyerNumber" ? "active-button": ""} onClick = {() => setActiveOption("flyerNumber")}>Frequent Flyer Number</button>
            </div>
            {activeOption === "reservationCode" && <div className = "options_input_reservationCode">
                <span>
                    <label id = "options_label_reservationCode">Reservation Code</label>
                    <input type = "text" />
                </span>
                <span>
                    <label id = "options_label_familyName">Family Name</label>
                    <input type = "text" id = "options_input_familyName"/>
                </span>
                <button>CHECK IN</button>
            </div>}
            {activeOption === "eTicket" && <div className = "options_input_eTicket">
                <span>
                    <label id = "options_label_reservationCode">eTicket number</label>
                    <input type = "text" id = "options_input_eTicket"/>
                </span>
                <span>
                    <label id = "options_label_familyName_eTicket">Family Name</label>
                    <input type = "text" id = "options_input_familyName_eTicket"/>
                </span>
                <button>CHECK IN</button>
            </div>}
            {activeOption === "flyerNumber" && <div>
                    <div className = "options_input_flyerNumber">
                        <span>
                            <label id = "options_label_frequentFlyerNumber">Frequent Flyer Number</label>
                            <input type = "text" id = "options_input_frequenFlyerNumber"/>
                        </span>
                        <span>
                            <label id = "options_label_familyName_flyerNumber">Family Name</label>
                            <input type = "text" id = "options_input_familyName_flyerNumber"/>
                        </span>
                        <span>
                            <label id = "options_label_flyerProgram">Frequent Flyer Program</label>
                            <input type = "text" id = "options_input_flyerProgram"/>
                        </span>
                    </div>
                    <button id = "checkin-button">CHECK IN</button>
                </div>}
                <div className = "closeTab_section" style = {{position: "absolute", top: "22.8rem"}}>
                        <button onClick = {() => handleChangeTab("default")}>
                            <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e", position: "relative"}}/></span>
                        </button>
                </div>
        </div>
    </div>
  )
}

export default BookingSectionCheckIn