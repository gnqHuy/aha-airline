import React, { createContext, useContext, useEffect, useState } from "react";
import { Flight } from "../../object/flight/flight";
import { PassengerCount } from "../../object/passengerCount/passengerCount";
import { getAllAirport } from "../../api/airportAPI";

type FlightContextType = {
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight) => void;
  selectedPassenger: PassengerCount;
  setSelectedPassenger: (passengerCount: PassengerCount) => void;
  airports: any[];
  setAirports: (flights: any[]) => void;
};

const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedPassenger, setSelectedPassenger] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [airports, setAirports] = useState<any[]>([]);

  useEffect(() => {
    getAllAirport().then((res) => {
      setAirports(res.data);
    })
  }, []);

  return (
    <FlightContext.Provider
      value={{
        selectedFlight,
        setSelectedFlight,
        selectedPassenger,
        setSelectedPassenger,
        airports,
        setAirports
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlight must be used within a FlightProvider");
  }
  return context;
};
