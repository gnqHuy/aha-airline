import React, { useEffect, useState, useRef } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlane } from 'react-icons/fa';
import flightsJson from '../../assets-test/Json/flights.json';
import { GiWorld } from 'react-icons/gi';
import { useFlightContext } from '../../context/FlightContext/FlightContext';
import { useNavigate } from 'react-router-dom';
import { useSearchFlightState } from '../../context/SearchFlightState/SearchFlightState';
import SearchFlight from '../SearchFlight/SearchFlight';

type Flight = {
  from: string;
  to: string;
  day: string;
  ticketType: string;
  price: string;
};

type City = {
  name: string;
  country: string;
  airport: string;
};

type FlightTableProps = {
  nameCity: string;
};

const cities: City[] = [
    {name: 'Hanoi', country: 'Vietnam', airport: 'Noi Bai International Airport' },
    {name: 'Beijing', country: 'China', airport: 'Beijing Capital International Airport' },
    {name: 'Paris', country: 'France', airport: 'Charles de Gaulle Airport' },
    {name: 'Istanbul', country: 'Turkey', airport: 'Istanbul Airport' },
    {name: 'San Francisco', country: 'United States', airport: 'San Francisco International Airport' },
    {name: 'Seoul', country: 'South Korea', airport: 'Incheon International Airport' },
    {name: 'Tokyo', country: 'Japan', airport: 'Narita International Airport' }
  ];

const FlightTable: React.FC<FlightTableProps> = ({ nameCity }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>([]);
  const [fromValue, setFromValue] = useState('');
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [fromFocused, setFromFocused] = useState(false);
  const [budgetValue, setBudgetValue] = useState('');
  const [budgetFocused, setBudgetFocused] = useState(false);

  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const {searchFlightState, setSearchFlightState} = useSearchFlightState();

  const handleSelectedFlight = (flight: Flight) => {
    setSelectedFlight(flight);
    setSearchFlightState(true);
  };

  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFlights(flightsJson);
  }, []);

  useEffect(() => {
    const sanitizedCity = nameCity.replace(/\s+/g, '');
    const maxBudget = parseFloat(budgetValue) || Infinity;
  
    const filtered = flights.filter((flight) => {
      const price = parseFloat(flight.price.replace(/[^0-9.]/g, ''));
      const isToMatch = flight.to.toLowerCase().replace(/\s+/g, '').includes(sanitizedCity.toLowerCase());
      const isFromMatch = fromValue ? flight.from.toLowerCase().includes(fromValue.toLowerCase()) : true;
      const isWithinBudget = price <= maxBudget;
  
      return isToMatch && isFromMatch && isWithinBudget;
    });
  
    setFilteredFlights(filtered);
  }, [flights, nameCity, budgetValue, fromValue]);
  

  useEffect(() => {
    if (fromValue || fromFocused) {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(fromValue.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [fromValue, fromFocused]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setFromFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city: string) => {
    setFromValue(city);
    setFromFocused(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto text-center p-4">
      <h2 className="text-2xl text-golden font-semibold mb-6">Best Flight Tickets to {nameCity}</h2>
      <div className="flex text-left justify-between gap-4">
        <div className="relative flex items-center shadow-sm bg-gray-100 w-2/3 pt-2 pl-4">
          <div className="relative flex flex-col w-full">
            <input
              type="text"
              id="from-input"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              onFocus={() => setFromFocused(true)}
              placeholder=" "
              autoComplete="off"
              className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1"
            />
            <label
              htmlFor="from-input"
              className={`absolute left-0 ${
                fromValue || fromFocused
                  ? 'top-1 text-sm text-golden font-semibold mt-1'
                  : 'top-5 text-base text-golden'
              } transform -translate-y-1/2 transition-all`}
            >
              FROM
            </label>
            {fromFocused && filteredCities.length > 0 && (
              <div
                ref={suggestionsRef}
                className="absolute top-full left-0 w-full bg-white shadow-md max-h-48 overflow-y-auto border border-gray-200 z-10"
              >
                <div className="px-4 py-2 text-base flex items-center gap-1">
                    <GiWorld /> All locations
                </div>
                {filteredCities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => handleCitySelect(city.name)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <span className="font-semibold">{city.name}</span>, {city.country} <br/>
                    <span style={{ fontSize: 'small' }}>{city.airport}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-golden text-2xl mx-5">
            <FaPlane />
          </div>
          <div className="relative flex flex-col w-full">
            <div
              id="to-input"
              className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1"
            >
              {nameCity}
            </div>
            <label
              htmlFor="to-input"
              className="absolute left-0 top-1 text-sm text-golden font-semibold mt-1 transform -translate-y-1/2 transition-all pointer-events-none"
            >
              TO
            </label>
          </div>
        </div>

        <div className="flex items-center border rounded-md shadow-sm bg-gray-100 w-1/3 pt-2 pl-4">
          <div className="relative flex flex-col w-full">
            <input
              type="number"
              id="budget-input"
              value={budgetValue}
              onChange={(e) => setBudgetValue(e.target.value)}
              onFocus={() => setBudgetFocused(true)}
              onBlur={() => setBudgetFocused(false)}
              placeholder=" "
              className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1"
            />
            <label
              htmlFor="budget-input"
              className={`absolute left-0 ${
                budgetValue || budgetFocused
                  ? 'top-1 text-sm text-golden font-semibold mt-1'
                  : 'top-5 text-base text-golden'
              } transform -translate-y-1/2 transition-all`}
            >
              INPUT MAX BUDGET
            </label>
          </div>

          <div className="ml-2">
            <select className="bg-transparent border-none text-gray-700 text-lg font-medium focus:outline-none">
              <option>VND</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </div>
      </div>

      <table className="min-w-full mt-4 text-left border-collapse">
        <thead className="bg-Green text-golden text-[17px]">
          <tr>
            <th className="border-b-2 border-golden p-3">From</th>
            <th className="border-b-2 border-golden p-3">To</th>
            <th className="border-b-2 border-golden p-3">Day</th>
            <th className="border-b-2 border-golden p-3">Ticket Type</th>
            <th className="border-b-2 border-golden p-3">Price</th>
          </tr>
        </thead>
        <tbody>
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight, index) => (
            <tr
              key={index}
              className="even:bg-gray-100 hover:bg-golden-hover cursor-pointer"
              onClick={() => handleSelectedFlight(flight)}
            >
              <td className="p-3">{flight.from}</td>
              <td className="p-3">{flight.to}</td>
              <td className="p-3">{flight.day}</td>
              <td className="p-3">{flight.ticketType}</td>
              <td className="flex items-center justify-between p-4">
                <span>{flight.price}</span>
                <IoIosArrowForward
                  className="text-golden cursor-pointer transition-transform transform hover:scale-110"
                  size={22}
                  title="View details"
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center py-4 text-gray-500">
              No flights match your criteria.
            </td>
          </tr>
        )}
      </tbody>

      </table>
      <button className="mt-6 px-6 py-2 bg-Green text-golden cursor-pointer font-semibold rounded-md transition">
        View more
      </button>
      {searchFlightState && selectedFlight && (
          <div>
            <SearchFlight flight={selectedFlight} />
          </div>
        )}
    </div>
  );
};

export default FlightTable;
