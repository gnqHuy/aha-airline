import React from 'react';
import './FlightCard.css';
import { Flight } from '../../object/flight/flight';

type FlightCardProps = {
  flight: Flight;
  image: string;
};

const FlightCard: React.FC<FlightCardProps> = ({flight, image}) => {
  return (
    <div className="flight-card-container">
      <img src={image} alt={`Flight to ${flight.from}`} />
      <div className="flight-info">
        <p className="city-name">{flight.from} <br/> to {flight.to}</p>
        <p className="depart">Depart: {flight.day}</p>
        <p className="price">{flight.price.toLocaleString()}</p>
        <p className="ticketType">{flight.ticketType}</p>
      </div>
    </div>
  );
};

export default FlightCard;
