import React, { useState, useRef, useEffect } from 'react';
import FlightCard from '../FlightCard/FlightCard';
import './FlightPreview.css';
import { GiWorld } from "react-icons/gi";
import image1 from "../../assets-test/Images/beijing.jpg";
import { Flight } from '../../object/flight/flight';
import SearchFlight from '../SearchFlight/SearchFlight';
import { useSearchFlightState } from '../../context/SearchFlightState/SearchFlightState';
import flights from "../../assets-test/Json/flights.json"
import cities from "../../assets-test/Json/cities.json"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {};

const FlightPreview = (props: Props) => {
  const [departureCity, setDepartureCity] = useState('Hanoi');
  const [isDepartureListOpen, setIsDepartureListOpen] = useState(false);
  const departureListRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const {searchFlightState, setSearchFlightState} = useSearchFlightState();

  const handleSelectedFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setSearchFlightState(true);
  };

  const toggleDepartureList = () => {
    setIsDepartureListOpen((prev) => !prev);
  };

  const handleSelectedCity = (city: string) => {
    setDepartureCity(city);
    setIsDepartureListOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (departureListRef.current && !departureListRef.current.contains(event.target as Node)) {
        setIsDepartureListOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setSearchFlightState]);

  const filteredFlights = flights.filter((flight) =>
    flight.from.includes(departureCity)
  );

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleHide = () => {
    setVisibleCount((prev) => prev - 6);
  };

  return (
    <div className="w-[59vw] mx-auto text-center items-center p-4 mt-24 mb-12">
      <div className="h-px w-full bg-golden mb-5"></div>
      <div className="relative">
        <div className="flex justify-center items-center gap-2 text-xl">
          Popular flights from{' '}
          <div
            className="font-bold cursor-pointer underline flex items-center gap-1 hover:text-[#d4a422]"
          >
            {departureCity}
            {isDepartureListOpen ? (
              <IoIosArrowUp className="text-base" onClick={toggleDepartureList}/>
            ) : (
              <IoIosArrowDown className="text-base" onClick={toggleDepartureList}/>
            )}
          </div>
        </div>
        
        {isDepartureListOpen && (
          <div
            className="absolute left-1/2 -translate-x-1/2 mt-2 text-left bg-white border border-gray-300 rounded-lg w-[90%] max-w-[300px] max-h-80 overflow-y-auto shadow-md z-10 p-2"
            ref={departureListRef}
          >
            <div className="flex items-center gap-2 p-2 text-base">
              <GiWorld /> All locations
            </div>
            <div className="h-px w-full bg-golden"></div>
            <div className="border-t-[1.5px] border-[#d4a422] mt-2">
              {cities.map((city) => (
                <div
                  key={city.name}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectedCity(city.name)}
                >
                  <b>{city.name}, </b>{city.country}
                  <br />
                  <span className="text-sm">{city.airport}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_240px)] justify-center gap-7 mt-6">
        {filteredFlights.length > 0 ? (
          filteredFlights.slice(0, visibleCount).map((flight: Flight) => (
            <div onClick={() => handleSelectedFlight(flight)}>
              <FlightCard flight={flight} image={image1} />
            </div>
          ))
        ) : (
          <p>
            No destinations available for <b>{departureCity}</b>.
          </p>
        )}
      </div>

      {searchFlightState && selectedFlight && (
        <div>
          <SearchFlight flight={selectedFlight} />
        </div>
      )}

      {filteredFlights.length > visibleCount ? (
        <button
          className="mt-5 px-6 py-3 font-bold text-white bg-[#d4a422] rounded-lg hover:text-[#5b4300]"
          onClick={handleViewMore}
        >
          View More
        </button>
      ) : (
        <button
          className="mt-5 px-6 py-3 font-bold text-white bg-[#d4a422] rounded-lg hover:text-[#5b4300]"
          onClick={handleHide}
        >
          Hide
        </button>
      )}
      <div className="h-px w-full bg-golden mt-5"></div>
    </div>

  );
};

export default FlightPreview;
