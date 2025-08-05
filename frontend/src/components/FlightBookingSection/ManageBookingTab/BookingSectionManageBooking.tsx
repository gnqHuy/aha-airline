import React, { useState } from 'react';
import { GetByReservationOrTicketCode } from '../../../api/ticket';
import ManageBookingInfo from './ManageBookingInfo';
import { useFlightContext } from '../../../store/context/FlightContext';

const BookingSectionManageBooking = () => {
  const [isFocusReservation, setIsFocusReservation] = useState(false);
  const [reservationCode, setReservationCode] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);
  const [storeReservationCode, setStoreReservationCode] = useState('');
  const [reservations, setReservations] = useState<any[]>([]);
  const { setManageBookingReservationCode } = useFlightContext();

  const handleSearch = () => {
    if (reservationCode.trim()) {
      fetchData();
      setDisplayInfo(true);
      setStoreReservationCode(reservationCode.trim());
      setManageBookingReservationCode(reservationCode.trim());
      localStorage.setItem('manageBookingReservationCode', reservationCode.trim());
      setReservationCode('');
      setIsFocusReservation(false);
    } else {
      setReservationCode('');
      setIsFocusReservation(false);
    }
  };

  const handleDisplayInfo = () => {
    setDisplayInfo(!displayInfo);
  };

  const fetchData = async () => {
    try {
      const response = await GetByReservationOrTicketCode(reservationCode.trim());
      setReservations(response.data);
      console.log('Data reservation:', response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 shadow-xl rounded-2xl">
      <div className="flex flex-col md:flex-row items-end gap-3">
        {/* Floating Input */}
        <div className="relative w-full md:flex-1">
          <input
            type="text"
            id="reservationCode"
            value={reservationCode}
            onFocus={() => setIsFocusReservation(true)}
            onBlur={() => {
              if (reservationCode.length === 0) setIsFocusReservation(false);
            }}
            onChange={(e) => setReservationCode(e.target.value)}
            className="w-full border border-gray-300 rounded-2xl px-4 pt-5 pb-2 focus:outline-none"
            placeholder=" "
          />
          <label
            htmlFor="reservationCode"
            className={`absolute left-3 transition-all pointer-events-none ${
              isFocusReservation
                ? 'top-0 text-sm text-ahaAmber-2 font-bold mt-[1px] ml-[1px]'
                : 'top-3 text-base text-ahaAmber-2 font-bold'
            }`}
          >
            Reservation Code/Ticket Number
          </label>
        </div>

        {/* Button */}
        <button
            onClick={handleSearch}
            className="hover:bg-slate-50 hover:text-ahaAmber-2  hover:border-ahaAmber-2 text-sm bg-ahaAmber-2 text-white border-none px-5 py-2 rounded-2xl font-bold my-auto"
        >
          Search
        </button>
      </div>

      {/* Info Section */}
      {displayInfo && (
        <div className="mt-8">
          <ManageBookingInfo
            handleDisplayInfo={handleDisplayInfo}
            reservations={reservations}
            storeReservationCode={storeReservationCode}
          />
        </div>
      )}
    </div>
  );
};

export default BookingSectionManageBooking;
