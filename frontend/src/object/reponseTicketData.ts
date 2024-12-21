import { PassengerTitle } from "./enum/PassengerTitle";
import { SeatClass } from "./enum/SeatClass";

export type FlightInfo = {
    id: string;
    aircraft: {
        id: string;
        name: string;
        model: string;
        manufacturer: string;
        noOfSeats: number;
    };
    fromAirport: {
        iata: string;
        name: string;
        city: {
        id: string;
        name: string;
        country: string;
        };
    };
    toAirport: {
        iata: string;
        name: string;
        city: {
        id: string;
        name: string;
        country: string;
        };
    };
    boardingTime: string;
    departureTime: string;
    arrivalTime: string;
    status: number;
    boardingGate: string;
};

export type TicketSummary = {
    ticketCode: string;
    seatId: string;
    seatPosition: string;
    passengerTitle: PassengerTitle;
    firstName: string;
    lastName: string;
    passengerDOB: string;
    status: number; 
    class: SeatClass;
    contactEmail: string;
    phoneNumber: string;
};

export type FlightTicketResponse = {
    isSuccess: boolean;
    message: string;
    reservationCode: string;
    userId: string | null;
    flightInfo: FlightInfo;
    ticketSummaries: TicketSummary[];
};
