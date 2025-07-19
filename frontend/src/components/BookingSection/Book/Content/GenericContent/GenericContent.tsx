import React from 'react'
import BookingContentRoundTrip from '../BookingContentRoundTrip';
import BookingFlightSuggestion from '../FlightSuggestion/BookingFlightSuggestion';
import BookingFlightSuggestionTo from '../FlightSuggestion/BookingFlightSuggestionTo';
import CalendarDepart from '../Calendar/CalendarDepart';
import CalendarReturn from '../Calendar/CalendarReturn';
import PassengerInfo from '../PassengerInfo/PassengerInfo';

interface Props {
  flightOption: string;
  handleSetupFlightOption: (option: string) => void;
  resetAllSuggestion: () => void;
  handleSetupDisplaySuggestion: () => void;
  handleSetupDisplaySuggestionTo: () => void;
  handleSetupDisplayCalendarDepart: () => void;
  handleSetupDisplayCalendarReturn: () => void;
  handleSetupDisplayPassengerInfo: () => void;
  adultPassengerQuantity: number;
  childrenPassengerQuantity: number;
  infantPassengerQuantity: number;
  displaySuggestion: boolean;
  displaySuggestionTo: boolean;
  handleChangeSearchingAirport: (airport: string) => void;
  handleChangeSearchingAirportTo: (airport: string) => void;
  selectedAirport: string;
  selectedAirportTo: string;
  selectedDateDepart: string;
  selectedDateReturn: string;
  suggestAirports: any[];
  handleSetupSelectedAirport: (airport: string) => void;
  suggestAirportsTo: any[];
  handleSetupSelectedAirportTo: (airport: string) => void;
  displayCalendarDepart: boolean;
  handleSetupSelectedDateDepart: (date: string) => void;
  displayCalendarReturn: boolean;
  handleSetupSelectedDateReturn: (date: string) => void;
  displayPassengerInfo: boolean;
  handleIncreaseAdultPassenger: () => void;
  handleDecreaseAdultPassenger: () => void;
  handleIncreaseChildrenPassenger: () => void;
  handleDecreaseChildrenPassenger: () => void;
  handleIncreaseInfantPassenger: () => void;
  handleDecreaseInfantPassenger: () => void;
}
const GenericContent: React.FC<Props> = ({
  flightOption,
  handleSetupFlightOption,
  resetAllSuggestion,
  handleSetupDisplaySuggestion,
  handleSetupDisplaySuggestionTo,
  handleSetupDisplayCalendarDepart,
  handleSetupDisplayCalendarReturn,
  handleSetupDisplayPassengerInfo,
  adultPassengerQuantity,
  childrenPassengerQuantity,
  infantPassengerQuantity,
  displaySuggestion,
  displaySuggestionTo,
  handleChangeSearchingAirport,
  handleChangeSearchingAirportTo,
  selectedAirport,
  selectedAirportTo,
  selectedDateDepart,
  selectedDateReturn,
  suggestAirports,
  handleSetupSelectedAirport,
  suggestAirportsTo,
  handleSetupSelectedAirportTo,
  displayCalendarDepart,
  handleSetupSelectedDateDepart,
  displayCalendarReturn,
  handleSetupSelectedDateReturn,
  displayPassengerInfo,
  handleIncreaseAdultPassenger,
  handleDecreaseAdultPassenger,
  handleIncreaseChildrenPassenger,
  handleDecreaseChildrenPassenger,
  handleIncreaseInfantPassenger,
  handleDecreaseInfantPassenger,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 mt-4">
        <button
          className={`w-28 h-8 text-sm rounded-full ${
            flightOption === 'roundTrip'
              ? 'bg-[#1A4532] text-[#ebc94e]'
              : 'bg-[#e1e2e3] text-black hover:bg-[#1A4532] hover:text-[#ebc94e]'
          }`}
          onClick={() => {
            handleSetupFlightOption('roundTrip');
            resetAllSuggestion();
          }}
        >
          Round trip
        </button>

        <button
          className={`w-28 h-8 text-sm rounded-full ${
            flightOption === 'oneWay'
              ? 'bg-[#1A4532] text-[#ebc94e]'
              : 'bg-[#e1e2e3] text-black hover:bg-[#1A4532] hover:text-[#ebc94e]'
          }`}
          onClick={() => {
            handleSetupFlightOption('oneWay');
            resetAllSuggestion();
          }}
        >
          One way
        </button>
      </div>

      <div className="">
        <BookingContentRoundTrip
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
          flightOption={flightOption}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displaySuggestion && (
          <div className="col-span-1">
            <BookingFlightSuggestion
              suggestAirports={suggestAirports}
              handleSetupSelectedAirport={handleSetupSelectedAirport}
              handleSetupDisplaySuggestion={handleSetupDisplaySuggestion}
            />
          </div>
        )}

        {displaySuggestionTo && (
          <div className="col-span-1">
            <BookingFlightSuggestionTo
              handleSetupDisplaySuggestionTo={handleSetupDisplaySuggestionTo}
              suggestAirportsTo={suggestAirportsTo}
              handleSetupSelectedAirportTo={handleSetupSelectedAirportTo}
            />
          </div>
        )}

        {displayCalendarDepart && (
          <div className="col-span-1">
            <CalendarDepart
              handleSetupSelectedDateDepart={handleSetupSelectedDateDepart}
              handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart}
            />
          </div>
        )}

        {displayCalendarReturn && (
          <div className="col-span-1">
            <CalendarReturn
              handleSetupSelectedDateReturn={handleSetupSelectedDateReturn}
              handleSetupDisplayCalendarReturn={handleSetupDisplayCalendarReturn}
            />
          </div>
        )}

        {displayPassengerInfo && (
          <div className="col-span-full">
            <PassengerInfo
              handleIncreaseAdultPassenger={handleIncreaseAdultPassenger}
              handleDecreaseAdultPassenger={handleDecreaseAdultPassenger}
              handleIncreaseChildrenPassenger={handleIncreaseChildrenPassenger}
              handleDecreaseChildrenPassenger={handleDecreaseChildrenPassenger}
              handleIncreaseInfantPassenger={handleIncreaseInfantPassenger}
              handleDecreaseInfantPassenger={handleDecreaseInfantPassenger}
              adultPassengerQuantity={adultPassengerQuantity}
              childrenPassengerQuantity={childrenPassengerQuantity}
              infantPassengerQuantity={infantPassengerQuantity}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GenericContent;
