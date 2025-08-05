import React from 'react'
import BookingFareRuleTable from './BookingFareRuleTable'

const BookingFareRules = () => {
  return (
    <div className="w-full max-w-[75vw] mx-auto space-y-10">
      {/* Title */}
      <h1 className="text-3xl text-[#1A4532] font-bold">Fare Rules</h1>

      {/* Group 1 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Group 1:</h2>
        <ul className="text-lg list-disc list-inside">
          <li>AHA Domestic flights in Vietnam</li>
          <li>Other AHA International direct and connecting flights, excluding flights in Group 2</li>
        </ul>
      </section>

      {/* Group 2 */}
      <section className="space-y-2">
        <h2 className="text-2xl font-bold">Group 2:</h2>
        <ul className="text-lg list-disc list-inside">
          <li>AHA International flights between Kazakhstan/ Australia (BNE, MEL, SYD, PER, ADL) and Vietnam</li>
          <li>AHA International connecting flights from/to Australia (BNE, MEL, SYD, PER, ADL)</li>
        </ul>
      </section>

      {/* Table */}
      <section>
        <BookingFareRuleTable />
      </section>
    </div>
  )
}

export default BookingFareRules
