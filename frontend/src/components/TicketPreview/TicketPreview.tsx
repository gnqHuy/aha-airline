import React, { useEffect, useRef, useState } from "react";
import { FaPlane } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { Flight } from "../../object/flight";
import { SeatClass } from "../../object/enum/SeatClass";
import { useSnackbar } from "notistack";

type Props = {
  flight: Flight ;
  classType?: SeatClass;
  handleSelectedFlight? :  (flight: Flight, classType: SeatClass) => void;
};

const TicketPreview: React.FC<Props> = ({ flight, classType = SeatClass.None, handleSelectedFlight }) => {
  const [classType1, setClassType1] = useState(SeatClass.None);

  const handleSelectClassType = (type: SeatClass) => {
    setClassType1(classType1 === type ? SeatClass.None : type);
  };  

  const calculateDuration = (from: Date, to: Date): string => {
    const duration = (to.getTime() - from.getTime()) / (1000 * 60);
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hours}h ${minutes}m`;
  };

  const formatDate = (time: string): string => {
    const date = new Date(time);
    return date.toLocaleString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (time: string): string => {
    const date = new Date(time);
    return date.toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };
  
  return (
    <div>
      <div className="flex w-full border rounded-lg shadow-md overflow-hidden bg-white"
      >
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-2xl font-semibold text-gray-900 small:text-xl">
                {formatTime(flight.departureTime)}
              </div>
              <div className="text-xl font-normal text-gray-900 small:text-lg">
                {formatDate(flight.departureTime)}
              </div>
              <div className="text-lg text-ahaAmber-2">
                {flight.flightRoute.fromAirport.city.name}
              </div>
            </div>

            <div className="flex items-center text-ahaAmber-2">
              <div className="h-0.5 w-28 bg-gray-300"></div>
              <FaPlane className="mx-2 text-xl" />
              <div className="h-0.5 w-28 bg-gray-300"></div>
            </div>

            <div className="text-right">
              <div className="text-2xl font-semibold text-gray-900 small:text-xl">
                {formatTime(flight.arrivalTime)}
              </div>
              <div className="text-xl font-normal text-gray-900 small:text-lg">
                {formatDate(flight.arrivalTime)}
              </div>
              <div className="text-lg text-ahaAmber-2">
                {flight.flightRoute.toAirport.city.name}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-base text-gray-700">
            <div className="flex items-center">
              <BsClock className="mr-2 text-ahaAmber-2" />
              Duration:{" "}
              <span className="ml-1 font-semibold">
                {calculateDuration(
                  new Date(flight.departureTime),
                  new Date(flight.arrivalTime)
                )}
              </span>
            </div>
            <div>
              <span className="font-medium">{flight.aircraft.name}</span> <br />{" "}
              operated by AHA Airline
            </div>
          </div>
        </div>
        {classType === SeatClass.None ? (
          <div className="w-72 grid grid-cols-2 border-l divide-x divide-gray-300">
            <div
              className="p-4 text-center text-xl bg-ahaGreen-0"
              onClick={() => handleSelectClassType(SeatClass.Economy)}
            >
              <div className="font-semibold mb-10 text-ahaAmber-2">Economy</div>
              <div className="font-bold text-ahaAmber-2">
                {flight.economyPrice.toLocaleString()} VND
              </div>
            </div>

            <div
              className="p-4 text-center text-xl bg-ahaAmber-2"
              onClick={() => handleSelectClassType(SeatClass.Business)}
            >
              <div className="font-semibold mb-10 text-ahaGreen-0">Business</div>
              <div className="font-bold text-ahaGreen-0">
                {flight.businessPrice.toLocaleString()} VND
              </div>
            </div>
          </div>
        ) : classType === SeatClass.Economy ? (
          <div className="p-4 px-8 text-center text-xl bg-ahaGreen-0">
            <div className="font-semibold mb-10 text-ahaAmber-2">Economy</div>
            <div className="font-bold text-ahaAmber-2">
              {flight.economyPrice.toLocaleString()} <br/>VND
            </div>
          </div>
        ) : (
          <div className="p-4 px-8 text-center text-xl bg-ahaAmber-2">
            <div className="font-semibold mb-10 text-ahaGreen-0">Business</div>
            <div className="font-bold text-ahaGreen-0">
              {flight.businessPrice.toLocaleString()} <br/> VND
            </div>
          </div>
        )}
      </div>
      <div>
      {classType1 === SeatClass.Business ? (
        <div className="flex w-[80%] mx-auto flex-row border shadow-md overflow-hidden bg-white">
          <div className="p-4 ml-auto">
            <div className="font-bold text-2xl">Business</div>
            <div className="text-xl font-semibold text-ahaAmber-2">
              {flight.businessPrice.toLocaleString()} VND
            </div>
            <div className="text-lg"><span className="font-semibold">Remaining Seat: </span> {flight.remainingBsnSeats}</div>
          </div>

          <div className="flex items-center justify-center p-4">
            <button 
              onClick={() => handleSelectedFlight?.(flight, SeatClass.Business)}
              className="my-auto px-6 py-2 text-ahaAmber-2 text-base cursor-pointer border-ahaAmber-2 font-semibold hover:bg-ahaAmber-2 hover:text-white rounded-md">
              Choose Class
            </button>
          </div>
        </div>
      ) : classType1 === SeatClass.Economy ? (
        <div className="flex w-[80%] mx-auto flex-row border shadow-md overflow-hidden bg-white">
          <div className="p-4 ml-auto">
            <div className="font-bold text-2xl">Economy</div>
            <div className="text-xl font-semibold text-ahaAmber-2">
              {flight.economyPrice.toLocaleString()} VND
            </div>
            <div className="text-lg"><span className="font-semibold">Remaining Seat: </span> {flight.remainingEcoSeats}</div>
          </div>

          <div className="flex items-center justify-center p-4">
            <button
              onClick={() => handleSelectedFlight?.(flight, SeatClass.Economy)} 
             className="my-auto px-6 py-2 text-ahaAmber-2 text-base cursor-pointer border-ahaAmber-2 font-semibold hover:bg-ahaAmber-2 hover:text-white rounded-md">
              Choose Class
            </button>
          </div>
        </div>
      ) : null}
      </div>
    </div>
  );
};

export default TicketPreview;