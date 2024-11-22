import React, { useState, useRef, useEffect } from 'react';
import FlightCard from '../FlightCard/FlightCard';
import './FlightPreview.css';
import { GiWorld } from "react-icons/gi";

import image1 from '../../assets-test/beijing.jpg';
import image2 from '../../assets-test/hanoi.jpg';
import image3 from '../../assets-test/istanbul.webp';
import image4 from '../../assets-test/tokyo.jpg';
import image5 from '../../assets-test/san-francisco.jpg';
import image6 from '../../assets-test/seoul.jpg';
import image7 from '../../assets-test/paris.jpg';

type Props = {};

type Flight = {
  id: number;
  departure: string;
  destination: string;
  price: number;
  image: string;
};

type City = {
  id: number;
  name: string;
  country: string;
  airport: string;
}

const flightData: { [key: string]: Flight[] } = {
  'Hanoi': [
    { id: 1,departure:'Hanoi', destination: 'Bejing', price: 50000, image: image1 },
    { id: 2,departure:'Hanoi', destination: 'Istanbul', price: 120000, image: image3 },
    { id: 3,departure:'Hanoi', destination: 'Tokyo', price: 80000, image: image4 },
    { id: 4,departure:'Hanoi', destination: 'San Francisco', price: 120000, image: image5 },
    { id: 5,departure:'Hanoi', destination: 'Seoul', price: 5000, image: image6 },
    { id: 6,departure:'Hanoi', destination: 'Paris', price: 70000, image: image7 },
    { id: 1,departure:'Hanoi', destination: 'Bejing', price: 50000, image: image1 },
    { id: 2,departure:'Hanoi', destination: 'Istanbul', price: 120000, image: image3 },
    { id: 3,departure:'Hanoi', destination: 'Tokyo', price: 80000, image: image4 },
    { id: 4,departure:'Hanoi', destination: 'San Francisco', price: 120000, image: image5 },  
  ],
  'Paris': [
    { id: 7,departure:'Paris', destination: 'Bejing', price: 50000, image: image1 },
    { id: 8,departure:'Paris', destination: 'Hanoi', price: 70000, image: image2 },
    { id: 9,departure:'Paris', destination: 'Istanbul', price: 120000, image: image3 },
    { id: 10,departure:'Paris', destination: 'Tokyo', price: 80000, image: image4 },
    { id: 11,departure:'Paris', destination: 'San Francisco', price: 120000, image: image5 },
    { id: 12,departure:'Paris', destination: 'Seoul', price: 5000, image: image6 },
    { id: 1,departure:'Hanoi', destination: 'Bejing', price: 50000, image: image1 },
    { id: 2,departure:'Hanoi', destination: 'Istanbul', price: 120000, image: image3 },
    { id: 3,departure:'Hanoi', destination: 'Tokyo', price: 80000, image: image4 },
    { id: 4,departure:'Hanoi', destination: 'San Francisco', price: 120000, image: image5 },
    { id: 5,departure:'Hanoi', destination: 'Seoul', price: 5000, image: image6 },
    { id: 6,departure:'Hanoi', destination: 'Paris', price: 70000, image: image7 },
  ],
};

const cities: City[] = [
  { id: 1, name: 'Hanoi', country: 'Vietnam', airport: 'Noi Bai International Airport' },
  { id: 2, name: 'Beijing', country: 'China', airport: 'Beijing Capital International Airport' },
  { id: 3, name: 'Paris', country: 'France', airport: 'Charles de Gaulle Airport' },
  { id: 4, name: 'Istanbul', country: 'Turkey', airport: 'Istanbul Airport' },
  { id: 5, name: 'San Francisco', country: 'United States', airport: 'San Francisco International Airport' },
  { id: 6, name: 'Seoul', country: 'South Korea', airport: 'Incheon International Airport' },
  { id: 7, name: 'Tokyo', country: 'Japan', airport: 'Narita International Airport' }
];

const FlightPreview = (props: Props) => {
  const [departureCity, setDepartureCity] = useState('Hanoi');
  const [isDepartureListOpen, setIsDepartureListOpen] = useState(false);
  const departureListRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const titleRef = useRef<HTMLDivElement>(null)
  
  const departureListState = () => {
    setIsDepartureListOpen((prev) => !prev);
  };
  
  const handleSelectedCity = (city : string) => {
    setDepartureCity(city);
    setIsDepartureListOpen(false);
  }

  useEffect (() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (departureListRef.current && !departureListRef.current.contains(event.target as Node)) {
        setIsDepartureListOpen(true)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  const flights = flightData[departureCity] || [];

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6);
  } 

  const handleHide = () => {
    titleRef.current?.scrollIntoView({
      behavior: 'smooth', 
      block: 'center',    
    });

    setVisibleCount((prev) => prev - 6);
  } 
  return (
    <div className="flight-preview-container">
      {/* Section title */}
      <div className="title" ref={titleRef}>
        Popular flights from{' '}
        <span className="departure-city" onClick={departureListState}>
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
                  key={city.id}
                  className="departureList-item"
                  onClick={() => handleSelectedCity(city.name)}
                >
                  <b>{city.name}, </b>
                  {city.country}
                  <br />
                  <span style={{ fontSize: 'small' }}>{city.airport}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Flight cards */}
      <div className="flight-card-list">
        {flights.length > 0 ? (
          flights.slice(0, visibleCount).map((flight) => (
            <FlightCard
              key={flight.id}
              country=""
              departure={flight.departure}
              destination={flight.destination}
              price={flight.price}
              image={flight.image}
            />
          ))
        ) : (
          <p>No destinations available for <b>{departureCity}</b>.</p>
        )}
      </div>

      {/* View More / Hide Button */}
      {flights.length > visibleCount ? (
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
