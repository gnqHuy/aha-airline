import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFlightContext } from '../../../store/context/FlightContext'

const BookingSectionCheckIn = () => {
  const [reservationCode, setReservationCode] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  const { setCheckinReservationCode, setCheckinOption } = useFlightContext()

  const handleCheckIn = () => {
    if (!reservationCode.trim()) return

    setCheckinReservationCode(reservationCode)
    setCheckinOption('reservation')
    localStorage.setItem('checkinReservationCode', reservationCode)
    localStorage.setItem('checkinOption', 'reservation')
  }

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-end gap-3">
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            value={reservationCode}
            onChange={(e) => setReservationCode(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => !reservationCode && setIsFocused(false)}
            className="w-full border border-gray-300 rounded-2xl px-4 pt-5 pb-2 focus:outline-none"
          />
          <label
            htmlFor="reservationCode"
            className={`absolute left-3 transition-all pointer-events-none ${
              isFocused
                ? 'top-0 text-sm text-ahaAmber-2 font-bold mt-[1px] ml-[1px]'
                : 'top-3 text-base text-ahaAmber-2 font-bold'
            }`}
          >
            Reservation Code
          </label>
        </div>

        <Link to="/checkin-management" className="w-full md:w-auto my-auto">
          <button
            onClick={handleCheckIn}
            className="hover:bg-slate-50 hover:text-ahaAmber-2  hover:border-ahaAmber-2 text-sm bg-ahaAmber-2 text-white border-none px-5 py-2 rounded-2xl font-bold" 
          >
            Check In
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BookingSectionCheckIn
