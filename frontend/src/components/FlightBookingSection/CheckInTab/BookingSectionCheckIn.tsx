import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useFlightContext } from '../../../store/context/FlightContext'

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
      ? 'bg-[#1a4532] text-[#ebc94e]'
      : 'hover:bg-[#1a4532] hover:text-[#ebc94e] transition duration-500'

  return (
    <section className=" shadow-md rounded-xl p-6 mx-auto mb-12">
      {/* <p className="text-[16px] font-bold text-[#1a4532] mb-2">
        Web Checkin is available 24 to 1 hour before flight departure
      </p>
      <p className="text-[16px] mb-6">
        Please ensure you input the family name as it appears in your ticket
      </p> */}

      {/* <div className="flex flex-wrap gap-4 mb-6">
        <button
          className={`w-[15rem] h-[2.5rem] rounded-[12px] text-[16px] ${isActive('reservationCode')}`}
          onClick={() => {
            setActiveOption('reservationCode')
            setReservationCode('')
          }}
        >
          Enter your reservation Code
        </button>
        <button
          className={`w-[15rem] h-[2.5rem] rounded-[12px] text-[16px] ${isActive('eTicket')}`}
          onClick={() => {
            setActiveOption('eTicket')
            setETicket('')
          }}
        >
          eTicket Number
        </button>
        <button
          className={`w-[15rem] h-[2.5rem] rounded-[12px] text-[16px] ${isActive('flyerNumber')}`}
          onClick={() => {
            setActiveOption('flyerNumber')
            setReservationCode('')
          }}
        >
          Frequent Flyer Number
        </button>
      </div> */}

      {activeOption === 'reservationCode' && (
        <div className="flex flex-wrap gap-6 items-start">
          <div className="flex flex-col">
            <label
              className={`transition-all duration-300 text-sm ${
                focusReservationCode ? 'text-[#1a4532] -mb-2' : 'text-gray-500'
              }`}
            >
              Reservation Code
            </label>
            <input
              type="text"
              className="w-[18rem] border-b border-black bg-transparent outline-none text-sm py-1"
              onFocus={() => setFocusReservationCode(true)}
              onBlur={() => reservationCode.length === 0 && setFocusReservationCode(false)}
              value={reservationCode}
              onChange={(e) => setReservationCode(e.target.value)}
            />
          </div>
          <Link to="/checkin-management">
            <button
              className="w-[9rem] h-[3rem] text-[18px] bg-[#ebc94e] rounded-md"
              onClick={setupCheckinReservationCode}
            >
              CHECK IN
            </button>
          </Link>
        </div>
      )}

        {/* {activeOption === 'eTicket' && (
          <div className="flex flex-wrap gap-6 items-start">
            <div className="flex flex-col">
              <label
                className={`transition-all duration-300 text-sm ${
                  focusEticket ? 'text-[#1a4532] -mb-2' : 'text-gray-500'
                }`}
              >
                eTicket
              </label>
              <input
                type="text"
                className="w-[18rem] border-b border-black bg-transparent outline-none text-sm py-1"
                onFocus={() => setFocusEticket(true)}
                onBlur={() => eTicket.length === 0 && setFocusEticket(false)}
                value={eTicket}
                onChange={(e) => setETicket(e.target.value)}
              />
            </div>
            <Link to="/checkin-management">
              <button
                className="w-[9rem] h-[3rem] text-[18px] bg-[#ebc94e] rounded-md"
                onClick={setupCheckinTicket}
              >
                CHECK IN
              </button>
            </Link>
          </div>
        )}

        {activeOption === 'flyerNumber' && (
          <div className="flex flex-wrap gap-6 items-start">
            <div className="flex flex-col">
              <label
                className={`transition-all duration-300 text-sm ${
                  focusReservationCode ? 'text-[#1a4532] -mb-2' : 'text-gray-500'
                }`}
              >
                Reservation Code
              </label>
              <input
                type="text"
                className="w-[18rem] border-b border-black bg-transparent outline-none text-sm py-1"
                onFocus={() => setFocusReservationCode(true)}
                onBlur={() => reservationCode.length === 0 && setFocusReservationCode(false)}
                value={reservationCode}
                onChange={(e) => setReservationCode(e.target.value)}
              />
            </div>
            <Link to="/checkin-management">
              <button
                className="w-[9rem] h-[3rem] text-[18px] bg-[#ebc94e] rounded-md"
                onClick={setupCheckinReservationCode}
              >
                CHECK IN
              </button>
            </Link>
          </div>
        )} */}
    </section>
  )
}

export default BookingSectionCheckIn
