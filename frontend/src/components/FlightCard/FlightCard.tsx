import React from 'react';
import './FlightCard.css';
import { FlightPreviewType } from '../../object/flightPreview';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Hiệu ứng mờ khi tải ảnh

type FlightCardProps = {
  flight: FlightPreviewType;
  image: string;
};

const FlightCard: React.FC<FlightCardProps> = ({ flight, image }) => {
  const departureDate = new Date(flight.departureTime);

  const formattedDate = departureDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = departureDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="flight-card-container">
      <LazyLoadImage
        src={image}
        alt={`Flight to ${flight.toAirport.city.name}`}
        effect="opacity" 
        placeholderSrc="https://via.placeholder.com/400x250"
        className="flight-image"
      />
      <div className="flight-info">
        <p className="city-name">
          {flight.fromAirport.city.name} <br /> to {flight.toAirport.city.name}
        </p>
        <p className="depart">
          <b>Departure Time:</b> <br /> {formattedDate}
        </p>
        <p className="price">
          From: {flight.minimumPrice.toLocaleString()} VND
        </p>
      </div>
    </div>
  );
};

export default FlightCard;
