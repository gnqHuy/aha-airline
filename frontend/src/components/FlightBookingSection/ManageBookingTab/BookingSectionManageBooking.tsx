import React, { useEffect, useState } from 'react';
import { IoTimer } from "react-icons/io5";
import { RiLuggageCartFill } from "react-icons/ri";
import { PiSeatFill } from "react-icons/pi";
import { FaCirclePlus, FaPlaneCircleCheck } from "react-icons/fa6";
import { IoTicket } from "react-icons/io5";
import ManageBookingInfo from './ManageBookingInfo';
import { GetByReservationOrTicketCode } from '../../../api/ticket';
import { useFlightContext } from '../../../context/FlightContext/FlightContext';

const BookingSectionManageBooking = () => {
    const [isFocusReservation, setIsFocusReservation] = useState<boolean>(false);
    const [reservationCode, setReservationCode] = useState<string>("");
    const [displayInfo, setDisplayInfo] = useState<boolean>(false);
    const [storeReservationCode, setStoreReservationCode] = useState<string>("");
    const [storeLastname, setStoreLastname] = useState<string>("");
    const [reservations, setReservations] = useState<any[]>([]);
    const { setManageBookingReservationCode } = useFlightContext();

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
    };

    const handleDisplayInfo = () => {
        setDisplayInfo(!displayInfo);
    };

    const fetchData = async () => {
        try {
            const response = await GetByReservationOrTicketCode(reservationCode);
            setReservations(response.data);
            console.log("Data reservation:" + response.data);
        } catch (err) {
            return <div className="text-red-500 text-base">Failed to get your information! Check your reservation code!</div>;
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="relative w-full md:w-1/2">
                    <label className={`block text-sm font-medium transition-all ${isFocusReservation ? "-translate-y-5 text-gray-500" : "text-black"}`}>
                        Reservation Code/Ticket Number
                    </label>
                    <input
                        type="text"
                        className="w-full border-b-2 border-black outline-none bg-transparent py-1"
                        onFocus={() => setIsFocusReservation(true)}
                        onBlur={() => {
                            if (reservationCode.length === 0) setIsFocusReservation(false);
                        }}
                        onChange={e => setReservationCode(e.target.value)}
                        value={reservationCode}
                    />
                </div>
                <div className="w-full md:w-auto">
                    <button
                        className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:opacity-90"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            {displayInfo && (
                <div className="mt-8">
                    <ManageBookingInfo
                        handleDisplayInfo={handleDisplayInfo}
                        reservations={reservations}
                        storeReservationCode={storeReservationCode}
                    />
                </div>
            )}
        </div>
    );
};

export default BookingSectionManageBooking;