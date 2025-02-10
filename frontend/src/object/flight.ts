import { Aircraft } from "./aircraft";
import { FlightStatus } from "./enum/FlightStatus";
import { FlightRoute } from "./flightRoute";

export interface Flight {
  id: string,
  aircraft: Aircraft,
  flightRoute: FlightRoute,
  boardingTime: string,
  departureTime: string,
  arrivalTime: string,
  boardingGate: string,
  remainingBsnSeats: number,
  remainingEcoSeats: number,
  economyPrice: number,
  businessPrice: number,
  status: FlightStatus,
}