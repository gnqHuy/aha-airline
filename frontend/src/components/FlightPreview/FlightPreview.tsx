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
    <div className="flight-preview-container">
      <div className="title">
        Popular flights from{' '}
        <span className="departure-city" onClick={toggleDepartureList}>
          {departureCity}
        </span>
        {isDepartureListOpen && (
          <div className="departureList" ref={departureListRef}>
            <div className="all-location">
              <GiWorld /> All locations
            </div>
            <div style={{ borderTop: '1.5px solid #d4a422' }}>
              {cities.map((city) => (
                <div
                  className="departureList-item"
                  onClick={() => handleSelectedCity(city.name)}
                >
                  <b>{city.name}, </b>{city.country}
                  <br />
                  <span style={{ fontSize: 'small' }}>{city.airport}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flight-card-list">
        {filteredFlights.length > 0 ? (
          filteredFlights.slice(0, visibleCount).map((flight: Flight) => (
            <div onClick={() => handleSelectedFlight(flight)}>
              <FlightCard
                flight={flight}
                image={image1}
              />
            </div>
          ))
        ) : (
          <p>No destinations available for <b>{departureCity}</b>.</p>
        )}
      </div>
      {searchFlightState && selectedFlight && (
          <div>
            <SearchFlight flight={selectedFlight} />
          </div>
        )}

      {filteredFlights.length > visibleCount ? (
        <button className="view-more" onClick={handleViewMore}>
          View More
        </button>
      ) : (
        <button className="view-more" onClick={handleHide}>
          Hide
        </button>
      )}
    </div>
  );
};

export default FlightPreview;
