import React, { useState } from "react";
import { Flight } from "../../object/flight/flight";
import { useFlight } from "../../context/FlightContext/FlightContext";
import { useNavigate } from "react-router-dom";
import { useSearchFlightState } from "../../context/SearchFlightState/SearchFlightState";
import { AiOutlineClose } from "react-icons/ai";

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
    return <div className="text-center text-red-500">No flight selected</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-golden">
          Search Flight
        </h2>

        <div className="flex flex-col lg:flex-row text-left px-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Flight Details</h3>
            <div className="">
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
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Passengers</h3>
            <div className="space-y-4">
              {[
                { label: "Adults (12+ years)", type: "adult", count: adults },
                { label: "Children (2-11 years)", type: "child", count: children },
                { label: "Infants (under 2 years)", type: "infant", count: infants },
              ].map(({ label, type, count }) => (
                <div key={type} className="flex justify-between items-center">
                  <span className="text-gray-700">{label}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(type as "adult" | "child" | "infant")}
                      className="px-3 py-1 rounded hover:bg-golden-hover transition"
                    >
                      -
                    </button>
                    <span className="font-semibold">{count}</span>
                    <button
                      onClick={() => handleIncrement(type as "adult" | "child" | "infant")}
                      className="px-3 py-1 rounded hover:bg-golden-hover transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {errorMessage && (
              <p className="mt-2 text-sm text-red-500 text-center">{errorMessage}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={() => handleSearchFlight(flight)}
            className="px-4 w-40 py-2 rounded hover:bg-golden-hover transition"
          >
            Search
          </button>
          <button
            onClick={() => setSearchFlightState(false)}
            className="px-4 w-40 py-2 rounded hover:bg-golden-hover transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFlight;
