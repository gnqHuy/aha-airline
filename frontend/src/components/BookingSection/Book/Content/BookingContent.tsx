import React, { useState } from 'react'
import { PiWarningCircle } from "react-icons/pi";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import BookingFlightSuggestion from './FlightSuggestion/BookingFlightSuggestion';
import './BookingContent.css';
import BookingFlightSuggestionSideBar from './FlightSuggestion/BookingFlightSuggestionSideBar';
import BookingContentOneWay from './BookingContentOneWay';
import BookingContentRoundTrip from './BookingContentRoundTrip';
import BookingFlightSuggestionTo from './FlightSuggestion/BookingFlightSuggestionTo';
import CalendarDepart from './Calendar/CalendarDepart';
import PassengerInfo from './PassengerInfo/PassengerInfo';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
}

const BookingContent: React.FC<Props> = ({sectionTab, handleChangeTab}) => {
    const [displaySuggestion, setDisplaySuggestion] = useState<boolean>(false);
    const [flightArea, setFlightArea] = useState<string>("Vietnam");
    const [flightOption, setFlightOption] = useState<string>("roundTrip");
    const [displayInformation, setDisplayInformation] = useState<boolean>(true);
    const [displaySuggestionTo, setDisplaySuggestionTo] = useState<boolean>(false);
    const [displayCalendarDepart, setDisplayCalendarDepart] = useState<boolean>(false);
    const [displayCalendarReturn, setDisplayCalendarReturn] = useState<boolean>(false);
    const [displayPassengerInfo, setDisplayPassengerInfo] = useState<boolean>(false);

    const [adultPassengerQuantity, setAdultPassengerQuantity] = useState<number>(1);
    const [childrenPassengerQuantity, setChildrenPassengerQuantity] = useState<number>(0);
    const [infantPassengerQuantity, setInfantPassengerQuantity] = useState<number>(0);

    const handleSetupFlightArea = (area: string) => {
        setFlightArea(area);
    }

    const handleSetupDisplaySuggestion = (suggest: boolean) => {
        setDisplaySuggestion(suggest);
    }

    const handleSetupDisplaySuggestionTo = (suggest: boolean) => {
        setDisplaySuggestionTo(suggest);
    }

    const handleSetupDisplayCalendarDepart = (display: boolean) => {
        setDisplayCalendarDepart(display);
    }

    const handleSetupDisplayCalendarReturn = (display: boolean) => {
        setDisplayCalendarReturn(display);
    } 

    const handleSetupDisplayPassengerInfo = () => {
        displayPassengerInfo === true ? setDisplayPassengerInfo(false) : setDisplayPassengerInfo(true);
    }

    const handleIncreaseAdultPassenger = () => {
        setAdultPassengerQuantity(prev => prev + 1);
    }

    const handleDecreaseAdultPassenger = () => {
        if (adultPassengerQuantity > 1) {
            setAdultPassengerQuantity(prev => prev - 1);
        }
    }

    const handleIncreaseChildrenPassenger = () => {
        setChildrenPassengerQuantity(prev => prev + 1);
    }

    const handleDecreaseChildrenPassenger = () => {
        if (childrenPassengerQuantity > 0) {
            setChildrenPassengerQuantity(prev => prev - 1);
        }
    }

    const handleIncreaseInfantPassenger = () => {
        setInfantPassengerQuantity(prev => prev + 1);
    }

    const handleDecreaseInfantPassenger = () => {
        if (infantPassengerQuantity > 0) {
            setInfantPassengerQuantity(prev => prev - 1);
        }
    }

    const resetAllSuggestion = () => {
        setDisplaySuggestion(false);
        setDisplaySuggestionTo(false);
        setDisplayCalendarDepart(false);
        setDisplayCalendarReturn(false);
        setDisplayPassengerInfo(false);
    }
  return (
    <div>
        <div className = {sectionTab === "bookingContent" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {displayInformation === true ? "w-[60rem] h-[28rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem]} fadeIn focusedDiv" : "w-[60rem] h-[20rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem]} fadeIn focusedDiv"}>
            <div className = "flex relative left-[1rem] top-[1.5rem]" style = {{flexFlow: "row wrap"}}>
                <button className = {flightOption === "roundTrip" ? "w-[7rem] h-[2rem] bg-[#094c5b] font-space-grotesk text-[#ebc94e] border-none relative" : "w-[7rem] h-[2rem] bg-[#e1e2e3] font-space-grotesk text-[black] border-none relative hover:bg-[#094c5b] hover:text-[#ebc94e] hover:cursor-pointer"} style = {{borderRadius: "18px", fontSize: "13px"}} onClick = {() => {
                    setFlightOption("roundTrip");
                    resetAllSuggestion();
                }}>Round trip</button>

                <button className = {flightOption === "oneWay" ? "w-[7rem] h-[2rem] bg-[#094c5b] font-space-grotesk text-[#ebc94e] border-none relative left-[1rem]" : "w-[7rem] h-[2rem] bg-[#e1e2e3] font-space-grotesk text-[black] border-none relative left-[1rem] hover:bg-[#094c5b] hover:text-[#ebc94e] hover:cursor-pointer"} style = {{borderRadius: "18px", fontSize: "13px"}} onClick = {() => {
                    setFlightOption("oneWay");
                    resetAllSuggestion();
                }}>One way</button>
            </div>
            
            {flightOption === "roundTrip" && <BookingContentRoundTrip handleSetupDisplaySuggestion={handleSetupDisplaySuggestion} handleSetupDisplaySuggestionTo = {handleSetupDisplaySuggestionTo} handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart} handleSetupDisplayCalendarReturn = {handleSetupDisplayCalendarReturn} handleSetupDisplayPassengerInfo = {handleSetupDisplayPassengerInfo} adultPassengerQuantity={adultPassengerQuantity} childrenPassengerQuantity={childrenPassengerQuantity} infantPassengerQuantity={infantPassengerQuantity}/>}

            {flightOption === "oneWay" && <BookingContentOneWay handleSetupDisplaySuggestion={handleSetupDisplaySuggestion} handleSetupDisplaySuggestionTo = {handleSetupDisplaySuggestionTo} handleSetupDisplayCalendarDepart={handleSetupDisplayCalendarDepart} handleSetupDisplayPassengerInfo={handleSetupDisplayPassengerInfo} adultPassengerQuantity={adultPassengerQuantity} childrenPassengerQuantity={childrenPassengerQuantity} infantPassengerQuantity={infantPassengerQuantity}/>}

            {displayInformation === true && 
                <div className = "bg-[#f1dea7] w-[56rem] h-[8rem] absolute top-[16rem] left-[2rem]">
                    <div className = "absolute top-[3rem] left-[0.5rem]">
                        <PiWarningCircle className = "w-[2rem] h-[2rem]" style = {{color: "#ab861b"}}/>
                    </div>
                    <div className = "text-left absolute left-[3.5rem] top-[0.2rem]">
                        <p className = "font-space-grotesk font-bold" style = {{fontSize: "18px"}}>IMPORTANT INFORMATION:</p>
                        <p className = "font-space-grotesk absolute top-[1.5rem] w-[56rem]" style = {{fontSize: "16px"}}>Your country/region is <b>Vietnam</b> and payment will be charged in <b>Vietnamese Dong (VND).</b></p>
                        <p className = "font-space-grotesk absolute top-[2.7rem] w-[56rem]" style = {{fontSize: "16px"}}>According to regulations of the Ministry of Finance, E-VAT invoices are only issued for payment in VND.</p>
                        <p className = "font-space-grotesk absolute top-[3.9rem] w-[56rem]" style = {{fontSize: "16px"}}>In case of paying by other currency, you may change website country/region.</p>
                    </div>
                    <div className = "absolute right-[0rem]">
                        <IoMdClose className = "w-[1.5rem] h-[1.5rem] hover:cursor-pointer" style = {{color: "gray"}} onClick = {() => setDisplayInformation(false)}/>
                    </div>
                </div>
            }

            <div className = {displayInformation === true ? "closeTab_section top-[23.8rem] left-[28rem]" : "closeTab_section top-[15.8rem] left-[28rem]"}>
                <button onClick = {() => handleChangeTab("default")}>
                    <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/></span>
                </button>
            </div>
        </div>
        {displaySuggestion === true && 
            <div className = "z-50 absolute top-[0.2rem]">
                <BookingFlightSuggestionSideBar flightArea = {flightArea} handleSetupFlightArea={handleSetupFlightArea}/>
                <BookingFlightSuggestion flightArea = {flightArea} handleSetupDisplaySuggestion={handleSetupDisplaySuggestion}/>
            </div>
        }

        {displaySuggestionTo === true && 
            <div className = "z-50 absolute top-[0.2rem] left-[18rem]">
                <BookingFlightSuggestionSideBar flightArea = {flightArea} handleSetupFlightArea={handleSetupFlightArea}/>
                <BookingFlightSuggestionTo flightArea = {flightArea} handleSetupDisplaySuggestionTo={handleSetupDisplaySuggestionTo}/>
            </div>
        }

        {displayCalendarDepart === true && 
            <div className = "z-50 absolute left-[55rem] top-[43.5rem]">
                <CalendarDepart/>
            </div>
        }

        {displayCalendarReturn === true && 
            <div className = "z-50 absolute left-[67rem] top-[43.5rem]">
                <CalendarDepart/>
            </div>
        }

        {displayPassengerInfo === true && 
            <div className = "z-50 absolute left-[21rem] top-[48.1rem]">
                <PassengerInfo handleIncreaseAdultPassenger = {handleIncreaseAdultPassenger} handleDecreaseAdultPassenger = {handleDecreaseAdultPassenger} handleIncreaseChildrenPassenger = {handleIncreaseChildrenPassenger} handleDecreaseChildrenPassenger = {handleDecreaseChildrenPassenger} handleIncreaseInfantPassenger = {handleIncreaseInfantPassenger} handleDecreaseInfantPassenger = {handleDecreaseInfantPassenger} adultPassengerQuantity = {adultPassengerQuantity} childrenPassengerQuantity = {childrenPassengerQuantity} infantPassengerQuantity = {infantPassengerQuantity}/>
            </div>
        }
    </div>
  )
}

export default BookingContent