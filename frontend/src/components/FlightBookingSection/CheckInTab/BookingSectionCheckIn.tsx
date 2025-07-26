import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useFlightContext } from '../../../context/FlightContext/FlightContext'

const BookingSectionCheckIn = () => {
  const [activeOption, setActiveOption] = useState<'reservationCode' | 'eTicket' | 'flyerNumber'>('reservationCode')
  const [focusReservationCode, setFocusReservationCode] = useState(false)
  const [reservationCode, setReservationCode] = useState('')
  const [eTicket, setETicket] = useState('')

  const { setCheckinReservationCode, setCheckinTicket, setCheckinOption } = useFlightContext()

  const setupCheckinReservationCode = () => {
    setCheckinReservationCode(reservationCode)
    localStorage.setItem('checkinReservationCode', reservationCode)
    setCheckinOption('reservation')
    localStorage.setItem('checkinOption', 'reservation')
  }

  const setupCheckinTicket = () => {
    setCheckinTicket(eTicket)
    localStorage.setItem('checkinTicket', eTicket)
    setCheckinOption('ticket')
    localStorage.setItem('checkinOption', 'ticket')
  }

  const isActive = (option: string) =>
    activeOption === option
      ? 'bg-ahaGreen-1 text-white'
      : 'hover:bg-ahaGreen-1 hover:text-white transition duration-300'

  return (
    <div className="w-full h-full py-4">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <p className="text-sm sm:text-base font-semibold text-ahaGreen-0">
            Web Check-in is available 24 to 1 hour before flight departure
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            Please ensure you input the family name as it appears in your ticket
          </p>
        </div>

        {/* Option Tabs - Currently only showing reservationCode option */}
        {/* Uncomment below if you want multiple options */}
        {/*
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <button
            className={`flex-1 min-w-[120px] h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-medium ${isActive('reservationCode')}`}
            onClick={() => {
              setActiveOption('reservationCode')
              setReservationCode('')
            }}
          >
            Reservation Code
          </button>
          <button
            className={`flex-1 min-w-[120px] h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-medium ${isActive('eTicket')}`}
            onClick={() => {
              setActiveOption('eTicket')
              setETicket('')
            }}
          >
            eTicket Number
          </button>
          <button
            className={`flex-1 min-w-[120px] h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-medium ${isActive('flyerNumber')}`}
            onClick={() => {
              setActiveOption('flyerNumber')
              setReservationCode('')
            }}
          >
            Frequent Flyer
          </button>
        </div>
        */}

        {activeOption === 'reservationCode' && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 bg-gray-100 px-4 py-4 rounded-2xl">
            <div className="relative flex-1">
              <label
                className={`
                  absolute left-0 transition-all duration-300 pointer-events-none text-sm font-medium
                  ${focusReservationCode || reservationCode 
                    ? '-top-2 text-ahaGreen-0 text-xs' 
                    : 'top-2 text-gray-500'
                  }
                `}
              >
                Reservation Code
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-ahaGreen-0 outline-none bg-transparent py-2 pt-4 text-base focus:border-ahaGreen-1 transition-colors"
                onFocus={() => setFocusReservationCode(true)}
                onBlur={() => reservationCode.length === 0 && setFocusReservationCode(false)}
                value={reservationCode}
                onChange={(e) => setReservationCode(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0">
              <Link to="/checkin-management">
                <button
                  className="bg-ahaAmber-2 text-white font-bold py-2 px-6 rounded-full hover:bg-ahaAmber-3 transition-colors w-full sm:w-auto min-w-[120px]"
                  onClick={setupCheckinReservationCode}
                >
                  CHECK IN
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Additional options - currently commented out */}
        {/* 
        {activeOption === 'eTicket' && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 bg-gray-100 px-4 py-4 rounded-2xl">
            <div className="relative flex-1">
              <label className={...}>eTicket</label>
              <input ... />
            </div>
            <div className="flex-shrink-0">
              <Link to="/checkin-management">
                <button ... onClick={setupCheckinTicket}>CHECK IN</button>
              </Link>
            </div>
          </div>
        )}
        */}
      </div>
    </div>
  )
}

export default BookingSectionCheckIn
