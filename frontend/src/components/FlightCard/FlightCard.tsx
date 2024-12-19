import React from 'react';
import './FlightCard.css';
import { FlightPreviewType } from '../../object/flightPreview';

type FlightCardProps = {
  flight: FlightPreviewType;
  image: string;
};

const FlightCard: React.FC<FlightCardProps> = ({ flight, image }) => {
  const departureDate = new Date(flight.departureTime);

  const formattedDate = departureDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = departureDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flight-card-container">
      <img src={image} alt={`Flight to ${flight.toAirport.city.name}`} />
      <div className="flight-info">
        <p className="city-name">
          {flight.fromAirport.city.name} <br /> to {flight.toAirport.city.name}
        </p>
        <p className="depart">
          Departure Time: <br/> {formattedDate}, {formattedTime}
        </p>
        <p className="price">
          From: {flight.minimumPrice.toLocaleString()} VND
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
