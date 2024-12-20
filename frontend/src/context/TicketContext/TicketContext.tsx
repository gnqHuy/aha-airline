import React, { createContext, useContext, useState } from "react";
import { Ticket } from "../../object/ticket";

type TicketContextType = {
  selectedTicket: Ticket | null;
  selectedClass: string; 
  setSelectedTicket: (ticket: Ticket) => void;
  setSelectedClass: (classType: string) => void;
};

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [selectedClass, setSelectedClass] = useState<string>("none");

  return (
    <TicketContext.Provider value={{ selectedTicket, selectedClass, setSelectedTicket, setSelectedClass }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return context;
};
