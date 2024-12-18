import React from 'react'
import BookingFareRuleTable from './BookingFareRuleTable'

type Props = {}

const BookingFareRules = (props: Props) => {
  return (
    <div className = "">
        <p className = " text-3xl text-[#1A4532] font-bold">Fare Rules</p>
        <div>
            <div className = "">
                <p className = "text-2xl font-bold">Group 1:</p>
                <ul className = "text-lg">
                    <li>AHA Domestic flights in Vietnam</li>
                    <li>Other AHA International direct and connecting flights, excluding flights in Group 2</li>
                </ul>
            </div>
            <div className = " relative top-[2rem]">
                <p className = "text-2xl font-bold">Group 2:</p>
                <ul className = "text-lg">
                    <li>AHA International flights between Kazakhstan/ Australia (BNE, MEL, SYD, PER, ADL) and Vietnam</li>
                    <li>AHA International connecting flights from/to Australia (BNE, MEL, SYD, PER, ADL)</li>
                </ul>
            </div>
            <div className = "relative top-[3rem]">
                <BookingFareRuleTable />
            </div>
        </div>
    </div>
  )
}

export default BookingFareRules