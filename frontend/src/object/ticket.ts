import { PassengerTitle } from "./enum/PassengerTitle";
import { SeatClass } from "./enum/SeatClass";

export interface Ticket {
    class: SeatClass;
    passengerTitle: PassengerTitle; 
    firstName: string;
    lastName: string;
    passengerDOB: string;
    contactEmail: string;
    phoneNumber: string;
}
  
export interface FlightTickets {
    flightId: string;
    bookedId: string | null;
    tickets: Ticket[];
}