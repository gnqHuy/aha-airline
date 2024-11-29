import React from 'react'
import { IoMdClose } from 'react-icons/io';

interface Props {
    flightArea: string;
    handleSetupDisplaySuggestionTo: (suggest: boolean) => void;
}

const BookingFlightSuggestionTo: React.FC<Props> = ({flightArea, handleSetupDisplaySuggestionTo}) => {
    const VietnamFlights = [
        "Hanoi (HAN), Vietnam", 
        "Ho Chi Minh (SGN), Vietnam", 
        "Da Nang (DAD), Vietnam", 
        "Phu Quoc (PQC), Vietnam", 
        "Nha Trang (CXR), Vietnam", 
        "Buon Ma Thuot (BVR), Vietnam", 
        "Ca Mau (CAH), Vietnam", 
        "Can Tho (VCA), Vietnam", 
        "Chu Lai (VCL), Vietnam",
        "Con Dao (VCS), Vietnam", 
        "Da Lat (DLI), Vietnam", 
        "Dien Bien (DIN), Vietnam"
    ]

    const NorthEastAsiaFlights = [
        "Tokyo Narita (NRT), Japan", 
        "Tokyo Haneda (HND), Japan", 
        "Osaka (KIX), Japan", 
        "Nagoya (NGO), Japan",
    ]
  return (
    <div className = "z-50 absolute top-[43.5rem] bg-white h-[30.45rem] overflow-y-scroll setting-scrollbar overflow-x-hidden" style = {{left: "33rem", width: "23rem"}}>
        <div className = "relative left-[0.5rem]">
            {flightArea === "Vietnam" &&
                <div>
                    {VietnamFlights.map((flight) => {
                        return <div className = "relative bg-none left-[0.5rem] top-[0rem]" style = {{width: "20rem", height: "2rem", zIndex: "60", borderBottom: "0.25px solid gray"}}>
                            <p className = "font-space-grotesk relative top-[0rem] text-[#094c5b] font-bold">{flight}</p>
                        </div>
                    })}
                </div>
            }
            {flightArea === "northEastAsia" && 
                <div>
                    {NorthEastAsiaFlights.map((flight) => {
                        return <div className = "relative bg-none left-[0.5rem] top-[0rem]" style = {{width: "20rem", height: "2rem", zIndex: "60", borderBottom: "0.25px solid gray"}}>
                            <p className = "font-space-grotesk relative top-[0rem] text-[#094c5b] font-bold">{flight}</p>
                        </div>
                    })}
                </div>
            }
        </div>
        <div className = "absolute top-[0rem] right-[0rem]">
            <IoMdClose className = "w-[1.5rem] h-[1.5rem] hover:cursor-pointer" style = {{color: "gray"}} onClick = {() => handleSetupDisplaySuggestionTo(false)}/>
        </div>
    </div>
  )
}

export default BookingFlightSuggestionTo