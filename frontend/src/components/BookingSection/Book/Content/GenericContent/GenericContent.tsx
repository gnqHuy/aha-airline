import React from 'react'
import BookingContentRoundTrip from '../BookingContentRoundTrip';
import BookingContentOneWay from '../BookingContentOneWay';

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
}

const GenericContent: React.FC<Props> = ({flightOption, handleSetupFlightOption, resetAllSuggestion, handleSetupDisplaySuggestion, handleSetupDisplaySuggestionTo, handleSetupDisplayCalendarDepart, handleSetupDisplayCalendarReturn, handleSetupDisplayPassengerInfo, adultPassengerQuantity, childrenPassengerQuantity, infantPassengerQuantity, displaySuggestion, displaySuggestionTo, handleChangeSearchingAirport, handleChangeSearchingAirportTo, selectedAirport, selectedAirportTo, selectedDateDepart, selectedDateReturn}) => {
  return (
    <div>
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
        
        {flightOption === "roundTrip" 
            && <BookingContentRoundTrip 
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
                />
        }

        {flightOption === "oneWay" && 
            <BookingContentOneWay 
                handleSetupDisplaySuggestion={handleSetupDisplaySuggestion} 
                handleSetupDisplaySuggestionTo = {handleSetupDisplaySuggestionTo} 
                handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart} 
                handleSetupDisplayPassengerInfo={handleSetupDisplayPassengerInfo} 
                adultPassengerQuantity={adultPassengerQuantity} 
                childrenPassengerQuantity={childrenPassengerQuantity} 
                infantPassengerQuantity={infantPassengerQuantity}
                handleChangeSearchingAirport = {handleChangeSearchingAirport}
                handleChangeSearchingAirportTo = {handleChangeSearchingAirportTo}
                displaySuggestion = {displaySuggestion}
                displaySuggestionTo = {displaySuggestionTo}
                selectedAirport = {selectedAirport}
                selectedAirportTo = {selectedAirportTo}
                selectedDateDepart = {selectedDateDepart}
            />}
    </div>
  )
}

export default GenericContent