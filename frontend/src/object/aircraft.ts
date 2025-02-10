import { AircraftStatus } from "./enum/AircraftStatus";

export interface Aircraft {
    name: string;
    model: string;
    manufacturer: string;
    noOfSeats: number;
    status: AircraftStatus;
    availableAt: any;
    terminal: string;
  }