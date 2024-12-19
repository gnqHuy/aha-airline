import { Airport } from "./airport";

export interface FlightPreviewType {
    fromAirport: Airport;
    toAirport: Airport;
    departureTime: string; 
    minimumPrice: number;
  }