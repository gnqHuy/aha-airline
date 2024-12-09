import React from 'react'
import { FaArrowRight, FaCalendarAlt, FaGift } from 'react-icons/fa'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { RiExpandUpDownFill } from 'react-icons/ri'
import CalendarDepart from './Calendar/CalendarDepart';

interface Props {
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
    flightOption: string;
}

const BookingContentRoundTrip: React.FC<Props> = ({
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
    flightOption
        }) => {
  return (
    <div className = "flex">
        {/* flight from */}
        <div className = "absolute top-[2.5rem] hover:cursor-pointer" onClick = {handleSetupDisplaySuggestion}>
            <p className = "font-space-grotesk text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>From</p>
            {displaySuggestion === true ? 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <input type = "text" className = "absolute top-[-0.3rem] left-[0rem] w-[14.55rem] bg-transparent border-none focus:border-none outline-none" autoFocus onChange = {(e) => handleChangeSearchingAirport(e.target.value)}/>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                </div> : 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "13px"}}>{selectedAirport}</span>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                </div>
            } 
        </div>
        
        {/* icon arrow */}
        <div className = "relative top-[3.2rem]">
            {flightOption === "roundTrip" ? 
                <FaArrowRightArrowLeft className = "w-[1.5rem] h-[1.5rem] absolute left-[18rem] medium:left-[26.5vw] small:left-[43vw]" style = {{color: "#094c5b"}}/> : 
                <FaArrowRight className = "w-[1.5rem] h-[1.5rem] absolute left-[18rem] medium:left-[26.5vw] small:left-[43vw]" style = {{color: "#094c5b"}}/>
            }
        </div>
        
        {/* flight to */}
        <div className = "absolute top-[2.5rem] left-[18.5rem] hover:cursor-pointer medium:left-[27vw] small:left-[45vw]" onClick = {handleSetupDisplaySuggestionTo}>
            {displaySuggestionTo === true ? 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <input type = "text" className = "absolute top-[-0.3rem] left-[0rem] w-[14.55rem] bg-transparent border-none focus:border-none outline-none" autoFocus onChange = {(e) => handleChangeSearchingAirportTo(e.target.value)}/>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw]" style = {{color: "gray"}}/></span>
                </div> : 
                <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[21vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "13px"}}>{selectedAirportTo}</span>
                    <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem] medium:left-[19vw]" style = {{color: "gray"}}/></span>
                </div>
            }
        </div>

        {/* calendar depart */}
        <div className = "absolute top-[2.5rem] left-[34.5rem] hover:cursor-pointer medium:left-[50vw] small:top-[7rem] small:left-[0rem]" onClick = {handleSetupDisplayCalendarDepart}>
            <div className = "w-[11rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[16vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{selectedDateDepart}</span>
                <span><FaCalendarAlt className = "w-[1.3rem] h-[1.3rem] absolute left-[9.5rem] bottom-[0.3rem] medium:left-[13vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                <span className = "absolute text-gray-500 top-[1.2rem]" style = {{fontSize: "13px"}}>(DD/MM/YYYY)</span>
            </div>
        </div>
        
        {/* calendar return */}
        {flightOption === "roundTrip" && 
            <div className = "absolute top-[2.5rem] left-[46.2rem] hover:cursor-pointer medium:left-[68vw] small:top-[7rem] small:left-[45vw]" onClick = {handleSetupDisplayCalendarReturn}>
                <div className = "w-[11rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex medium:w-[16vw] small:w-[35vw]" style = {{borderBottom: "1px solid black"}}>
                    <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{selectedDateReturn}</span>
                    <span><FaCalendarAlt className = "w-[1.3rem] h-[1.3rem] absolute left-[9.5rem] bottom-[0.3rem] medium:left-[13vw] small:left-[32vw]" style = {{color: "gray"}}/></span>
                    <span className = "absolute text-gray-500 top-[1.2rem]" style = {{fontSize: "13px"}}>(DD/MM/YYYY)</span>
                </div>
            </div>
        }

        {/* passenger quantity */}
        <div className = "absolute top-[7rem] hover:cursor-pointer small:top-[13rem]" onClick = {handleSetupDisplayPassengerInfo}>
            <p className = "font-space-grotesk text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>Passenger</p>
            <div className = "w-[18rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{`${adultPassengerQuantity + childrenPassengerQuantity + infantPassengerQuantity} Passenger(s)`}</span>
                <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[16.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
            </div>
        </div>

        {/* promotion code */}
        <div className = "absolute top-[10rem] left-[3rem] flex small:top-[16rem]">
            <FaGift className = "w-[1.7rem] h-[1.7rem] absolute left-[19rem] top-[0rem]" style = {{color: "#094c5b"}}/>
            <p className = "absolute left-[22rem] w-[10rem] top-[-0.7rem] font-space-grotesk text-[#094c5b]" style = {{fontSize: "16px"}}>PROMOTION CODE</p>
        </div>

        {/* find flight button */}
        <div className = "absolute top-[12rem] right-[5rem] medium:right-[5vw] small:top-[20rem]">
            <button className = "w-[10rem] h-[2.5rem] border-none font-space-grotesk font-bold bg-[#ebc94e]" style = {{fontSize: "15px", borderRadius: "10px"}}>FIND FLIGHT</button>
        </div>
    </div>
  )
}

export default BookingContentRoundTrip