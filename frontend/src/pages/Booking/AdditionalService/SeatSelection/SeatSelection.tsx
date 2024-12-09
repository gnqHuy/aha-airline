import React from 'react'

type Props = {}

const SeatSelection = (props: Props) => {
  return (
    <div className = "w-[70rem]">
        <p className = "font-space-grotesk text-3xl text-[#1A4532] font-bold">Seat Selection</p>
        <p className = "font-space-grotesk text-sm relative bottom-[1rem]">Do you want to be seated next to your travel companion? Or in your preferred seat?</p>
        <div>
            <p className = "font-space-grotesk text-2xl text-[#1A4532] font-bold">For Domestic route</p>
            <p className = "font-space-grotesk text-lg relative bottom-[1rem]">Enter code: <span className = "text-[#ebc94e] font-bold">AHAProvjp</span> - get <span className = "text-[#ebc94e] font-bold">15%</span> off </p>
            <p className = "font-space-grotesk text-lg relative bottom-[1rem]"><b>Sale period</b>: From 11 Nov to 21 Nov, 2024</p>
            <p className = "font-space-grotesk text-lg relative bottom-[1rem]"><b>Travel period</b>: From 11 Nov to 31 Dec, 2024</p>
            <p className = "font-space-grotesk text-lg relative bottom-[1rem]"><b>Conditions apply</b>: purchase during the booking process on the Website/Mobile App at least 24 hours before departure time</p>
        </div>

        {/* table1 */}
        <div>
            <div className = "flex">
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p></p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-sm font-bold">Front row seat</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-sm font-bold">Emergency Exit row seat</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-sm font-bold">Standard Seat</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-sm font-bold relative top-[-0.5rem]">Back seat
                    (window and aisle)</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#ebc94e] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-sm font-bold">No-Fee Seats</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11rem] h-[3rem] bg-[#b3afaf] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg font-bold relative top-[-0.5rem]">Economy Flex</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">110,000VND</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">Free</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">Free</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">Free</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">Free</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11rem] h-[3rem] bg-[#b3afaf] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "font-bold relative top-[-0.8rem]" style = {{fontSize: "16px"}}>Remaining fare classes</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">110,000VND</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">110,000VND</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">90,000VND</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">55,000VND</p>
                </div>
                <div className = "w-[11rem] h-[3rem] bg-[#1A4532] text-center font-space-grotesk border-x-[1px] border-y-[1px] border-solid border-white">
                    <p className = "text-lg relative top-[-0.4rem] text-[#ebc94e]">Free</p>
                </div>
            </div>
        </div>

        <div className = "relative top-[2rem] font-space-grotesk">
            <p className = "text-2xl text-[#1A4532] font-bold">Seating details</p>
            <p className = "text-lg relative bottom-[0.5rem]"><b>Front row seat:</b> These are the first 5-6 rows in the Economy class cabin. They are located near the aircraft doors, reducing the time needed to board and disembark.</p>
            <p className = "text-lg relative bottom-[0.5rem]"><b>Emergency exit row seats:</b> These seats are positioned alongside the emergency exits on the aircraft. Their location varies depending on the aircraft configuration. Extra Legroom emergency exit seats offer spacious legroom in front, allowing passengers to stretch their legs comfortably without obstruction from the seat in front.</p>
            <p className = "text-lg relative bottom-[0.5rem]"><b>Standard seats:</b> These are the standard seats in the Economy class cabin, starting from the rows behind the Front Seats up to the middle of the cabin (excluding seats near the emergency exits).</p>
            <p className = "text-lg relative bottom-[0.5rem]"><b>Back seats (window and aisle):</b> These seats are located at the window or aisle positions in the rear section of the Economy class cabin (excluding seats near the emergency exits).</p>
            <p className = "text-lg relative bottom-[0.5rem]"><b>No-Fee Seats:</b> These are the middle seats in the rear section of the Economy class cabin.</p>
        </div>
    </div>
  )
}

export default SeatSelection