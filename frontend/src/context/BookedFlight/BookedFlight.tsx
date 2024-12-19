import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BookedTicket } from '../../object/ticket/ticket';

type BookedTicketContextType = {
  bookedTickets: BookedTicket[];
  addBookedTicket: (ticket: BookedTicket) => void;
};

const BookedTicketContext = createContext<BookedTicketContextType | undefined>(undefined);

export const BookedTicketProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookedTickets, setBookedTickets] = useState<BookedTicket[]>([]);

  const addBookedTicket = (ticket: BookedTicket) => {
    setBookedTickets((prevTickets) => [...prevTickets, ticket]);
  };

  return (  
    <BookedTicketContext.Provider value={{ bookedTickets, addBookedTicket }}>
      {children}
    </BookedTicketContext.Provider>
  );
};

export const useBookedTicket = () => {
  const context = useContext(BookedTicketContext);
  if (!context) {
    throw new Error('useBookedTicket must be used within a BookedTicketProvider');
  }
  return context;
};
