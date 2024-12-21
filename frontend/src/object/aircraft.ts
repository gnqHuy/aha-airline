import { AircraftStatus } from "./enum/AircraftStatus";

export interface Aircraft {
    name: string;
    manufacturer: string;
    noOfSeats: number;
    status: AircraftStatus;
    terminal: string;
  }