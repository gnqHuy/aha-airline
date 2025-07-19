import React, { useEffect, useState } from 'react';
import { PiWarningCircle } from 'react-icons/pi';
import { IoIosArrowUp, IoMdClose } from 'react-icons/io';
import GenericContent from './GenericContent/GenericContent';
import { useFlightContext } from '../../../../context/FlightContext/FlightContext';
import { getAllAircrafts } from '../../../../api/aircraftAPI';

interface Props {
  sectionTab: string;
  handleChangeTab: (tabName: string) => void;
}

const BookingContent: React.FC<Props> = ({ sectionTab, handleChangeTab }) => {
  const [displaySuggestion, setDisplaySuggestion] = useState(false);
  const [flightOption, setFlightOption] = useState('roundTrip');
  const [displayInformation, setDisplayInformation] = useState(true);
  const [displaySuggestionTo, setDisplaySuggestionTo] = useState(false);
  const [displayCalendarDepart, setDisplayCalendarDepart] = useState(false);
  const [displayCalendarReturn, setDisplayCalendarReturn] = useState(false);
  const [displayPassengerInfo, setDisplayPassengerInfo] = useState(false);

  const [adultPassengerQuantity, setAdultPassengerQuantity] = useState(1);
  const [childrenPassengerQuantity, setChildrenPassengerQuantity] = useState(0);
  const [infantPassengerQuantity, setInfantPassengerQuantity] = useState(0);

  const [searchingAirport, setSearchingAirport] = useState('Accara (ACC), Ghana');
  const [searchingAirportTo, setSearchingAirportTo] = useState('');
  const { airports } = useFlightContext();
  const [suggestAirports, setSuggestAirports] = useState<any[]>(airports);
  const [suggestAirportsTo, setSuggestAirportsTo] = useState<any[]>([]);

  const [selectedAirport, setSelectedAirport] = useState('Accara (ACC), Ghana');
  const [selectedAirportTo, setSelectedAirportTo] = useState('To');
  const [selectedDateDepart, setSelectedDateDepart] = useState('Depart');
  const [selectedDateReturn, setSelectedDateReturn] = useState('Return');

  useEffect(() => {
    getAllAircrafts().then(() => {});
  }, []);

  const convertToDate = (dateString: string) => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month, day);
  };

  const handleSetupDisplaySuggestion = () => {
    setDisplaySuggestion(!displaySuggestion);
    setDisplaySuggestionTo(false);
    setDisplayCalendarDepart(false);
    setDisplayCalendarReturn(false);
    setDisplayPassengerInfo(false);
    setSuggestAirports(airports.filter(airport => airport.city.name !== selectedAirportTo.split(' ')[0]));
  };

  const handleSetupDisplaySuggestionTo = () => {
    setDisplaySuggestionTo(!displaySuggestionTo);
    setDisplaySuggestion(false);
    setDisplayCalendarDepart(false);
    setDisplayCalendarReturn(false);
    setDisplayPassengerInfo(false);
    setSuggestAirportsTo(airports.filter(airport => airport.city.name !== selectedAirport.split(' ')[0]));
  };

  const handleSetupDisplayCalendarDepart = () => {
    setDisplayCalendarDepart(!displayCalendarDepart);
    setDisplaySuggestionTo(false);
    setDisplaySuggestion(false);
    setDisplayCalendarReturn(false);
    setDisplayPassengerInfo(false);
  };

  const handleSetupDisplayCalendarReturn = () => {
    setDisplayCalendarReturn(!displayCalendarReturn);
    setDisplaySuggestionTo(false);
    setDisplaySuggestion(false);
    setDisplayCalendarDepart(false);
    setDisplayPassengerInfo(false);
  };

  const handleSetupDisplayPassengerInfo = () => {
    setDisplayPassengerInfo(!displayPassengerInfo);
    setDisplaySuggestionTo(false);
    setDisplaySuggestion(false);
    setDisplayCalendarDepart(false);
    setDisplayCalendarReturn(false);
  };

  const handleCloseSuggestion = () => {
    setDisplaySuggestion(false);
    setDisplaySuggestionTo(false);
    setDisplayCalendarDepart(false);
    setDisplayCalendarReturn(false);
    setDisplayPassengerInfo(false);
  };

  const handleChangeSearchingAirport = (airport: string) => {
    setSearchingAirport(airport);
    const searchItem = airport.toLowerCase();
    setSuggestAirports(airports.filter(
      a => a.city.name !== selectedAirportTo.split(' ')[0] && a.city.name.toLowerCase().includes(searchItem)
    ));
  };

  const handleChangeSearchingAirportTo = (airport: string) => {
    setSearchingAirportTo(airport);
    const searchItem = airport.toLowerCase();
    setSuggestAirportsTo(airports.filter(
      a => a.city.name !== selectedAirport.split(' ')[0] && a.city.name.toLowerCase().includes(searchItem)
    ));
  };

  const handleSetupSelectedAirport = (airport: string) => setSelectedAirport(airport);
  const handleSetupSelectedAirportTo = (airport: string) => setSelectedAirportTo(airport);
  const handleSetupFlightOption = (option: string) => setFlightOption(option);

  const handleSetupSelectedDateDepart = (date: string) => {
    const today = new Date();
    const convertDateDepart = convertToDate(date);
    const convertDateReturn = convertToDate(selectedDateReturn);
    if ((convertDateDepart <= convertDateReturn || selectedDateReturn === 'Return') && convertDateDepart >= today) {
      setSelectedDateDepart(date);
    }
  };

  const handleSetupSelectedDateReturn = (date: string) => {
    const today = new Date();
    const convertDateDepart = convertToDate(selectedDateDepart);
    const convertDateReturn = convertToDate(date);
    if ((convertDateReturn >= convertDateDepart || selectedDateDepart === 'Depart') && convertDateReturn >= today) {
      setSelectedDateReturn(date);
    }
  };

  return (
    <div className="flex justify-center">
        <div
          className={`z-0 w-full rounded-xl shadow-lg transition-all duration-300 ${
            displayInformation ? '' : 'overflow-hidden'
          }`}
        >
          <GenericContent
            flightOption={flightOption}
            handleSetupFlightOption={handleSetupFlightOption}
            resetAllSuggestion={handleCloseSuggestion}
            handleSetupDisplaySuggestion={handleSetupDisplaySuggestion}
            handleSetupDisplaySuggestionTo={handleSetupDisplaySuggestionTo}
            handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart}
            handleSetupDisplayCalendarReturn={handleSetupDisplayCalendarReturn}
            handleSetupDisplayPassengerInfo={handleSetupDisplayPassengerInfo}
            adultPassengerQuantity={adultPassengerQuantity}
            childrenPassengerQuantity={childrenPassengerQuantity}
            infantPassengerQuantity={infantPassengerQuantity}
            displaySuggestion={displaySuggestion}
            displaySuggestionTo={displaySuggestionTo}
            handleChangeSearchingAirport={handleChangeSearchingAirport}
            handleChangeSearchingAirportTo={handleChangeSearchingAirportTo}
            selectedAirport={selectedAirport}
            selectedAirportTo={selectedAirportTo}
            selectedDateDepart={selectedDateDepart}
            selectedDateReturn={selectedDateReturn}
            suggestAirports={suggestAirports}
            handleSetupSelectedAirport={handleSetupSelectedAirport}
            suggestAirportsTo={suggestAirportsTo}
            handleSetupSelectedAirportTo={handleSetupSelectedAirportTo}
            displayCalendarDepart={displayCalendarDepart}
            handleSetupSelectedDateDepart={handleSetupSelectedDateDepart}
            displayCalendarReturn={displayCalendarReturn}
            handleSetupSelectedDateReturn={handleSetupSelectedDateReturn}
            displayPassengerInfo={displayPassengerInfo}
            handleIncreaseAdultPassenger={() => setAdultPassengerQuantity((prev) => prev + 1)}
            handleDecreaseAdultPassenger={() => setAdultPassengerQuantity((prev) => Math.max(1, prev - 1))}
            handleIncreaseChildrenPassenger={() => setChildrenPassengerQuantity((prev) => prev + 1)}
            handleDecreaseChildrenPassenger={() => setChildrenPassengerQuantity((prev) => Math.max(0, prev - 1))}
            handleIncreaseInfantPassenger={() => setInfantPassengerQuantity((prev) => prev + 1)}
            handleDecreaseInfantPassenger={() => setInfantPassengerQuantity((prev) => Math.max(0, prev - 1))}
          />
        </div>
    </div>
    );

};

export default BookingContent;
