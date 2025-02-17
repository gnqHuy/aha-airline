import React, { useState, useRef, useEffect } from 'react';
import FlightCard from '../FlightCard/FlightCard';
import './FlightPreview.css';
import { GiWorld } from "react-icons/gi";
import SearchFlight from '../SearchFlight/SearchFlight';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { getFlightPreview } from '../../api/flightAPI';
import type { FlightPreviewType } from '../../object/flightPreview';
import { Airport } from '../../object/airport';
import { useFlightContext } from '../../context/FlightContext/FlightContext';
import Spinner from '../Spinner/Spinner';

import image1 from '../../assets-test/Images/cities/hanoi.jpg';
import image2 from '../../assets-test/Images/cities/singapore.jpg';
import image3 from '../../assets-test/Images/cities/seoul.jpg';
import image4 from '../../assets-test/Images/cities/paris.jpg';
import image5 from '../../assets-test/Images/cities/rome.jpg';
import image6 from '../../assets-test/Images/cities/london.jpg';
import image7 from '../../assets-test/Images/cities/cairo.jpg';
import image8 from '../../assets-test/Images/cities/marrakech.jpg';
import image9 from '../../assets-test/Images/cities/newyork.jpg';
import image10 from '../../assets-test/Images/cities/toronto.jpg';
import image11 from '../../assets-test/Images/cities/mexico.jpg';
import image12 from '../../assets-test/Images/cities/sydney.jpg';
import image13 from '../../assets-test/Images/cities/melbourne.jpg';
import image14 from '../../assets-test/Images/cities/istanbul.webp';
import image15 from '../../assets-test/Images/cities/san-francisco.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchFlightState } from '../../redux/selector/searchFlightStateSelector';
import { setSearchFlightState } from '../../redux/slice/searchFlightStateSlice';

const images = [
  image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, 
  image11, image12, image13, image14, image15
];

type Props = {};
const FlightPreview = (props: Props) => {
  const [flights, setFlights] = useState<FlightPreviewType[]>([]);
  const { airports } = useFlightContext();
  const [departureCity, setDepartureCity] = useState('Hanoi');
  const [isDepartureListOpen, setIsDepartureListOpen] = useState(false);
  const departureListRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedFlight, setSelectedFlight] = useState<FlightPreviewType | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const searchFlightState = useSelector(selectSearchFlightState);

  const fetchData = async (getFlight: Object) => {
    try {
      const response = await getFlightPreview(getFlight);
      setFlights(response.data);
    } catch (err) {
      setError('Failed to load flight route data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({
      FromAirportIATA: "HAN",
      // ToAirportIATA: "",
      // PageSize: "",
      // PageNumber: "",
    });
  }, []);

  const handleSelectedFlight = (flight: FlightPreviewType) => {
    setSelectedFlight(flight);
    dispatch(setSearchFlightState(!searchFlightState))
  };

  const toggleDepartureList = () => {
    setIsDepartureListOpen((prev) => !prev);
  };

  const handleSelectedCity = (airport: Airport) => {
    setDepartureCity(airport.city.name);
    setIsDepartureListOpen(false);
    fetchData({
      FromAirportIATA: airport.iata,
      // ToAirportIATA: "",
      // PageSize: 15,
      // PageNumber: 0,
    });
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

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleHide = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredAirport = airports.filter((airport) =>
    airport.city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <div className='mx-auto mt-20'>Loading...</div>;
  if (error) return <div className="mx-auto mt-20 text-red-600">Error: {error}</div>;

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
              <IoIosArrowUp className="text-base" onClick={toggleDepartureList} />
            ) : (
              <IoIosArrowDown className="text-base" onClick={toggleDepartureList} />
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
            <input
              type="text"
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 mt-4 border border-gray-300 rounded-md"
            />
            <div className="border-t-[1.5px] border-[#d4a422] mt-2">
              {filteredAirport.map((airport) => (
                <div
                  className="p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelectedCity(airport)}
                >
                  <b>{airport.city.name}, </b>{airport.city.country}
                  <br />
                  <span className="text-sm">{airport.name} ({airport.iata})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_240px)] justify-center gap-7 mt-6">
        {flights.length > 0 ? (
          flights.slice(0, visibleCount).map((flight, index) => (
            <div onClick={() => handleSelectedFlight(flight)} key={flight.departureTime}>
              <FlightCard 
                flight={flight} 
                image={images[index % images.length]}
              />
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
          <SearchFlight flightPreview={selectedFlight} />
        </div>
      )}

      {flights.length > visibleCount ? (
        <button
          className="mt-5 px-5 py-2 border-none text-base font-bold text-white bg-[#d4a422] rounded-lg hover:text-[#5b4300]"
          onClick={handleViewMore}
        >
          View More
        </button>
      ) : (
        <button
          className="mt-5 px-5 py-2 border-none text-base font-bold text-white bg-[#d4a422] rounded-lg hover:text-[#5b4300]"
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
