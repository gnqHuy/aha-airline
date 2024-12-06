import React, { useState } from "react";
import { Flight } from "../../object/flight/flight";
import { useFlight } from "../../context/FlightContext/FlightContext";
import { useNavigate } from "react-router-dom";
import { useSearchFlightState } from "../../context/SearchFlightState/SearchFlightState";

type Props = {
  flight: Flight | null;
};

const MAX_PASSENGERS = 9;

const SearchFlight: React.FC<Props> = ({ flight }) => {
  const { setSelectedFlight, setSelectedPassenger } = useFlight();
  const { setSearchFlightState } = useSearchFlightState();
  const navigate = useNavigate();

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const totalPassengers = adults + children + infants;

  const handleIncrement = (type: "adult" | "child" | "infant") => {
    if (totalPassengers >= MAX_PASSENGERS) {
      setErrorMessage("You cannot have more than 9 passengers.");
      return;
    }
    setErrorMessage("");

    if (type === "adult") setAdults(adults + 1);
    if (type === "child") setChildren(children + 1);
    if (type === "infant") setInfants(infants + 1);
  };

  const handleDecrement = (type: "adult" | "child" | "infant") => {
    if (type === "adult" && adults > 1) setAdults(adults - 1);
    if (type === "child" && children > 0) setChildren(children - 1);
    if (type === "infant" && infants > 0) setInfants(infants - 1);
    setErrorMessage("");
  };

  const handleSearchFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setSelectedPassenger({ adults, children, infants });  
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

        <div className="mt-4">
          <h3 className="text-lg font-semibold">Passengers</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Adults (12+ years)</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement("adult")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  -
                </button>
                <span>{adults}</span>
                <button
                  onClick={() => handleIncrement("adult")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Children (2-11 years)</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement("child")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  -
                </button>
                <span>{children}</span>
                <button
                  onClick={() => handleIncrement("child")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span>Infants (under 2 years)</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleDecrement("infant")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  -
                </button>
                <span>{infants}</span>
                <button
                  onClick={() => handleIncrement("infant")}
                  className="px-2 py-1 bg-gray-200 text-gray-700 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {errorMessage && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}

        <button
          onClick={() => handleSearchFlight(flight)}
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
