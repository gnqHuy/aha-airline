import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlightPreview } from '../../api/flightAPI';
import { selectSearchFlightState } from '../../store/selector/searchFlightStateSelector';
import { setSearchFlightState } from '../../store/slice/searchFlightStateSlice';
import { useAirports } from '../../store/hooks/useAirports';
import type { FlightPreviewType } from '../../object/flightPreview';
import type { Airport } from '../../object/airport';

export const useFlightPreview = () => {
  const [flightsPreview, setFlightsPreview] = useState<FlightPreviewType[]>([]);
  const [departureCity, setDepartureCity] = useState('Hanoi');
  const [isDepartureListOpen, setIsDepartureListOpen] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightPreviewType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const searchFlightState = useSelector(selectSearchFlightState);
  const { airports } = useAirports();
  const departureListRef = useRef<HTMLDivElement>(null);

  const fetchData = async (params: Object) => {
    try {
      const response = await getFlightPreview(params);
      setFlightsPreview(response.data);
    } catch (err) {
      setError('Failed to load flight route data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData({ FromAirportIATA: 'HAN' });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        departureListRef.current &&
        !departureListRef.current.contains(event.target as Node)
      ) {
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

  const getFlightPreviewByDestination = (params: object) => {
    fetchData(params);
  }

  const filteredAirport = airports.filter((airport) =>
    airport.city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    flightsPreview,
    departureCity,
    isDepartureListOpen,
    selectedFlight,
    searchQuery,
    error,
    loading,
    searchFlightState,
    filteredAirport,
    departureListRef,
    setSearchQuery,
    toggleDepartureList,
    handleSelectedCity,
    handleSelectedFlight,
    getFlightPreviewByDestination
  };
};
