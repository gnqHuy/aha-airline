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
  economyPrice: number,
  businessPrice: number,
  status: FlightStatus,
}