import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FlightPreviewType } from "../../object/flightPreview";

type Props = {
  selectedFlightPreview: FlightPreviewType;
  totalPassengers: number;
};

const FlightInfoSummary: React.FC<Props> = ({ selectedFlightPreview, totalPassengers }) => {
  const departureDate = new Date(selectedFlightPreview.departureTime);

  const formattedDate = departureDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md flex items-center justify-between w-[90%] max-w-3xl">
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-xl font-semibold text-gray-900">{selectedFlightPreview.fromAirport.iata}</div>
            <div className="text-base text-gray-500">{selectedFlightPreview.fromAirport.city.name}</div>
          </div>
          <div className="flex items-center text-gray-500">
            <div className="h-0.5 w-36 bg-gray-300"></div>
            <FaPlaneDeparture className="mx-2 text-xl text-ahaAmber-2" />
          </div>
          <div className="text-right">
            <div className="text-xl font-semibold text-gray-900">{selectedFlightPreview.toAirport.iata}</div>
            <div className="text-base text-gray-500">{selectedFlightPreview.toAirport.city.name}</div>
          </div>
        </div>
      </div>
      <div className="h-14 w-px bg-ahaAmber-2 mx-4"></div>
      <div className="flex items-center justify-center w-38 font-semibold">
        <div>
          Depart<br />
          <span className="block mt-2 font-normal">{formattedDate}</span>
        </div>
      </div>
      <div className="h-14 w-px bg-ahaAmber-2 mx-4"></div>
      <div className="flex items-center justify-center w-32 font-semibold">
        <div>
          Passengers<br />
          <div className="flex items-center mt-2">
            <IoPerson className="text-ahaAmber-2 mr-1" />
            <span className="font-semibold">{totalPassengers}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightInfoSummary;
