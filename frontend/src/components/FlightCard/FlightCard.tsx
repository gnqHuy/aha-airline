import React from 'react';
import { FlightPreviewType } from '../../object/flightPreview';

type FlightCardProps = {
  flight: FlightPreviewType;
  image: string;
};

const FlightCard: React.FC<FlightCardProps> = ({ flight, image }) => {
  // Date formatting logic
  const formatFlightDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // Price conversion utility
  const convertToUSD = (vndPrice: number): number => {
    return Math.round(vndPrice / 24000);
  };

  const formattedDate = formatFlightDate(flight.departureTime);
  const usdPrice = convertToUSD(flight.minimumPrice);

  return (
    <article 
      className="group w-[430px] h-[320px] rounded-3xl overflow-hidden shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
      role="button"
      tabIndex={0}
      aria-label={`Flight from ${flight.fromAirport.city.name} to ${flight.toAirport.city.name}`}
    >
      <div className="flex h-full w-full flex-col bg-gradient-to-t from-black/70 via-black/20 to-transparent text-left">     
        <header className="p-4">
          <span className="inline-block rounded-lg bg-black/40 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Round trip - Economy
          </span>
        </header>
        
        <div className="flex-grow"></div>
        
        <main className="px-6 py-4 text-white">
          <div className='flex items-baseline gap-3 h-14'>
            <h2 className="text-2xl font-bold">
              {flight.toAirport.city.name}
            </h2>
            
            <p className="text-xl text-white/80">
              From {flight.fromAirport.city.name}
            </p>
          </div>
          <div className='flex items-baseline gap-3'>
            <div className="mb-2 flex items-baseline gap-2">
              <span className="text-lg font-bold">
                From {flight.minimumPrice.toLocaleString()} VND
              </span>
            </div>
            
            <time 
              className="text-sm text-white/70"
              dateTime={flight.departureTime}
            >
              Departure: {formattedDate}
            </time>
          </div>
        </main>
      </div>
    </article>
  );
};

export default FlightCard;