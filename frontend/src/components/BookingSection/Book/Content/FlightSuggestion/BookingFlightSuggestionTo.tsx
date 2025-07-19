import React, { useEffect, useState } from 'react'
import AirplaneIcon from '../../../../../assets-test/Images/airplaneIcon.png';

interface Props {
    handleSetupDisplaySuggestionTo: () => void;
    suggestAirportsTo: any;
    handleSetupSelectedAirportTo: (airport: string) => void;
}

const BookingFlightSuggestionTo: React.FC<Props> = ({handleSetupDisplaySuggestionTo, suggestAirportsTo, handleSetupSelectedAirportTo}) => {

  return (
    <div className = "z-50 absolute bg-white h-[30.45rem] overflow-y-scroll setting-scrollbar overflow-x-hidden" style = {{left: "2.5rem", width: "28rem"}}>
        <div className = "relative left-[0.5rem]">
            <div>
                {suggestAirportsTo.map((airport: any) => {
                    return <div className = "relative bg-none left-[0.5rem] top-[0rem] hover:cursor-pointer" style = {{width: "28rem", height: "2.5rem", zIndex: "60", borderBottom: "0.25px solid gray"}} onClick = {() => {
                        handleSetupSelectedAirportTo(`${airport.city.name} (${airport.iata}), ${airport.city.country}`);
                        handleSetupDisplaySuggestionTo();
                    }}>
                        <p className = " relative top-[-0.3rem] text-[#1A4532] font-bold" style = {{fontSize: "18px"}}>{`${airport.city.name}, ${airport.city.country}`}</p>
                        <p className = " relative top-[-1.5rem] text-[gray] font-bold" style = {{fontSize: "13px"}}>{`${airport.name} Airport`}</p>
                        <img src = {AirplaneIcon} alt = "" className = "w-[2.5rem] h-[2.5rem] absolute right-[8.5rem] top-[-0.5rem]" />
                        <div className = "absolute w-[3rem] h-[2rem] bg-[#1A4532] top-[-0.2rem] right-[4.5rem] text-center" style = {{borderRadius: "5px"}}>
                            <p className = " absolute top-[-0.7rem] text-[#ebc94e] left-[0.5rem] font-bold" style = {{fontSize: "16px"}}>{airport.iata}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default BookingFlightSuggestionTo