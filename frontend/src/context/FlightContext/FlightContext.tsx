import React, { createContext, useContext, useState } from "react";
import { Flight } from "../../object/flight/flight";
import { PassengerCount } from "../../object/passengerCount/passengerCount";

type FlightContextType = {
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight) => void;
  selectedPassenger: PassengerCount;
  setSelectedPassenger: (passengerCount: PassengerCount) => void;
};

const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedPassenger, setSelectedPassenger] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });

  return (
    <FlightContext.Provider
      value={{
        selectedFlight,
        setSelectedFlight,
        selectedPassenger,
        setSelectedPassenger,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlight = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlight must be used within a FlightProvider");
  }
  return context;
};
