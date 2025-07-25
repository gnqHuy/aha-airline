// hooks/useBookingState.ts
import { useState, useEffect } from 'react';
import { useFlightContext } from '../context/FlightContext/FlightContext';
import { getAllAircrafts } from '../api/aircraftAPI';


export const useBookingState = () => {
  // Display states
  const [activeDisplay, setActiveDisplay] = useState<string | null>(null);

  const [inputAirports, setInputAirports] = useState({ from: '', to: '' });
  
  // Passenger quantities
  const [passengerQuantities, setPassengerQuantities] = useState({
    adult: 1,
    children: 0,
    infant: 0
  });

  // Airport selection
  const { airports } = useFlightContext();
  const [suggestAirports, setSuggestAirports] = useState<any[]>(airports);
  const [suggestAirportsTo, setSuggestAirportsTo] = useState<any[]>([]);
  const [selectedAirports, setSelectedAirports] = useState({
    from: '',
    to: ''
  });

  // Date selection
  const [selectedDates, setSelectedDates] = useState({
    depart: '',
    return: ''
  });

  useEffect(() => {
    getAllAircrafts().then(() => {});
  }, []);

  const convertToDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month, day);
  };

  // Display handlers
  const handleDisplayToggle = (displayType: string) => {
    setActiveDisplay(activeDisplay === displayType ? null : displayType);
    
    if (displayType === 'suggestion') {
      setSuggestAirports(airports.filter(airport => 
        airport.city.name !== selectedAirports.to.split(' ')[0]
      ));
    } else if (displayType === 'suggestionTo') {
      setSuggestAirportsTo(airports.filter(airport => 
        airport.city.name !== selectedAirports.from.split(' ')[0]
      ));
    }
  };

  const resetAllDisplays = () => setActiveDisplay(null);

  // Airport handlers
  const handleAirportSearch = (airport: string, type: 'from' | 'to') => {
    const searchItem = airport.toLowerCase();
    const excludeCity = type === 'from' ? selectedAirports.to : selectedAirports.from;
    const filtered = airports.filter(
      a => a.city.name !== excludeCity.split(' ')[0] && 
           a.city.name.toLowerCase().includes(searchItem)
    );
    
    if (type === 'from') {
      setSuggestAirports(filtered);
    } else {
      setSuggestAirportsTo(filtered);
    }
  };

  const handleAirportSelect = (airport: string, type: 'from' | 'to') => {
    setSelectedAirports(prev => ({ ...prev, [type]: airport }));
  };

  // Date handlers
  const handleDateSelect = (date: string, type: 'depart' | 'return') => {
    console.log(date, type);
    setSelectedDates(prev => ({ ...prev, [type]: date }));
    const today = new Date();
    const newDate = convertToDate(date);
    const otherDate = convertToDate(
      type === 'depart' ? selectedDates.return : selectedDates.depart
    );
    const otherDateDefault = type === 'depart' ? 'Return' : 'Depart';
    
    const isValidDate = 
      (type === 'depart' && 
       ((newDate <= otherDate || selectedDates.return === otherDateDefault) && newDate >= today)) ||
      (type === 'return' && 
       ((newDate >= otherDate || selectedDates.depart === otherDateDefault) && newDate >= today));
    console.log(today + " | " + newDate + " | " + otherDate + " | " + otherDateDefault + " | " + isValidDate )
    if (isValidDate) {
      setSelectedDates(prev => ({ ...prev, [type]: date }));
    }
  };

  // Passenger handlers
  const handlePassengerQuantity = (type: 'adult' | 'children' | 'infant', action: 'increase' | 'decrease') => {
    setPassengerQuantities(prev => {
      const newValue = action === 'increase' ? prev[type] + 1 : prev[type] - 1;
      const minValue = type === 'adult' ? 1 : 0;
      return { ...prev, [type]: Math.max(minValue, newValue) };
    });
  };

  return {
    // States
    activeDisplay,
    passengerQuantities,
    selectedAirports,
    selectedDates,
    suggestAirports,
    suggestAirportsTo,
    inputAirports,
    
    // Display handlers
    handleDisplayToggle,
    resetAllDisplays,

    setInputAirports,
    
    // Airport handlers
    handleAirportSearch,
    handleAirportSelect,
    
    // Date handlers
    handleDateSelect,
    
    // Passenger handlers
    handlePassengerQuantity,
    
    // Computed values
    displayStates: {
      suggestion: activeDisplay === 'suggestion',
      suggestionTo: activeDisplay === 'suggestionTo',
      calendarDepart: activeDisplay === 'calendarDepart',
      calendarReturn: activeDisplay === 'calendarReturn',
      passengerInfo: activeDisplay === 'passengerInfo'
    }
  };
};