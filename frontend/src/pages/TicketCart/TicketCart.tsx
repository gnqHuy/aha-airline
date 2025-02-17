import React from 'react';
import { useFlightContext } from '../../context/FlightContext/FlightContext';
import TicketPreview from '../../components/TicketPreview/TicketPreview';
import { useNavigate } from 'react-router-dom';
import Layout1 from '../../components/Layout/Layout1';
import { SeatClass } from '../../object/enum/SeatClass';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { selectIsRoundTrip, selectSelectedFlight, selectSelectedFlightClass, selectSelectedFlightRound, selectSelectedFlightRoundClass } from '../../redux/selector/flightSelector';
import { selectPassengers } from '../../redux/selector/passengerSelector';

type Props = {};

const TicketCard: React.FC<Props> = () => {
  const selectedFlight = useSelector(selectSelectedFlight);
  const selectedFlightRound = useSelector(selectSelectedFlightRound);
  const selectedFlightClass = useSelector(selectSelectedFlightClass);
  const selectedFlightRoundClass = useSelector(selectSelectedFlightRoundClass);
  const roundTrip = useSelector(selectIsRoundTrip);
  const selectedPassenger = useSelector(selectPassengers);
  
  const navigate = useNavigate();

  const handleConfirmButton = () => {
    navigate("passengerInfor");
  };

  // Check if no flights are selected
  if (!selectedFlight && !selectedFlightRound) {
    return (
      <div>
        <Layout>
          <div className="text-center text-red-500 text-2xl pt-4">
            No flight has been selected, or the flight details are incomplete. <br /> Please return to select your flight.
          </div>
        </Layout>
      </div>
    );
  }

  // Check if selectedPassenger is valid (to avoid errors if it's null or undefined)
  const passengerCount = selectedPassenger
    ? selectedPassenger.adults + selectedPassenger.children + selectedPassenger.infants
    : 0;

  let totalPrice = 0;
  
  if (selectedFlight) {
    if (selectedFlightClass === SeatClass.Economy) {
      totalPrice += selectedFlight.economyPrice * passengerCount;
    } else if (selectedFlightClass === SeatClass.Business) {
      totalPrice += selectedFlight.businessPrice * passengerCount;
    }
  }

  if (selectedFlightRound) {
    if (selectedFlightClass === SeatClass.Economy) {
      totalPrice += selectedFlightRound.economyPrice * passengerCount;
    } else if (selectedFlightClass === SeatClass.Business) {
      totalPrice += selectedFlightRound.businessPrice * passengerCount;
    }
  }

  return (
    <Layout1>
      <div className="text-3xl font-bold text-center text-gray-800 mb-6 pt-6">Your Ticket</div>
      
      {/* Display selected flight and class */}
      {selectedFlight && (
        <div id="ticket-content" className="w-[70%] mx-auto mb-6">
          <TicketPreview flight={selectedFlight} classType={selectedFlightClass} />
        </div>
      )}
      
      {/* Display selected round-trip flight and class */}
      {selectedFlightRound && roundTrip && (
        <div id="ticket-content" className="w-[70%] mx-auto mb-6">
          <TicketPreview flight={selectedFlightRound} classType={selectedFlightRoundClass} />
        </div>
      )}

      {/* Total price section */}
      <div className="w-[70%] mx-auto text-right">
        <p className="text-3xl font-semibold">Total Price</p>
        <p className="text-2xl">VND {totalPrice.toLocaleString()}</p>
      </div>

      {/* Button to continue */}
      <div className="w-[70%] mx-auto text-right mt-4 mb-10">
        <button
          onClick={handleConfirmButton}
          className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md"
        >
          Confirm and continue
        </button>
      </div>
    </Layout1>
  );
};

export default TicketCard;
