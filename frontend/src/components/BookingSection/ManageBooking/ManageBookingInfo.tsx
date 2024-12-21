import React from 'react'
import './ManageBookingInfo.css';
import { Link } from 'react-router-dom';
import { IoIosAirplane } from 'react-icons/io';
import { BsLightbulb } from 'react-icons/bs';
import { useFlightContext } from '../../../context/FlightContext/FlightContext';

interface Props {
    reservations: any[];
    handleDisplayInfo: () => void;
    storeReservationCode: string;
}

const ManageBookingInfo:React.FC<Props> = ({handleDisplayInfo, reservations, storeReservationCode}) => {
  return (
    <div>
        {/* box info */}
        <div className = "w-[95%] bg-[#edd798]">
            <div className = "w-[100%] h-[2.5rem] bg-white">
                <span className = "text-lg pl-[1rem] relative top-[0.5rem] font-bold text-Green">Reservation Code: {storeReservationCode}</span>
            </div>
            <div className = "flex">
                <div className = "ml-[1rem]">
                    <p className = "text-Green font-bold text-lg">Journey info:</p>
                    <ul id = "journey-list" className = "mb-[1rem] text-base relative bottom-[1.5rem] right-[1rem] font-bold text-Green">
                        <li>
                            <div className = "flex">
                                <p>{`${reservations[0]?.flightInfo?.fromAirport?.city?.name} (${reservations[0]?.flightInfo?.fromAirport?.iata}), ${reservations[0]?.flightInfo?.fromAirport?.city?.country}`}</p>
                                <IoIosAirplane style = {{color: "#1A4532"}} className = "w-[1.5rem] h-[1.5rem] ml-[0.7rem] relative top-[1.1rem]"/>
                                <p className = "ml-[0.5rem]">{`${reservations[0]?.flightInfo?.toAirport?.city?.name} (${reservations[0]?.flightInfo?.toAirport?.iata}), ${reservations[0]?.flightInfo?.toAirport?.city?.country}`}</p>
                            </div>
                        </li>
                        <li className = "relative bottom-[1.5rem]">
                            <p><b>Boarding time: </b>{reservations[0]?.flightInfo?.boardingTime}</p>
                        </li>
                        <li className = "relative bottom-[2rem]">
                            <p><b>Departure time: </b>{reservations[0]?.flightInfo?.departureTime}</p>
                        </li>
                        <li className = "relative bottom-[2.5rem]">
                            <p><b>Arrival time: </b>{reservations[0]?.flightInfo?.arrivalTime}</p>
                        </li>
                        <li className = "relative bottom-[3rem]">
                            <p><b>Aircraft name: </b>{reservations[0]?.flightInfo?.aircraft?.name}</p>
                        </li>
                        <li className = "relative bottom-[3.5rem]">
                            <p><b>Aircraft model: </b>{reservations[0]?.flightInfo?.aircraft?.model}</p>
                        </li>
                        <li className = "relative bottom-[4rem]">
                            <p><b>Boarding gate: </b>{reservations[0]?.flightInfo?.boardingGate}</p>
                        </li>
                    </ul>
                </div>


                <div className = "w-[0.01rem] h-[26.5vw] bg-gray-500 rounded-[8px] mt-[1.8rem] ml-[1%]"></div>
                <div className = "ml-[1rem]">
                    <p className = "text-Green font-bold text-lg">Customer info:</p>
                    {reservations.map((reservation, index) => {
                        return (
                            <div className = "text-base relative bottom-[1rem] ml-[0]">
                                <p className = "font-bold">{`Customer ${index + 1}:`}</p>
                                <ul id = "journey-list" className = "relative bottom-[1rem]">
                                    <li>{`${reservation?.passengerTitle === 1 ? "Mrs" : "Mr"} ${reservation?.firstName} ${reservation?.lastName}/${reservation?.ticketCode}`}</li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

        {/* buttons */}
        <div className = "flex mt-[1.5rem]">
            <button className = "w-[8rem] h-[2.5rem] bg-white text-Green border-[2px] border-Green border-solid rounded-[8px] font-bold text-base absolute right-[15rem] hover:cursor-pointer" onClick = {handleDisplayInfo}>Close</button>
            <Link to = "/book-management">
                <button className = "w-[8rem] h-[2.5rem] bg-golden-ramsay text-white border-[2px] border-none rounded-[8px] font-bold text-base absolute right-[5rem] hover:cursor-pointer">Services</button>
            </Link>
        </div>
    </div>
  )
}

export default ManageBookingInfo;