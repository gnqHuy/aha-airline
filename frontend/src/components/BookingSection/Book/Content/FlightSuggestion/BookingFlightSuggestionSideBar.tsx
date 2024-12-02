import React, { useState } from 'react'

interface Props {
    flightArea: string;
    handleSetupFlightArea: (area: string) => void;
}

const BookingFlightSuggestionSideBar: React.FC<Props> = ({flightArea, handleSetupFlightArea}) => {
  return (
    <div className = "h-[34.5rem] w-[12rem] overflow-y-hidden absolute top-[43.5rem]" style = {{zIndex: "60", left: "2rem"}}>
        <div className = {flightArea === "Vietnam" ? "bg-[white] w-[12rem] h-[3rem] relative text-left text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left text-[#ebc94e] hover:cursor-pointer"} onClick = {() => handleSetupFlightArea("Vietnam")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">VIETNAM</p>
        </div>
        <div className = {flightArea === "northEastAsia" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("northEastAsia")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">NORTH EAST ASIA</p>
        </div>
        <div className = {flightArea === "southEastAsia" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("southEastAsia")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">SOUTH EAST ASIA</p>
        </div>
        <div className = {flightArea === "indoChina" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("indoChina")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">INDOCHINA</p>
        </div>
        <div className = {flightArea === "southAsia" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("southAsia")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">SOUTH ASIA</p>
        </div>
        <div className = {flightArea === "europe" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("europe")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">EUROPE</p>
        </div>
        <div className = {flightArea === "oceania" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("oceania")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">OCEANIA</p>
        </div>
        <div className = {flightArea === "northAmerica" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("northAmerica")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">NORTH AMERICA</p>
        </div>
        <div className = {flightArea === "middleEast" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("middleEast")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">MIDDLE EAST</p>
        </div>
        <div className = {flightArea === "africa" ? "bg-[white] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#094c5b]" : "bg-[#094c5b] w-[12rem] h-[3rem] relative text-left top-[0rem] text-[#ebc94e] hover:cursor-pointer"} style = {{borderTop: "0.2px solid white"}} onClick = {() => handleSetupFlightArea("africa")}>
            <p className = "absolute font-space-grotesk left-[1rem] top-[0rem]">AFRICA</p>
        </div>
    </div>
  )
}

export default BookingFlightSuggestionSideBar