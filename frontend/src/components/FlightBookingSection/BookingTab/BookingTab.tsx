import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { setPassengers } from '../../../store/slice/passengerSlice';
import { useBookingState } from '../../../store/hooks/useBookingState';

import { FaArrowRight } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import BookingFlightSuggestion from './FlightSuggestion/BookingFlightSuggestion';
import BookingFlightSuggestionTo from './FlightSuggestion/BookingFlightSuggestionTo';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import PassengerInfo from './PassengerInfo/PassengerInfo';

import FloatingInput from './Input/FloatingInput';
import FloatingSelect from './Input/FloatingSelect';
import { useBookingTicket } from '../../../store/hooks/useBookingTicket';

const BookingTab = () => {
  const {
    passengerQuantities,
    selectedAirports,
    selectedDates,
    suggestAirports,
    suggestAirportsTo,
    handleDisplayToggle,
    resetAllDisplays,
    handleAirportSelect,
    handleAirportSearch,
    handleDateSelect,
    handlePassengerQuantity,
    displayStates,
    inputAirports,
    setInputAirports,
  } = useBookingState();

  const { setIsRoundTrip, setReturnDate, setSelectedPassengers, setSelectedFlightPreview } = useBookingTicket();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [flightOption, setFlightOption] = useState('roundTrip');

  // focus states
  const [fromFocused, setFromFocused] = useState(false);
  const [toFocused, setToFocused] = useState(false);
  const [departFocused, setDepartFocused] = useState(false);
  const [returnFocused, setReturnFocused] = useState(false);
  const [passengerFocused, setPassengerFocused] = useState(false);
  const [flightTypeFocused, setFlightTypeFocused] = useState(false);

  const suggestionRefs = {
    suggestion: useRef<HTMLDivElement>(null),
    suggestionTo: useRef<HTMLDivElement>(null),
    calendarDepart: useRef<HTMLDivElement>(null),
    calendarReturn: useRef<HTMLDivElement>(null),
    passengerInfo: useRef<HTMLDivElement>(null),
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      Object.entries(suggestionRefs).forEach(([key, ref]) => {
        if (displayStates[key as keyof typeof displayStates] && ref.current && !ref.current.contains(target)) {
          handleDisplayToggle(key as keyof typeof displayStates);
        }
      });
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [displayStates]);


  const handleSetupFlightOption = (option: string) => {
    setFlightOption(option);
    resetAllDisplays();
  };

  const handleDayClick = (date: Date, type: 'depart' | 'return') => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());
    handleDateSelect(`${day}/${month}/${year}`, type);
    handleDisplayToggle(type === 'depart' ? 'calendarDepart' : 'calendarReturn');
  };

  function parseAirportInfo(input: string) {
    const parts = input.split(/ \(|\), /);
    if (parts.length < 3) return { iata: '', cityName: '', country: '' };
    return {
      cityName: parts[0].trim(),
      iata: parts[1].trim(),
      country: parts[2].trim(),
    };
  }

  function convertToISO(dateString: string, time: string): string {
    const [day, month, year] = dateString.split('/').map(Number);
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${time}`;
  }

  const handleFindFlightClick = () => {
    try {
      if (!selectedAirports.from || !selectedAirports.to || !selectedDates.depart || (flightOption === 'roundTrip' && !selectedDates.return)) {
        toast.error('Vui lòng điền đầy đủ các trường bắt buộc.', { position: 'top-right' });
        return;
      }

      toast.success('Đang tìm chuyến bay phù hợp...', { position: 'top-right' });

      const fromInput = parseAirportInfo(selectedAirports.from);
      const toInput = parseAirportInfo(selectedAirports.to);
      const departureTime = convertToISO(selectedDates.depart, '00:00:01');

      if (flightOption === 'roundTrip') {
        setIsRoundTrip(true);
        setReturnDate(convertToISO(selectedDates.return, '00:00:01'));
      } else {
        setIsRoundTrip(true);
        setReturnDate('');
      }

      const flightPreview = {
        fromAirport: {
          iata: fromInput.iata,
          name: '',
          city: { name: fromInput.cityName, country: fromInput.country, imageUrl: '' },
        },
        toAirport: {
          iata: toInput.iata,
          name: '',
          city: { name: toInput.cityName, country: toInput.country, imageUrl: '' },
        },
        departureTime,
        minimumPrice: 0,
      };

      setSelectedFlightPreview(flightPreview);
      setSelectedPassengers({
        adults: passengerQuantities.adult,
        children: passengerQuantities.children,
        infants: passengerQuantities.infant,
      });

      navigate('ticket');
    } catch (error) {
      enqueueSnackbar('Có lỗi xảy ra, vui lòng kiểm tra lại thông tin.', { variant: 'error' });
      console.error(error);
    }
  };

  const renderCalendar = (type: 'depart' | 'return') => (
    <div ref={
        type === 'depart'
          ? suggestionRefs.calendarDepart
          : type === 'return'
            ? suggestionRefs.calendarReturn
            : null
      } className="absolute left-[-5%] top-full mt-2 z-50 bg-white shadow-lg rounded border border-gray-200 text-center">
      <Calendar
        locale="en-US"
        onClickDay={(date) => handleDayClick(date, type)}
        className="w-full h-full border-none"
        tileClassName={() => 'font-bold h-[2.45rem]'}
        navigationLabel={({ label }) => <span className="text-[#ebc94e]">{label}</span>}
        prevLabel={<span className="text-white">‹</span>}
        nextLabel={<span className="text-white">›</span>}
      />
    </div>
  );

  return (
    <div className="flex justify-center">
      <div className="z-0 max-w-full h-full rounded-xl shadow-lg transition-all duration-300 overflow-visible">
        <div className="flex flex-col gap-4 px-1 py-2">
          {/* FLIGHT TYPE + PASSENGERS */}
          <div className="flex items-center bg-gray-100 px-4 pt-2 pb-1 rounded-2xl gap-4">
            <FloatingSelect
              id="flight-type"
              label="FLIGHT TYPE"
              value={flightOption}
              onChange={(e) => handleSetupFlightOption(e.target.value)}
              isFocused={flightTypeFocused}
              setFocused={setFlightTypeFocused}
              options={[
                { value: 'roundTrip', label: 'Round trip' },
                { value: 'oneWay', label: 'One way' },
              ]}
            />

            <div className="text-ahaAmber-2 text-2xl">
              {flightOption === 'roundTrip' ? <FaArrowRightArrowLeft /> : <FaArrowRight />}
            </div>

            <div className="relative w-full  min-w-0">
              <FloatingInput
                id="passengers"
                label="PASSENGERS"
                value={`${passengerQuantities.adult + passengerQuantities.children + passengerQuantities.infant} Passenger(s)`}
                isFocused={passengerFocused}
                setFocused={setPassengerFocused}
                onClick={() => handleDisplayToggle('passengerInfo')}
                readOnly
              />
              {displayStates.passengerInfo && (
                <PassengerInfo
                  handleIncreaseAdultPassenger={() => handlePassengerQuantity('adult', 'increase')}
                  handleDecreaseAdultPassenger={() => handlePassengerQuantity('adult', 'decrease')}
                  handleIncreaseChildrenPassenger={() => handlePassengerQuantity('children', 'increase')}
                  handleDecreaseChildrenPassenger={() => handlePassengerQuantity('children', 'decrease')}
                  handleIncreaseInfantPassenger={() => handlePassengerQuantity('infant', 'increase')}
                  handleDecreaseInfantPassenger={() => handlePassengerQuantity('infant', 'decrease')}
                  adultPassengerQuantity={passengerQuantities.adult}
                  childrenPassengerQuantity={passengerQuantities.children}
                  infantPassengerQuantity={passengerQuantities.infant}
                />
              )}
            </div>
          </div>

          {/* FROM - TO */}
          <div className="flex items-center bg-gray-100 px-4 pt-2 pb-1 rounded-2xl gap-4 relative">
            <FloatingInput
              id="from"
              label="DEPARTURE"
              value={fromFocused ? inputAirports.from : selectedAirports.from}
              onChange={(e) => {
                const val = e.target.value;
                setInputAirports((prev) => ({ ...prev, from: val }));
                handleAirportSearch(val, 'from');
              }}
              isFocused={fromFocused}
              setFocused={setFromFocused}
              onClick={() => handleDisplayToggle('suggestion')}
            />
            <div className="text-ahaAmber-2 text-2xl">
              {flightOption === 'roundTrip' ? <FaArrowRightArrowLeft /> : <FaArrowRight />}
            </div>
            <FloatingInput
              id="to"
              label="DESTINATION"
              value={toFocused ? inputAirports.to : selectedAirports.to}
              onChange={(e) => {
                const val = e.target.value;
                setInputAirports((prev) => ({ ...prev, to: val }));
                handleAirportSearch(val, 'to');
              }}
              isFocused={toFocused}
              setFocused={setToFocused}
              onClick={() => handleDisplayToggle('suggestionTo')}
            />
          </div>

          {displayStates.suggestion && (
            <div className='absolute top-[60%] left-[5%] w-[50%] z-50' ref={suggestionRefs.suggestion}>
              <BookingFlightSuggestion
                suggestAirports={suggestAirports}
                handleSetupSelectedAirport={(airport) => handleAirportSelect(airport, 'from')}
                handleSetupDisplaySuggestion={() => handleDisplayToggle('suggestion')}
              />
            </div>
          )}
          {displayStates.suggestionTo && (
            <div className='absolute top-[60%] left-[50%] w-[50%] z-50' ref={suggestionRefs.suggestionTo}>
              <BookingFlightSuggestionTo
                suggestAirportsTo={suggestAirportsTo}
                handleSetupSelectedAirportTo={(airport) => handleAirportSelect(airport, 'to')}
                handleSetupDisplaySuggestionTo={() => handleDisplayToggle('suggestionTo')}
              />
            </div>
          )}
  
          {/* DEPART / RETURN */}
          <div className="flex items-center bg-gray-100 px-4 pt-2 pb-1 rounded-2xl gap-4">
            <div className="relative min-w-0">
              <FloatingInput
                id="depart"
                label="DEPARTURE DATE"
                value={selectedDates.depart}
                isFocused={departFocused}
                setFocused={setDepartFocused}
                onClick={() => handleDisplayToggle('calendarDepart')}
                readOnly
              />
              {displayStates.calendarDepart && renderCalendar('depart')}
            </div>

            <div className="text-ahaAmber-2 text-2xl">
              {flightOption === 'roundTrip' && <FaArrowRightArrowLeft />}
            </div>

            {flightOption === 'roundTrip' && (
              <div className="relative  min-w-0">
                <FloatingInput
                  id="return"
                  label="RETURN DATE"
                  value={selectedDates.return}
                  isFocused={returnFocused}
                  setFocused={setReturnFocused}
                  onClick={() => handleDisplayToggle('calendarReturn')}
                  readOnly
                />
                {displayStates.calendarReturn && renderCalendar('return')}
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={handleFindFlightClick}
              className="hover:bg-slate-50 hover:text-ahaAmber-2  hover:border-ahaAmber-2 text-sm bg-ahaAmber-3 text-white border-none px-5 py-2 mb-3 mt-1 rounded-full font-bold"
            >
              Find Experiences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingTab;