export type Ticket = {
    aircraft: string;
    fromIATA: string;
    toIATA: string;
    fromAirportName: string;
    toAirportName: string;
    fromTime: Date;
    toTime: Date;
    economyPrice: number;
    businessPrice: number;
};