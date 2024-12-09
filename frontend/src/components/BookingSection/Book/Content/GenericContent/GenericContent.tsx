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
    handleDecreaseInfantPassenger
        }) => {
  return (
    <div>
        {/* one way and round trip button */}
        <div className = "flex relative left-[1rem] top-[1.5rem]" style = {{flexFlow: "row wrap"}}>
            <button className = {flightOption === "roundTrip" ? "w-[7rem] h-[2rem] bg-[#094c5b] font-space-grotesk text-[#ebc94e] border-none relative" : "w-[7rem] h-[2rem] bg-[#e1e2e3] font-space-grotesk text-[black] border-none relative hover:bg-[#094c5b] hover:text-[#ebc94e] hover:cursor-pointer"} style = {{borderRadius: "18px", fontSize: "13px"}} onClick = {() => {
                handleSetupFlightOption("roundTrip");
                resetAllSuggestion();
            }}>Round trip</button>

            <button className = {flightOption === "oneWay" ? "w-[7rem] h-[2rem] bg-[#094c5b] font-space-grotesk text-[#ebc94e] border-none relative left-[1rem]" : "w-[7rem] h-[2rem] bg-[#e1e2e3] font-space-grotesk text-[black] border-none relative left-[1rem] hover:bg-[#094c5b] hover:text-[#ebc94e] hover:cursor-pointer"} style = {{borderRadius: "18px", fontSize: "13px"}} onClick = {() => {
                handleSetupFlightOption("oneWay");
                resetAllSuggestion();
            }}>One way</button>
        </div>
        
        {/* round trip or one way content */}
        <BookingContentRoundTrip 
            handleSetupDisplaySuggestion={handleSetupDisplaySuggestion} 
            handleSetupDisplaySuggestionTo = {handleSetupDisplaySuggestionTo} 
            handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart} 
            handleSetupDisplayCalendarReturn = {handleSetupDisplayCalendarReturn} 
            handleSetupDisplayPassengerInfo = {handleSetupDisplayPassengerInfo} 
            adultPassengerQuantity={adultPassengerQuantity} 
            childrenPassengerQuantity={childrenPassengerQuantity} 
            infantPassengerQuantity={infantPassengerQuantity}
            displaySuggestion = {displaySuggestion}
            displaySuggestionTo = {displaySuggestionTo}
            handleChangeSearchingAirport = {handleChangeSearchingAirport}
            handleChangeSearchingAirportTo = {handleChangeSearchingAirportTo}
            selectedAirport = {selectedAirport}
            selectedAirportTo = {selectedAirportTo}
            selectedDateDepart = {selectedDateDepart}
            selectedDateReturn = {selectedDateReturn}
            flightOption = {flightOption}
        />

        {displaySuggestion === true && 
            <div className = "z-[60] absolute top-[7.2rem]">
                <BookingFlightSuggestion 
                    suggestAirports = {suggestAirports}
                    handleSetupSelectedAirport = {handleSetupSelectedAirport}
                    handleSetupDisplaySuggestion={handleSetupDisplaySuggestion}
                />
            </div>
        }

        {displaySuggestionTo === true && 
            <div className = "z-[60] absolute top-[7.2rem] left-[18rem] medium:left-[26vw] small:left-[25vw]">
                <BookingFlightSuggestionTo 
                    handleSetupDisplaySuggestionTo={handleSetupDisplaySuggestionTo}
                    suggestAirportsTo = {suggestAirportsTo}
                    handleSetupSelectedAirportTo={handleSetupSelectedAirportTo}
                />
            </div>
        }

        {displayCalendarDepart === true && 
            <div className = "z-[60] absolute left-[36.5rem] top-[7rem] medium:left-[32vw] small:top-[11.5rem] small:left-[0rem]">
                <CalendarDepart
                    handleSetupSelectedDateDepart={handleSetupSelectedDateDepart}
                    handleSetupDisplayCalendarDepart = {handleSetupDisplayCalendarDepart}
                />
            </div>
        }

        {displayCalendarReturn === true && 
            <div className = "z-[60] absolute left-[48rem] top-[7rem] medium:left-[42vw] small:top-[11.5rem] small:left-[15rem]">
                <CalendarReturn
                    handleSetupSelectedDateReturn={handleSetupSelectedDateReturn}
                    handleSetupDisplayCalendarReturn = {handleSetupDisplayCalendarReturn}
                />
            </div>
        }

        {displayPassengerInfo === true && 
            <div className = "z-[100] absolute left-[2rem] top-[11.5rem] small:top-[17.5rem]">
                <PassengerInfo handleIncreaseAdultPassenger = {handleIncreaseAdultPassenger} handleDecreaseAdultPassenger = {handleDecreaseAdultPassenger} handleIncreaseChildrenPassenger = {handleIncreaseChildrenPassenger} handleDecreaseChildrenPassenger = {handleDecreaseChildrenPassenger} handleIncreaseInfantPassenger = {handleIncreaseInfantPassenger} handleDecreaseInfantPassenger = {handleDecreaseInfantPassenger} adultPassengerQuantity = {adultPassengerQuantity} childrenPassengerQuantity = {childrenPassengerQuantity} infantPassengerQuantity = {infantPassengerQuantity}/>
            </div>
        }
    </div>
  )
}

export default GenericContent