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
import { GetByReservationOrTicketCode } from '../../../api/ticket';
import { useFlightContext } from '../../../context/FlightContext/FlightContext';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
    prevTab: string;
}

const BookingSectionManageBooking: React.FC<Props> = ({sectionTab, handleChangeTab, prevTab}) => {
    // check focus reservation and last name for animation
    const [isFocusReservation, setIsFocusReservation] = useState<Boolean>(false);

    // reservation and lastname
    const [reservationCode, setReservationCode] = useState<string>("");

    // state to manage display info
    const [displayInfo, setDisplayInfo] = useState<boolean>(false);

    // store reservationCode and lastname for other page
    const [storeReservationCode, setStoreReservationCode] = useState<string>("");
    const [storeLastname, setStoreLastname] = useState<string>("");

    // get all reservation code
    const [reservations, setReservations] = useState<any[]>([]);

    // context
    const {setManageBookingReservationCode} = useFlightContext();

    const handleSearch = () => {
        if (reservationCode.length > 0) {
            fetchData();
            setDisplayInfo(true);
            setStoreReservationCode(reservationCode);
            setManageBookingReservationCode(reservationCode);
            localStorage.setItem("manageBookingReservationCode", reservationCode);
            setReservationCode("");
            setIsFocusReservation(false);
        } else {
            setReservationCode("");
            setIsFocusReservation(false);
        }
    }

    const handleDisplayInfo = () => {
        displayInfo === true ? setDisplayInfo(false) : setDisplayInfo(true);
    }

    const fetchData = async () => {
        try {
            const response = await GetByReservationOrTicketCode(reservationCode);
            setReservations(response.data);
            console.log("Data reservation:"+response.data)
        } catch (err) {
            return <div className = "text-red-500 text-base">Failed to get your information! Check your reservation code!</div>;
        } finally {
            
        }
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

                <div className = "bookingSection_manageBooking_buttonSearch top-[3.5rem] left-[48rem] medium:left-[73vw] small:left-[73vw]">
                    <button className = "w-[8rem] h-[3rem] small:w-[6rem] small:h-[2.5rem] hover:cursor-pointer" onClick = {handleSearch}>Search</button>
                </div>
            </div>

            {displayInfo === true && 
                <div className = "relative mt-[5rem] ml-[2rem]">
                    <ManageBookingInfo
                        handleDisplayInfo={handleDisplayInfo}
                        reservations = {reservations}
                        storeReservationCode = {storeReservationCode}
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