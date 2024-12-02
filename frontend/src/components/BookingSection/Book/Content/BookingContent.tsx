import React, { useEffect, useState } from 'react'
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
import GenericContent from './GenericContent/GenericContent';
import CalendarReturn from './Calendar/CalendarReturn';

interface Props {
    sectionTab: string;
    handleChangeTab: (tabName: string) => void;
}

const BookingContent: React.FC<Props> = ({sectionTab, handleChangeTab}) => {
    // states to manage display suggestions
    const [displaySuggestion, setDisplaySuggestion] = useState<boolean>(false);
    const [flightArea, setFlightArea] = useState<string>("Vietnam");
    const [flightOption, setFlightOption] = useState<string>("roundTrip");
    const [displayInformation, setDisplayInformation] = useState<boolean>(true);
    const [displaySuggestionTo, setDisplaySuggestionTo] = useState<boolean>(false);
    const [displayCalendarDepart, setDisplayCalendarDepart] = useState<boolean>(false);
    const [displayCalendarReturn, setDisplayCalendarReturn] = useState<boolean>(false);
    const [displayPassengerInfo, setDisplayPassengerInfo] = useState<boolean>(false);

    // passenger quantity
    const [adultPassengerQuantity, setAdultPassengerQuantity] = useState<number>(1);
    const [childrenPassengerQuantity, setChildrenPassengerQuantity] = useState<number>(0);
    const [infantPassengerQuantity, setInfantPassengerQuantity] = useState<number>(0);

    // searching airports
    const [searchingAirport, setSearchingAirport] = useState<string>(""); 
    const [searchingAirportTo, setSearchingAirportTo] = useState<string>("");

    // airports array
    const [airports, setAirports] = useState<any[]>([]);

    // suggest airports array
    const [suggestAirports, setSuggestAirports] = useState<any[]>(airports);
    const [suggestAirportsTo, setSuggestAirportsTo] = useState<any[]>([]);

    // selected airport
    const [selectedAirport, setSelectedAirport] = useState<string>("Accara (ACC), Ghana");
    const [selectedAirportTo, setSelectedAirportTo] = useState<string>("To")

    // selected date
    const [selectedDateDepart, setSelectedDateDepart] = useState<string>("Depart");
    const [selectedDateReturn, setSelectedDateReturn] = useState<string>("Return");

    useEffect(() => {
        fetch('/airports.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch the JSON file!");
                }
                return response.json();
            })
            .then(data => setAirports(data))
            .catch(err => console.error(err));
    }, [suggestAirports])

    const handleSetupFlightArea = (area: string) => {
        setFlightArea(area);
    }

    const handleSetupDisplaySuggestion = () => {
        displaySuggestion === false ? setDisplaySuggestion(true) : setDisplaySuggestion(false);
        setSuggestAirports(airports);
        setSuggestAirportsTo(airports);
    }

    const handleSetupDisplaySuggestionTo = () => {
        displaySuggestionTo === false ? setDisplaySuggestionTo(true) : setDisplaySuggestionTo(false);
        setSuggestAirports(airports);
        setSuggestAirportsTo(airports);
    }

    const handleSetupDisplayCalendarDepart = () => {
        displayCalendarDepart === false ? setDisplayCalendarDepart(true) : setDisplayCalendarDepart(false);
    }

    const handleSetupDisplayCalendarReturn = () => {
        displayCalendarReturn === false ? setDisplayCalendarReturn(true) : setDisplayCalendarReturn(false);
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

    const handleCloseSuggestion = () => {
        displaySuggestion === true && setDisplaySuggestion(false);
        displaySuggestionTo === true && setDisplaySuggestionTo(false);
        displayCalendarDepart === true && setDisplayCalendarDepart(false);
        displayCalendarReturn === true && setDisplayCalendarReturn(false);
        displayPassengerInfo === true && setDisplayPassengerInfo(false);
    }

    const handleSetupFlightOption = (option: string) => {
        setFlightOption(option);
    }

    const handleChangeSearchingAirport = (airport: string) => {
        setSearchingAirport(airport);
        const searchItem = airport.toLowerCase();
        if (searchingAirport === "") {
            setSuggestAirports(airports);
        }
        setSuggestAirports(airports.filter(airport => airport.name.toLowerCase().includes(searchItem)));
    }

    const handleChangeSearchingAirportTo = (airport: string) => {
        setSearchingAirportTo(airport);
        const searchItem = airport.toLowerCase();
        if (searchingAirportTo === "") {
            setSuggestAirportsTo(airports);
        }
        setSuggestAirportsTo(airports.filter(airport => airport.name.toLowerCase().includes(searchItem)));
    }

    const handleSetupSelectedAirport = (airport: string) => {
        setSelectedAirport(airport);
    }

    const handleSetupSelectedAirportTo = (airport: string) => {
        setSelectedAirportTo(airport);
    }

    const handleSetupSelectedDateDepart = (date: string) => {
        setSelectedDateDepart(date);
    }

    const handleSetupSelectedDateReturn = (date: string) => {
        setSelectedDateReturn(date);
    }
  return (
    <div>
        <div className = {sectionTab === "bookingContent" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {displayInformation === true ? "w-[60rem] h-[28rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem] fadeIn focusedDiv" : "w-[60rem] h-[20rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem] fadeIn focusedDiv"} onClick = {handleCloseSuggestion}>
            <GenericContent 
                flightOption = {flightOption}
                handleSetupFlightOption={handleSetupFlightOption}
                resetAllSuggestion = {resetAllSuggestion}
                handleSetupDisplaySuggestion = {handleSetupDisplaySuggestion}
                handleSetupDisplaySuggestionTo = {handleSetupDisplaySuggestionTo}
                handleSetupDisplayCalendarDepart = {handleSetupDisplayCalendarDepart}
                handleSetupDisplayCalendarReturn = {handleSetupDisplayCalendarReturn}
                handleSetupDisplayPassengerInfo = {handleSetupDisplayPassengerInfo}
                adultPassengerQuantity = {adultPassengerQuantity}
                childrenPassengerQuantity = {childrenPassengerQuantity}
                infantPassengerQuantity = {infantPassengerQuantity}
                displaySuggestion = {displaySuggestion}
                displaySuggestionTo = {displaySuggestionTo}
                handleChangeSearchingAirport = {handleChangeSearchingAirport}
                handleChangeSearchingAirportTo = {handleChangeSearchingAirportTo}
                selectedAirport = {selectedAirport}
                selectedAirportTo = {selectedAirportTo}
                selectedDateDepart = {selectedDateDepart}
                selectedDateReturn = {selectedDateReturn}
            />

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
                <BookingFlightSuggestion 
                    suggestAirports = {suggestAirports}
                    handleSetupSelectedAirport = {handleSetupSelectedAirport}
                    handleSetupDisplaySuggestion={handleSetupDisplaySuggestion}
                />
            </div>
        }

        {displaySuggestionTo === true && 
            <div className = "z-50 absolute top-[0.2rem] left-[18rem]">
                <BookingFlightSuggestionTo 
                    handleSetupDisplaySuggestionTo={handleSetupDisplaySuggestionTo}
                    suggestAirportsTo = {suggestAirportsTo}
                    handleSetupSelectedAirportTo={handleSetupSelectedAirportTo}
                />
            </div>
        }

        {displayCalendarDepart === true && 
            <div className = "z-50 absolute left-[36rem] top-[43.5rem]">
                <CalendarDepart
                    handleSetupSelectedDateDepart={handleSetupSelectedDateDepart}
                    handleSetupDisplayCalendarDepart = {handleSetupDisplayCalendarDepart}
                />
            </div>
        }

        {displayCalendarReturn === true && 
            <div className = "z-50 absolute left-[48rem] top-[43.5rem]">
                <CalendarReturn
                    handleSetupSelectedDateReturn={handleSetupSelectedDateReturn}
                    handleSetupDisplayCalendarReturn = {handleSetupDisplayCalendarReturn}
                />
            </div>
        }

        {displayPassengerInfo === true && 
            <div className = "z-50 absolute left-[2rem] top-[48.1rem]">
                <PassengerInfo handleIncreaseAdultPassenger = {handleIncreaseAdultPassenger} handleDecreaseAdultPassenger = {handleDecreaseAdultPassenger} handleIncreaseChildrenPassenger = {handleIncreaseChildrenPassenger} handleDecreaseChildrenPassenger = {handleDecreaseChildrenPassenger} handleIncreaseInfantPassenger = {handleIncreaseInfantPassenger} handleDecreaseInfantPassenger = {handleDecreaseInfantPassenger} adultPassengerQuantity = {adultPassengerQuantity} childrenPassengerQuantity = {childrenPassengerQuantity} infantPassengerQuantity = {infantPassengerQuantity}/>
            </div>
        }
    </div>
  )
}

export default BookingContent