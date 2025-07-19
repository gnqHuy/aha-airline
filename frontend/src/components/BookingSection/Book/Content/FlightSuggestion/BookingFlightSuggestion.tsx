import AirplaneIcon from '../../../../../assets-test/Images/airplaneIcon.png';

import React from 'react';

interface Props {
    suggestAirports: any;
    handleSetupSelectedAirport: (airport: string) => void;
    handleSetupDisplaySuggestion: () => void;
}

const BookingFlightSuggestion: React.FC<Props> = ({
  suggestAirports,
  handleSetupSelectedAirport,
  handleSetupDisplaySuggestion,
}) => {
  return (
    <div
      className="absolute bottom-0 z-50 w-[28rem] h-[30.45rem] overflow-y-scroll overflow-x-hidden bg-white shadow-md rounded-md setting-scrollbar"
    >
      <div className="px-2">
        {suggestAirports.map((airport: any, index: number) => (
          <div
            key={index}
            className="relative w-full h-10 border-b border-gray-300 hover:bg-gray-100 cursor-pointer px-2 py-1"
            onClick={() => {
              handleSetupSelectedAirport(
                `${airport.city.name} (${airport.iata}), ${airport.city.country}`
              );
              handleSetupDisplaySuggestion();
            }}
          >
            <p className="text-[#1A4532] font-bold text-[18px]">
              {`${airport.city.name}, ${airport.city.country}`}
            </p>
            <p className="text-gray-500 font-bold text-[13px] -mt-2">
              {`${airport.name} Airport`}
            </p>
            <img
              src={AirplaneIcon}
              alt=""
              className="w-10 h-10 absolute right-32 -top-1"
            />
            <div className="absolute right-18 top-0 bg-[#1A4532] rounded text-center w-12 h-6 flex items-center justify-center">
              <p className="text-[#ebc94e] font-bold text-[16px]">
                {airport.iata}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingFlightSuggestion;
