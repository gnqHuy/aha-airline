import React from 'react'
import { FaCalendarAlt, FaGift } from 'react-icons/fa'
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { RiExpandUpDownFill } from 'react-icons/ri'
import { FaArrowRight } from "react-icons/fa";

interface Props {
    handleSetupDisplaySuggestion: (suggest: boolean) => void;
    handleSetupDisplaySuggestionTo: (suggest: boolean) => void;
    handleSetupDisplayCalendarDepart: (display: boolean) => void;
    handleSetupDisplayPassengerInfo: () => void;
    adultPassengerQuantity: number;
    childrenPassengerQuantity: number;
    infantPassengerQuantity: number;
}

const BookingContentOneWay: React.FC<Props> = ({handleSetupDisplaySuggestion, handleSetupDisplaySuggestionTo, handleSetupDisplayCalendarDepart, handleSetupDisplayPassengerInfo, adultPassengerQuantity, childrenPassengerQuantity, infantPassengerQuantity}) => {
  return (
    <div className = "flex">
        <div className = "absolute top-[2.5rem] hover:cursor-pointer" onClick = {() => {
            handleSetupDisplaySuggestion(true);
            handleSetupDisplaySuggestionTo(false);
            handleSetupDisplayCalendarDepart(false);
        }}>
            <p className = "font-space-grotesk text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>From</p>
            <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>Hanoi (HAN), Vietnam</span>
                <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
            </div>
        </div>

        <div className = "relative top-[3.2rem]">
            <FaArrowRight className = "w-[1.5rem] h-[1.5rem] absolute left-[18rem]" style = {{color: "#094c5b"}}/>
        </div>

        <div className = "absolute top-[2.5rem] left-[18.5rem] hover:cursor-pointer" onClick = {() => {
            handleSetupDisplaySuggestion(false);
            handleSetupDisplaySuggestionTo(true);
            handleSetupDisplayCalendarDepart(false);
        }}>
            <div className = "w-[15rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>To</span>
                <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[13.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
            </div>
        </div>

        <div className = "absolute top-[2.5rem] left-[34.5rem] hover:cursor-pointer" onClick={() => {
            handleSetupDisplaySuggestion(false);
            handleSetupDisplaySuggestionTo(false);
            handleSetupDisplayCalendarDepart(true);
        }}>
            <div className = "w-[11rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>Depart</span>
                <span><FaCalendarAlt className = "w-[1.3rem] h-[1.3rem] absolute left-[9.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
                <span className = "absolute text-gray-500 top-[1.2rem]" style = {{fontSize: "13px"}}>(DD/MM/YYYY)</span>
            </div>
        </div>

        <div className = "absolute top-[7rem] hover:cursor-pointer" onClick={() => {
            handleSetupDisplaySuggestion(false);
            handleSetupDisplaySuggestionTo(false);
            handleSetupDisplayCalendarDepart(false);
            handleSetupDisplayPassengerInfo();
        }}>
            <p className = "font-space-grotesk text-gray-500 absolute top-[1rem] left-[2.2rem]" style = {{fontSize: "12px"}}>Passenger</p>
            <div className = "w-[18rem] h-[1rem] text-left absolute left-[2rem] top-[3.5rem] flex" style = {{borderBottom: "1px solid black"}}>
                <span className = "font-space-grotesk absolute bottom-[0.3rem] left-[0.2rem]" style = {{fontSize: "16px"}}>{`${adultPassengerQuantity + childrenPassengerQuantity + infantPassengerQuantity} Passenger(s)`}</span>
                <span><RiExpandUpDownFill className = "w-[1.3rem] h-[1.3rem] absolute left-[16.5rem] bottom-[0.3rem]" style = {{color: "gray"}}/></span>
            </div>
        </div>

        <div className = "absolute top-[10rem] left-[3rem] flex">
            <FaGift className = "w-[1.7rem] h-[1.7rem] absolute left-[19rem] top-[0rem]" style = {{color: "#094c5b"}}/>
            <p className = "absolute left-[22rem] w-[10rem] top-[-0.7rem] font-space-grotesk text-[#094c5b]" style = {{fontSize: "16px"}}>PROMOTION CODE</p>
        </div>

        <div className = "absolute top-[12rem] right-[5rem]">
            <button className = "w-[10rem] h-[2.5rem] border-none font-space-grotesk font-bold bg-[#ebc94e]" style = {{fontSize: "15px", borderRadius: "10px"}}>FIND FLIGHT</button>
        </div>
    </div>
  )
}

export default BookingContentOneWay