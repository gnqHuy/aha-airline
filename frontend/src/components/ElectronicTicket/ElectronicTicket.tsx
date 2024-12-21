import React from "react";
import { BsClock } from "react-icons/bs";
import { Ticket } from "../../object/ticket";
import { Flight } from "../../object/flight";
import { PassengerTitle } from "../../object/enum/PassengerTitle";
import { FlightInfo, FlightTicketResponse, TicketSummary } from "../../object/reponseTicketData";
import { SeatClass } from "../../object/enum/SeatClass";

type ElectronicTicketProps = {
  ticketSummary: TicketSummary;
  flightInfo: FlightInfo;
  reservation: string;
};

const ElectronicTicket: React.FC<ElectronicTicketProps> = ({ ticketSummary, flightInfo, reservation }) => {
  const calculateDuration = (from: string, to: string): string => {
    const fromTime = new Date(from).getTime();
    const toTime = new Date(to).getTime();
    const duration = (toTime - fromTime) / (1000 * 60);
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hours}h ${minutes}m`;
  };

  if (!ticketSummary) {
    return <div>Something are wrong, please back to home page.</div>;
  }

  return (
    <div className="w-[70%] mx-auto border border-gray-300 rounded-lg p-6 shadow-sm bg-white my-4">
      <div className="text-3xl font-bold text-golden">AHA AIRLINE</div>
      <div className="flex pl-4 gap-44">
        <div>
          <div><p><strong>Reservation Code:</strong> {reservation}</p></div>
          <div><p><strong>Ticket Code:</strong> {ticketSummary.ticketCode}</p></div>
        </div>
        <div>
          <div className="mb-4">
            <p>
              <strong>Passenger:</strong> {PassengerTitle[ticketSummary.passengerTitle]}. {ticketSummary.firstName} {ticketSummary.lastName}
            </p>
            <p>
              <strong>Date of Birth:</strong> {new Date(ticketSummary.passengerDOB).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div>
          <p>
            <strong>Email:</strong> {ticketSummary.contactEmail}
          </p>
          <p>
            <strong>Phone Number:</strong> {ticketSummary.phoneNumber}
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
              <th className="border-b-2 border-golden p-3">Departure</th>
              <th className="border-b-2 border-golden p-3">Arrival</th>
            </tr>
          </thead>
          <tbody className="bg-golden-hover">
            <tr>
              <td className="p-3">
                <strong>{flightInfo.fromAirport.name}</strong> <br /> {flightInfo.fromAirport.iata}
              </td>
              <td className="p-3">
                <strong>{flightInfo.toAirport.name}</strong> <br /> {flightInfo.toAirport.iata}
                </td>
              <td className="p-3">
                {new Date(flightInfo.departureTime).toLocaleTimeString()} <br />{" "}
                {new Date(flightInfo.departureTime).toLocaleDateString()}
              </td>
              <td className="p-3">
                {new Date(flightInfo.arrivalTime).toLocaleTimeString()} <br />{" "}
                {new Date(flightInfo.arrivalTime).toLocaleDateString()}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex items-center justify-between mt-4 mx-4 text-base text-gray-700">
          <div className="flex flex-col items-start">
            <div className="font-medium">Class: {SeatClass[ticketSummary.class]}</div>
            <div className="flex items-center mt-1">
              <BsClock className="mr-2 text-golden" />
              Duration:{" "}
              <span className="ml-1 font-semibold">
                {calculateDuration(flightInfo.departureTime, flightInfo.arrivalTime)}
              </span>
            </div>
          </div>
          <div>
            <span className="font-medium">{flightInfo.aircraft.name}</span> <br /> operated by
            AHA Airline
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectronicTicket;
