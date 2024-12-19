import { Airport } from "./airport";

export interface FlightRoute {
    fromAirportIATA: string;
    toAirportIATA: string;
    fromAirport: Airport;
    toAirport: Airport;
    noOfFlights: number;
    distance: number;
  }