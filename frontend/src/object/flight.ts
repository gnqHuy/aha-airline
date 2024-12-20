import { Aircraft } from "./aircraft";
import { FlightRoute } from "./flightRoute";

export enum FlightStatus
{
    Upcomming,
    Boarding,
    Departed,
    Delayed,
    Cancelled
}

export interface Flight {
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