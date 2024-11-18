import React from 'react';
import './FlightCard.css';

type FlightCardProps = {
  country: string;
  departure: string;
  destination: string;
  price: number;
  image: string;
};

const FlightCard: React.FC<FlightCardProps> = ({country, departure, destination, price, image }) => {
  return (
    <div className="flight-card-container">
      <img src={image} alt={`Flight to ${destination}`} />
      <div className="flight-info">
        <p className="country-name">{country}Country</p>
        <p className="city-name">From {departure} <br/> to {destination}</p>
        <p className="price">from ${price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default FlightCard;
