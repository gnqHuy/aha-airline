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

export type BookedTicket = {
    aircraft: string;
    fromIATA: string;
    toIATA: string;
    fromAirportName: string;
    toAirportName: string;
    fromTime: Date;
    toTime: Date;
    classType: 'Economy' | 'Business'; 
    price: number;
    title: 'Mr' | 'Mrs' | 'Ms';
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    email: string;
    phone: string;
  };
  