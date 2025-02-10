import { City } from "./city";

export interface Airport {
    iata: string;
    name: string;
    city: City;
  }