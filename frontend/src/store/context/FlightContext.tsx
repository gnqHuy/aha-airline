import React, { createContext, useContext, useState, useEffect } from "react";

type FlightContextType = {
  manageBookingReservationCode: string;
  setManageBookingReservationCode: (reservationCode: string) => void;

  checkinReservationCode: string;
  setCheckinReservationCode: (reservationCode: string) => void;

  checkinTicket: string;
  setCheckinTicket: (ticket: string) => void;

  checkinOption: string;
  setCheckinOption: (option: string) => void;
};

const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [manageBookingReservationCode, setManageBookingReservationCode] = useState<string>(String(localStorage.getItem("manageBookingReservationCode")));
  const [checkinReservationCode, setCheckinReservationCode] = useState<string>(String(localStorage.getItem("checkinReservationCode")));
  const [checkinTicket, setCheckinTicket] = useState<string>(String(localStorage.getItem("checkinTicket")));
  const [checkinOption, setCheckinOption] = useState<string>(String(localStorage.getItem("checkinOption")));

  useEffect(() => {
    localStorage.setItem('manageBookingReservationCode', manageBookingReservationCode);
    localStorage.setItem('checkinReservationCode', checkinReservationCode);
    localStorage.setItem('checkinTicket', checkinTicket);
    localStorage.setItem('checkinOption', checkinOption);
  }, [manageBookingReservationCode, checkinReservationCode, checkinTicket, checkinOption]);

  return (
    <FlightContext.Provider
      value={{
        manageBookingReservationCode, 
        setManageBookingReservationCode, 
        checkinReservationCode, 
        setCheckinReservationCode, 
        checkinTicket,
        setCheckinTicket, 
        checkinOption, 
        setCheckinOption
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlightContext must be used within a FlightProvider");
  }
  return context;
};
