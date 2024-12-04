import React, { createContext, useContext, useState } from "react";
import { Ticket } from "../../object/ticket/ticket";

type TicketContextType = {
  selectedTicket: Ticket | null;
  setSelectedTicket: (Ticket: Ticket) => void;
};

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);

  return (
    <TicketContext.Provider value={{ selectedTicket, setSelectedTicket }}>
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
