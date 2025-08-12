import TicketPreview from '../../components/TicketPreview/TicketPreview';
import { useNavigate } from 'react-router-dom';
import LayoutBooking from '../../layout/LayoutBooking';
import { SeatClass } from '../../object/enum/SeatClass';
import LayoutDefault from '../../layout/LayoutDefault';
import { useBookingTicket } from '../../store/hooks/useBookingTicket';

const TicketCard = () => {
  const { selectedPassenger, roundTrip, selectedFlight, 
      selectedFlightRound, selectedFlightClass, selectedFlightRoundClass } = useBookingTicket();
  
  const navigate = useNavigate();

  const handleConfirmButton = () => {
    navigate("passengerInfor");
  };

  // Check if no flights are selected
  if (!selectedFlight && !selectedFlightRound) {
    return (
      <div>
        <LayoutDefault>
          <div className="text-center text-red-500 text-2xl pt-4">
            No flight has been selected, or the flight details are incomplete. <br /> Please return to select your flight.
          </div>
        </LayoutDefault>
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
    <LayoutBooking>
      <div className="text-4xl font-bold text-ahaAmber-2 text-center pt-4 mb-8">Your Ticket</div>
      
      {/* Display selected flight and class */}
      {selectedFlight && (
        <div id="ticket-content" className="mx-auto mb-6">
          <TicketPreview flight={selectedFlight} classType={selectedFlightClass} />
        </div>
      )}
      
      {/* Display selected round-trip flight and class */}
      {selectedFlightRound && roundTrip && (
        <div id="ticket-content" className="mx-auto mb-6">
          <TicketPreview flight={selectedFlightRound} classType={selectedFlightRoundClass} />
        </div>
      )}

      {/* Total price section */}
      <div className="mx-auto text-right">
        <p className="text-3xl font-semibold">Total Price</p>
        <p className="text-2xl">VND {totalPrice.toLocaleString()}</p>
      </div>

      {/* Button to continue */}
      <div className="mx-auto text-right mt-4 mb-10">
        <button
          onClick={handleConfirmButton}
          className="btn-primary"
        >
          Confirm and continue
        </button>
      </div>
    </LayoutBooking>
  );
};

export default TicketCard;
