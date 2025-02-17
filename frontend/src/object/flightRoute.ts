import { Airport } from "./airport";

export interface FlightRoute {
    // id: string,
    fromAirportIATA: string;
    toAirportIATA: string;
    fromAirport: Airport;
    toAirport: Airport;
    noOfFlights: number;
    distance: number;
  }