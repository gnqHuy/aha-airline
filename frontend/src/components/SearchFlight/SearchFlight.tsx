import React, { useEffect, useRef } from 'react';
import { Flight } from '../../object/flight/flight';
import { useFlight } from '../../context/FlightContext/FlightContext';
import { useNavigate } from 'react-router-dom';
import { useSearchFlightState } from '../../context/SearchFlightState/SearchFlightState';

type Props = {
  flight: Flight | null;
};

const SearchFlight: React.FC<Props> = ({ flight }) => {
  const { setSelectedFlight } = useFlight();
  const {setSearchFlightState} = useSearchFlightState();

  const navigate = useNavigate();

  const handleSelectFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    navigate("/ticket");
  };

  if (!flight) {
    return <div>No flight selected</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Search Flight</h2>
        <p className="text-gray-700">
          <strong>From:</strong> {flight.from}
        </p>
        <p className="text-gray-700">
          <strong>To:</strong> {flight.to}
        </p>
        <p className="text-gray-700">
          <strong>Day:</strong> {flight.day}
        </p>
        <p className="text-gray-700">
          <strong>Ticket Type:</strong> {flight.ticketType}
        </p>
        <p className="text-gray-700">
          <strong>Price:</strong> {flight.price}
        </p>
        <button
          onClick={() => handleSelectFlight(flight)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
        <button
          onClick={() => setSearchFlightState(false)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SearchFlight;
