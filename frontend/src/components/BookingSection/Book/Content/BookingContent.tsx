import React, { useEffect, useState } from 'react'
import { PiWarningCircle } from "react-icons/pi";
import { IoIosArrowUp, IoMdClose } from "react-icons/io";
import BookingFlightSuggestion from './FlightSuggestion/BookingFlightSuggestion';
import './BookingContent.css';
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
    // states to manage display suggestions of flight from
    const [displaySuggestion, setDisplaySuggestion] = useState<boolean>(false);

    // determine the flight type is round trip or one way
    const [flightOption, setFlightOption] = useState<string>("roundTrip");

    // determine display information or not
    const [displayInformation, setDisplayInformation] = useState<boolean>(true);

    // states to manage display suggestions of flight to
    const [displaySuggestionTo, setDisplaySuggestionTo] = useState<boolean>(false);

    // states to manage display calendar depart
    const [displayCalendarDepart, setDisplayCalendarDepart] = useState<boolean>(false);

    // states to manage display calendar return
    const [displayCalendarReturn, setDisplayCalendarReturn] = useState<boolean>(false);

    // states to manage display passenger info
    const [displayPassengerInfo, setDisplayPassengerInfo] = useState<boolean>(false);

    // passenger quantity base on each age
    const [adultPassengerQuantity, setAdultPassengerQuantity] = useState<number>(1);
    const [childrenPassengerQuantity, setChildrenPassengerQuantity] = useState<number>(0);
    const [infantPassengerQuantity, setInfantPassengerQuantity] = useState<number>(0);

    // searching airports
    const [searchingAirport, setSearchingAirport] = useState<string>("Accara (ACC), Ghana"); 
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

    // change the suggestion of flight from
    const handleSetupDisplaySuggestion = () => {
        displaySuggestion === false ? setDisplaySuggestion(true) : setDisplaySuggestion(false);
        setDisplaySuggestionTo(false);
        setDisplayCalendarDepart(false);
        setDisplayCalendarReturn(false);
        setDisplayPassengerInfo(false);
        setSuggestAirports(airports);
        setSuggestAirportsTo(airports);
        setSuggestAirports(airports.filter(airport => {
            const tmpArr = selectedAirportTo.split(" ");
            return airport.city.name !== tmpArr[0];
        }));
    }

    // change the suggestion of flight to
    const handleSetupDisplaySuggestionTo = () => {
        displaySuggestionTo === false ? setDisplaySuggestionTo(true) : setDisplaySuggestionTo(false);
        setDisplaySuggestion(false);
        setDisplayCalendarDepart(false);
        setDisplayCalendarReturn(false);
        setDisplayPassengerInfo(false);
        setSuggestAirports(airports);
        setSuggestAirportsTo(airports.filter(airport => {
            const tmpArr = selectedAirport.split(" ");
            return airport.city.name !== tmpArr[0];
        }));
    }

    // change the display of calendar depart
    const handleSetupDisplayCalendarDepart = () => {
        displayCalendarDepart === false ? setDisplayCalendarDepart(true) : setDisplayCalendarDepart(false);
        setDisplaySuggestionTo(false);
        setDisplaySuggestion(false);
        setDisplayCalendarReturn(false);
        setDisplayPassengerInfo(false);
    }

    // change the display of calendar return
    const handleSetupDisplayCalendarReturn = () => {
        displayCalendarReturn === false ? setDisplayCalendarReturn(true) : setDisplayCalendarReturn(false);
        setDisplaySuggestionTo(false);
        setDisplaySuggestion(false);
        setDisplayCalendarDepart(false);
        setDisplayPassengerInfo(false);
    } 
    
    // change the display of passenger info
    const handleSetupDisplayPassengerInfo = () => {
        displayPassengerInfo === true ? setDisplayPassengerInfo(false) : setDisplayPassengerInfo(true);
        setDisplaySuggestionTo(false);
        setDisplaySuggestion(false);
        setDisplayCalendarDepart(false);
        setDisplayCalendarReturn(false);
    }

    // handle increase adult passenger when click plus button
    const handleIncreaseAdultPassenger = () => {
        setAdultPassengerQuantity(prev => prev + 1);
    }

    // handle decrease adult passenger when click the minus button
    const handleDecreaseAdultPassenger = () => {
        if (adultPassengerQuantity > 1) {
            setAdultPassengerQuantity(prev => prev - 1);
        }
    }

    // handle increase children passenger when click the plus button
    const handleIncreaseChildrenPassenger = () => {
        setChildrenPassengerQuantity(prev => prev + 1);
    }

    // handle decrease children passenger when click the minus button
    const handleDecreaseChildrenPassenger = () => {
        if (childrenPassengerQuantity > 0) {
            setChildrenPassengerQuantity(prev => prev - 1);
        }
    }

    // handle increase infant passenger when click the plus button
    const handleIncreaseInfantPassenger = () => {
        setInfantPassengerQuantity(prev => prev + 1);
    }

    // handle decrease infant passenger when click the minus button
    const handleDecreaseInfantPassenger = () => {
        if (infantPassengerQuantity > 0) {
            setInfantPassengerQuantity(prev => prev - 1);
        }
    }

    // handle close suggestion when change to other tab or click outside
    const handleCloseSuggestion = () => {
        displaySuggestion === true && setDisplaySuggestion(false);
        displaySuggestionTo === true && setDisplaySuggestionTo(false);
        displayCalendarDepart === true && setDisplayCalendarDepart(false);
        displayCalendarReturn === true && setDisplayCalendarReturn(false);
        displayPassengerInfo === true && setDisplayPassengerInfo(false);
    }

    // change the flight option: round trip or one way
    const handleSetupFlightOption = (option: string) => {
        setFlightOption(option);
    }

    // handle display suggestion when typing the input from
    const handleChangeSearchingAirport = (airport: string) => {
        setSearchingAirport(airport);
        const searchItem = airport.toLowerCase();
        if (searchingAirport === "") {
            setSuggestAirports(airports);
        }
        setSuggestAirports(airports.filter(airport => {
            const tmpArr = selectedAirportTo.split(" ");
            return airport.city.name !== tmpArr[0] && airport.city.name.toLowerCase().includes(searchItem);
        }));
    }

    // handle display suggestion when typing the input to
    const handleChangeSearchingAirportTo = (airport: string) => {
        setSearchingAirportTo(airport);
        const searchItem = airport.toLowerCase();
        if (searchingAirportTo === "") {
            setSuggestAirportsTo(airports);
        }
        setSuggestAirportsTo(airports.filter(airport => {
            const tmpArr = selectedAirport.split(" ");
            return airport.city.name !== tmpArr[0] && airport.city.name.toLowerCase().includes(searchItem);
        }));
    }

    // handle display the selected airport
    const handleSetupSelectedAirport = (airport: string) => {
        setSelectedAirport(airport);
    }

    // handle display the selected airport to
    const handleSetupSelectedAirportTo = (airport: string) => {
        setSelectedAirportTo(airport);
    }

    // convert string to date
    const convertToDate = (dateString: string) => {
        const [day, month, year] = dateString.split("/").map(Number);
        const date = new Date(year, month, day);
        return date;
      };

    // handle display the selected date depart
    const handleSetupSelectedDateDepart = (date: string) => {
        const today = convertToDate("05/12/2024");
        const convertDateDepart = convertToDate(date);
        const convertDateReturn = convertToDate(selectedDateReturn);
        if ((convertDateDepart <= convertDateReturn || selectedDateReturn === "Return") && convertDateDepart >= today) {
            setSelectedDateDepart(date);
        }
    }

    // handle display the selected date return
    const handleSetupSelectedDateReturn = (date: string) => {
        const today = convertToDate("05/12/2024");
        const convertDateDepart = convertToDate(selectedDateDepart);
        const convertDateReturn = convertToDate(date);
        if ((convertDateReturn >= convertDateDepart || selectedDateDepart === "Depart") && convertDateReturn >= today) {
            setSelectedDateReturn(date);
        }
    }
  return (
    <div>
        <div className = {sectionTab === "bookingContent" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
        <div className = {displayInformation === true ? "w-[60rem] h-[28rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem] fadeIn focusedDiv medium:relative medium:left-[1%] medium:top-[33.2rem] medium:w-[90vw] medium:h-[30rem] small:w-[90vw] small:h-[39rem] big:w-[78vw]" : "w-[60rem] h-[20rem] bg-[#FCF9F2] absolute left-[20%] top-[36.5rem] fadeIn focusedDiv medium:relative medium:left-[1%] medium:top-[33.2rem] medium:w-[90vw] medium:h-[30rem] small:h-[39rem] big:w-[78vw]"}>
            {/* generic content */}
            <GenericContent 
                flightOption = {flightOption}
                handleSetupFlightOption={handleSetupFlightOption}
                resetAllSuggestion = {handleCloseSuggestion}
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
                suggestAirports = {suggestAirports}
                handleSetupSelectedAirport = {handleSetupSelectedAirport}
                suggestAirportsTo = {suggestAirportsTo}
                handleSetupSelectedAirportTo = {handleSetupSelectedAirportTo}
                displayCalendarDepart = {displayCalendarDepart}
                handleSetupSelectedDateDepart = {handleSetupSelectedDateDepart}
                displayCalendarReturn = {displayCalendarReturn}
                handleSetupSelectedDateReturn = {handleSetupSelectedDateReturn}
                displayPassengerInfo = {displayPassengerInfo}
                handleIncreaseAdultPassenger = {handleIncreaseAdultPassenger}
                handleDecreaseAdultPassenger = {handleDecreaseAdultPassenger}
                handleIncreaseChildrenPassenger = {handleIncreaseChildrenPassenger}
                handleDecreaseChildrenPassenger = {handleDecreaseChildrenPassenger}
                handleIncreaseInfantPassenger = {handleIncreaseInfantPassenger}
                handleDecreaseInfantPassenger = {handleDecreaseInfantPassenger}
            />

            {/* additional information */}
            {displayInformation === true && 
                <div className = "bg-[#f1dea7] w-[56rem] h-[8rem] absolute top-[16rem] left-[2rem] medium:w-[84vw] medium:h-[11rem] small:top-[25rem] small:w-[80vw] small:h-[11rem]">
                    <div className = "absolute top-[3rem] left-[0.5rem]">
                        <PiWarningCircle className = "w-[2rem] h-[2rem]" style = {{color: "#ab861b"}}/>
                    </div>
                    <div className = "text-left absolute left-[3.5rem] top-[0.2rem]">
                        <p className = "font-space-grotesk font-bold medium:text-[1.5vw]">IMPORTANT INFORMATION:</p>
                        <p className = "font-space-grotesk relative top-[-1rem] w-[56rem] medium:w-[75vw] small:w-[71vw]" style = {{fontSize: "16px"}}>Your country/region is <b>Vietnam</b> and payment will be charged in <b>Vietnamese Dong (VND).</b></p>
                        <p className = "font-space-grotesk relative top-[-2rem] w-[56rem] medium:w-[75vw] small:w-[71vw]" style = {{fontSize: "16px"}}>According to regulations of the Ministry of Finance, E-VAT invoices are only issued for payment in VND.</p>
                        <p className = "font-space-grotesk relative top-[-3rem] w-[56rem] medium:w-[75vw] small:w-[71vw]" style = {{fontSize: "16px"}}>In case of paying by other currency, you may change website country/region.</p>
                    </div>
                    <div className = "absolute right-[0rem]">
                        <IoMdClose className = "w-[1.5rem] h-[1.5rem] hover:cursor-pointer" style = {{color: "gray"}} onClick = {() => setDisplayInformation(false)}/>
                    </div>
                </div>
            }

            {/* button to close tab */}
            <div className = {displayInformation === true ? "closeTab_section top-[23.8rem] left-[28rem] medium:top-[25.8rem] medium:left-[43vw] small:top-[34.8rem] small:left-[43vw]" : "closeTab_section top-[15.8rem] left-[28rem] medium:top-[25.8rem] medium:left-[43vw] small:top-[34.8rem] small:left-[43vw]"}>
                <button onClick = {() => handleChangeTab("default")}>
                    <span><IoIosArrowUp style = {{width: "2rem", height: "2rem", color: "#ebc94e"}}/></span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default BookingContent