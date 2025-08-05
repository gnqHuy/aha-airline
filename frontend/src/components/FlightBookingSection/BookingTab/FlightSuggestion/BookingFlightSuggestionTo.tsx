import React from 'react';

interface Props {
  handleSetupDisplaySuggestionTo: () => void;
  suggestAirportsTo: any;
  handleSetupSelectedAirportTo: (airport: string) => void;
}

const BookingFlightSuggestionTo: React.FC<Props> = ({
  handleSetupDisplaySuggestionTo,
  suggestAirportsTo,
  handleSetupSelectedAirportTo,
}) => {
  return (
    <div className="max-h-80 overflow-y-auto bg-white shadow-xl rounded-lg border border-gray-200 z-50 setting-scrollbar">
      <div className="p-2">
        {suggestAirportsTo.map((airport: any, index: number) => (
          <div
            key={index}
            className="cursor-pointer px-3 py-2 border-b last:border-b-0 hover:bg-gray-100 transition"
            onClick={() => {
              handleSetupSelectedAirportTo(
                `${airport.city.name} (${airport.iata}), ${airport.city.country}`
              );
              handleSetupDisplaySuggestionTo();
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-[#1A4532] font-semibold text-base truncate">
                  {`${airport.city.name}, ${airport.city.country}`}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {`${airport.name} Airport`}
                </p>
              </div>

              <div className="flex items-center gap-2 ml-4">
                <div className="bg-[#1A4532] px-2 py-1 rounded">
                  <p className="text-[#ebc94e] text-sm font-semibold">
                    {airport.iata}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingFlightSuggestionTo;
