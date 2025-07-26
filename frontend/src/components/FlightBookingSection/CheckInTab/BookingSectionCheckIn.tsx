import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFlightContext } from '../../../context/FlightContext/FlightContext'
import { FormInput, ActionButton } from '../shared'

type CheckInOption = 'reservationCode' | 'eTicket' | 'flyerNumber';

const BookingSectionCheckIn = () => {
  const [activeOption, setActiveOption] = useState<CheckInOption>('reservationCode')
  const [focusReservationCode, setFocusReservationCode] = useState(false)
  const [focusETicket, setFocusETicket] = useState(false)
  const [reservationCode, setReservationCode] = useState('')
  const [eTicket, setETicket] = useState('')

  const { setCheckinReservationCode, setCheckinTicket, setCheckinOption } = useFlightContext()

  const setupCheckinReservationCode = () => {
    if (!reservationCode.trim()) return;
    
    setCheckinReservationCode(reservationCode)
    localStorage.setItem('checkinReservationCode', reservationCode)
    setCheckinOption('reservation')
    localStorage.setItem('checkinOption', 'reservation')
  }

  const setupCheckinTicket = () => {
    if (!eTicket.trim()) return;
    
    setCheckinTicket(eTicket)
    localStorage.setItem('checkinTicket', eTicket)
    setCheckinOption('ticket')
    localStorage.setItem('checkinOption', 'ticket')
  }

  const checkInOptions = [
    {
      id: 'reservationCode' as CheckInOption,
      label: 'Reservation Code',
      description: 'Enter your 6-character reservation code'
    },
    {
      id: 'eTicket' as CheckInOption,
      label: 'eTicket Number',
      description: 'Enter your 13-digit ticket number'
    },
    {
      id: 'flyerNumber' as CheckInOption,
      label: 'Frequent Flyer Number',
      description: 'Enter your frequent flyer number'
    }
  ];

  const isButtonActive = (option: CheckInOption) =>
    activeOption === option
      ? 'bg-ahaGreen-1 text-white'
      : 'bg-white/60 text-ahaGreen-1 hover:bg-ahaGreen-1 hover:text-white'

  const isFormValid = () => {
    switch (activeOption) {
      case 'reservationCode':
        return reservationCode.trim().length >= 6;
      case 'eTicket':
        return eTicket.trim().length >= 10;
      default:
        return reservationCode.trim().length >= 6;
    }
  };

  const handleCheckIn = () => {
    switch (activeOption) {
      case 'eTicket':
        setupCheckinTicket();
        break;
      default:
        setupCheckinReservationCode();
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 p-4 md:p-6 bg-white/80 backdrop-blur-sm rounded-2xl mx-2 mb-4">
        <div className="text-center mb-6">
          <h2 className="text-lg md:text-xl font-bold text-ahaGreen-1 mb-2">
            Web Check-In
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            Web Check-in is available 24 to 1 hour before flight departure
          </p>
          <p className="text-xs text-gray-500">
            Please ensure you input the family name as it appears in your ticket
          </p>
        </div>

        {/* Option Selector */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {checkInOptions.map(({ id, label }) => (
            <button
              key={id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isButtonActive(id)}`}
              onClick={() => {
                setActiveOption(id)
                setReservationCode('')
                setETicket('')
                setFocusReservationCode(false)
                setFocusETicket(false)
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="space-y-6">
          {activeOption === 'reservationCode' && (
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <FormInput
                  id="reservation-code"
                  label="Reservation Code"
                  value={reservationCode}
                  onChange={(e) => setReservationCode(e.target.value.toUpperCase())}
                  isFocused={focusReservationCode}
                  setFocused={setFocusReservationCode}
                  placeholder="e.g. ABC123"
                  required
                />
              </div>
              <div className="w-full sm:w-auto">
                <Link to="/checkin-management">
                  <ActionButton
                    onClick={handleCheckIn}
                    variant="accent"
                    size="md"
                    disabled={!isFormValid()}
                    fullWidth
                    className="sm:w-auto sm:min-w-[120px]"
                  >
                    CHECK IN
                  </ActionButton>
                </Link>
              </div>
            </div>
          )}

          {activeOption === 'eTicket' && (
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <FormInput
                  id="e-ticket"
                  label="eTicket Number"
                  value={eTicket}
                  onChange={(e) => setETicket(e.target.value)}
                  isFocused={focusETicket}
                  setFocused={setFocusETicket}
                  placeholder="e.g. 123-4567890123"
                  required
                />
              </div>
              <div className="w-full sm:w-auto">
                <Link to="/checkin-management">
                  <ActionButton
                    onClick={handleCheckIn}
                    variant="accent"
                    size="md"
                    disabled={!isFormValid()}
                    fullWidth
                    className="sm:w-auto sm:min-w-[120px]"
                  >
                    CHECK IN
                  </ActionButton>
                </Link>
              </div>
            </div>
          )}

          {activeOption === 'flyerNumber' && (
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <FormInput
                  id="flyer-number"
                  label="Frequent Flyer Number"
                  value={reservationCode}
                  onChange={(e) => setReservationCode(e.target.value.toUpperCase())}
                  isFocused={focusReservationCode}
                  setFocused={setFocusReservationCode}
                  placeholder="e.g. FF123456789"
                  required
                />
              </div>
              <div className="w-full sm:w-auto">
                <Link to="/checkin-management">
                  <ActionButton
                    onClick={handleCheckIn}
                    variant="accent"
                    size="md"
                    disabled={!isFormValid()}
                    fullWidth
                    className="sm:w-auto sm:min-w-[120px]"
                  >
                    CHECK IN
                  </ActionButton>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center text-gray-500 max-w-md">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-lg font-medium mb-3">Quick Check-In</h3>
          <div className="space-y-2 text-sm">
            <p>✅ Save time at the airport</p>
            <p>✅ Choose your preferred seat</p>
            <p>✅ Get your boarding pass instantly</p>
            <p>✅ Available 24 hours before departure</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingSectionCheckIn
