import React from "react";
import { BookedTicket } from "../../object/ticket/ticket";
import { FaPlane } from "react-icons/fa";
import { BsClock } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

type ElectronicTicketProps = {
    bookedTicket: BookedTicket;
};

const ElectronicTicket: React.FC<ElectronicTicketProps> = ({ bookedTicket }) => {
    const calculateDuration = (from: Date, to: Date): string => {
        const duration = (to.getTime() - from.getTime()) / (1000 * 60);
        const hours = Math.floor(duration / 60);
        const minutes = Math.floor(duration % 60);
        return `${hours}h ${minutes}m`;
    };
    
    return (
      <div className="w-[70%] mx-auto border border-gray-300 rounded-lg p-6 shadow-sm bg-white my-4">
        <div className="text-3xl font-bold text-golden">AHA AIRLINE</div>
        <div className="flex gap-14">
            <div>
                <div className="mb-4">
                <p>
                    <strong>Passenger:</strong>{" "}
                    {bookedTicket.title}. {bookedTicket.firstName} {bookedTicket.lastName}
                </p>
                <p>
                    <strong>Date of Birth:</strong>{" "}
                    {new Date(bookedTicket.dateOfBirth).toLocaleDateString()}
                </p>
                </div>
            </div>
            <div className="">
                <p>
                <strong>Email:</strong>{" "}
                {bookedTicket.email}
                </p>
                <p>
                <strong>Phone Number:</strong>{" "}
                {bookedTicket.phone}
                </p>
            </div>
        </div>


        <div className="p-2">
            <div className="text-golden text-lg font-semibold p-4 bg-Green">
                ELECTRONIC TICKET RECEIPT
            </div>
            <table className="w-[90%] mx-auto my-3 text-left border-collapse">
                <thead className="bg-Green text-golden text-base">
                <tr>
                    <th className="border-b-2 border-golden p-3">From</th>
                    <th className="border-b-2 border-golden p-3">To</th>
                    <th className="border-b-2 border-golden p-3">Flight</th>
                    <th className="border-b-2 border-golden p-3">Departure</th>
                    <th className="border-b-2 border-golden p-3">Arrival</th>
                </tr>
                </thead>
                <tbody className="bg-golden-hover">
                    <td className="p-3">{bookedTicket.fromIATA} <br/> {bookedTicket.fromAirportName}</td>
                    <td className="p-3">{bookedTicket.toAirportName}</td>
                    <td className="p-3">VN111</td>
                    <td className="p-3">{bookedTicket.fromTime.toLocaleTimeString()} <br/> {bookedTicket.fromTime.toLocaleDateString()}</td>
                    <td className="p-3">{bookedTicket.toTime.toLocaleTimeString()} <br/> {bookedTicket.toTime.toLocaleDateString()}</td>  
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-4 mx-4 text-base text-gray-700">
                <div className="flex flex-col items-start">
                    <div className="font-medium">
                        Class: {bookedTicket.classType}
                    </div>
                    <div className="flex items-center mt-1">
                        <BsClock className="mr-2 text-golden" />
                        Duration: <span className="ml-1 font-semibold">{calculateDuration(bookedTicket.fromTime, bookedTicket.toTime)}</span>
                    </div>
                </div>
                <div>
                    <span className="font-medium">{bookedTicket.aircraft}</span> <br/> operated by AHA Airline
                </div>
            </div>
        </div> 
    </div>    
    );
};

export default ElectronicTicket;
