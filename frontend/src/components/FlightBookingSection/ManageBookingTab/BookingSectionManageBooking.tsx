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
        <div className="w-full h-full py-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 bg-gray-100 px-4 py-4 rounded-2xl">
                <div className="relative flex-1">
                    <label className={`
                        absolute left-0 transition-all duration-300 pointer-events-none text-sm font-medium
                        ${isFocusReservation || reservationCode 
                            ? '-top-2 text-ahaGreen-0 text-xs' 
                            : 'top-2 text-gray-500'
                        }
                    `}>
                        Reservation Code/Ticket Number
                    </label>
                    <input
                        type="text"
                        className="w-full border-b-2 border-ahaGreen-0 outline-none bg-transparent py-2 pt-4 text-base focus:border-ahaGreen-1 transition-colors"
                        onFocus={() => setIsFocusReservation(true)}
                        onBlur={() => {
                            if (reservationCode.length === 0) setIsFocusReservation(false);
                        }}
                        onChange={e => setReservationCode(e.target.value)}
                        value={reservationCode}
                    />
                </div>
                <div className="flex-shrink-0">
                    <button
                        className="bg-ahaAmber-2 text-white font-bold py-2 px-6 rounded-full hover:bg-ahaAmber-3 transition-colors w-full sm:w-auto min-w-[120px]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>

            {displayInfo && (
                <div className="mt-6">
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