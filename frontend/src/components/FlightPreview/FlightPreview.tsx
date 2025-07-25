import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiWorld } from "react-icons/gi";
import SearchFlight from '../SearchFlight/SearchFlight';
import { getFlightPreview } from '../../api/flightAPI';
import { useFlightContext } from '../../context/FlightContext/FlightContext';
import { selectSearchFlightState } from '../../redux/selector/searchFlightStateSelector';
import { setSearchFlightState } from '../../redux/slice/searchFlightStateSlice';

import type { Airport } from '../../object/airport';
import type { FlightPreviewType } from '../../object/flightPreview';
import './FlightPreview.css';
import FlightCarouselSwiper from '../FlightCarouselSwiper/FlightCarouselSwiper';

type Props = {};

const FlightPreview: React.FC<Props> = () => {
  const [flights, setFlights] = useState<FlightPreviewType[]>([]);
  const [departureCity, setDepartureCity] = useState('Hanoi');
  const [isDepartureListOpen, setIsDepartureListOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightPreviewType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const searchFlightState = useSelector(selectSearchFlightState);
  const { airports } = useFlightContext();
  const departureListRef = useRef<HTMLDivElement>(null);

  // Fetch flights from API
  const fetchData = async (params: Object) => {
    try {
      const response = await getFlightPreview(params);
      setFlights(response.data);
    } catch (err) {
      setError('Failed to load flight route data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ FromAirportIATA: "HAN" });
  }, []);

  // Dropdown outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (departureListRef.current && !departureListRef.current.contains(event.target as Node)) {
        setIsDepartureListOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectedFlight = (flight: FlightPreviewType) => {
    setSelectedFlight(flight);
    dispatch(setSearchFlightState(!searchFlightState));
  };

  const toggleDepartureList = () => setIsDepartureListOpen((prev) => !prev);

  const handleSelectedCity = (airport: Airport) => {
    setDepartureCity(airport.city.name);
    setIsDepartureListOpen(false);
    fetchData({ FromAirportIATA: airport.iata });
  };

  const filteredAirport = airports.filter((airport) =>
    airport.city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const dropdownMenu = isDepartureListOpen && (
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-left bg-white border border-gray-300 rounded-lg w-auto max-h-96 overflow-y-auto shadow-lg z-10 p-2"
      ref={departureListRef}
    >
      <div className="flex items-center gap-2 p-2 text-base font-semibold text-gray-700">
        <GiWorld /> All locations
      </div>
      <div className="h-px w-full bg-ahaAmber-2 mb-2"></div>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-64 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-ahaAmber-3"
      />
      <div className="border-t-[1.5px] border-[#d4a422] mt-2">
        {filteredAirport.map((airport) => (
          <div
            key={airport.iata}
            className="p-2 cursor-pointer hover:bg-gray-100 rounded text-ahaAmber-3 font-semibold text-xl"
            onClick={() => handleSelectedCity(airport)}
          >
            <b>{airport.city.name}, </b>{airport.city.country}
            <br />
            <span className="text-sm text-gray-600">{airport.name} ({airport.iata})</span>
          </div>
        ))}
      </div>
    </div>
  );


  if (loading) return <div className='mx-auto text-xl text-center my-40'>Loading...</div>;
  if (error) return <div className="mx-auto text-xl text-center my-40 text-red-600">Error: {error}</div>;

  return (
    <div className="w-[70vw] max-w-[1700px] mx-auto text-center items-center">
      <div className="h-px w-full bg-ahaAmber-2 mb-10"></div>

      {/* Header */}
      <div className="relative">
        <div className="flex text-white items-center gap-2 text-[38px] font-semibold leading-tight mb-5">
          Popular flights from{' '}
          <div className="relative inline-block">
            <div
              className="font-bold cursor-pointer text-ahaAmber-3 underline flex items-center gap-1 hover:text-white"
              onClick={toggleDepartureList}
            >
              {departureCity}
            </div>
            {dropdownMenu}
          </div>
        </div>
        <div className="flex text-white text-xl">Let us inspire your next trip</div>
      </div>

      {/* Carousel */}
      {flights.length > 0 ? (
        <FlightCarouselSwiper
          flights={flights}
          onSelect={handleSelectedFlight}
        />

      ) : (
        <p>No destinations available for <b>{departureCity}</b>.</p>
      )}

      {/* SearchFlight */}
      {searchFlightState && selectedFlight && (
        <div>
          <SearchFlight flightPreview={selectedFlight} />
        </div>
      )}

      <div className="h-px w-full bg-ahaAmber-2 mt-10"></div>
    </div>
  );
};

export default FlightPreview;
