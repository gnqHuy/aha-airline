import React, { useEffect, useState } from "react";
import TicketPreview from "../../components/TicketPreview/TicketPreview";

import LayoutBooking from "../../layout/LayoutBooking";
import LayoutDefault from "../../layout/LayoutDefault";
import { Flight } from "../../object/flight";
import { SeatClass } from "../../object/enum/SeatClass";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useBookingTicket } from "../../store/hooks/useBookingTicket";

const TicketPage: React.FC = () => {
  const { isFlightSelected, flights, flightsRound, roundTrip, selectedFlight, 
    selectedFlightRound, selectedFlightClass, selectedFlightRoundClass, 
    setSelectedFlightRound, setSelectedFlightRoundClass, setSelectedFlight, setSelectedFlightClass} = useBookingTicket();
  const navigate = useNavigate();
  const [checkFlight, setCheckFlight] = useState<boolean>(false);
  const [checkFlightRound, setCheckFlightRound] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();

  if (flights == null) {
    return <div>
            <LayoutDefault>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </LayoutDefault>
          </div>;
  }
  if ( flightsRound == null && roundTrip ) {
    return <div>
            <LayoutDefault>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </LayoutDefault>
          </div>;
  }

  if (!isFlightSelected) {
    return (
      <LayoutDefault>
        <div className="text-center text-red-500 text-2xl pt-4">
          No flight has been selected, or the flight details are incomplete.
          <br /> Please return to select your flight.
        </div>
      </LayoutDefault>
    );
  }

  const handleSelectFlight = (flight: Flight, classType: SeatClass) => {
    setSelectedFlight(flight);
    setSelectedFlightClass(classType);
    setCheckFlight(true);
    if (classType == SeatClass.Economy) {
      enqueueSnackbar( "Economy class selected successfully for your departure!", {variant: "success"});
    }
    else if (classType == SeatClass.Business) {
      enqueueSnackbar( "Business class selected successfully! for your departure!", {variant: "success"});
    }
  };

  const handleSelectFlightRound = (flight: Flight, classType: SeatClass) => {
    setSelectedFlightRound(flight);
    setSelectedFlightRoundClass(classType);
    setCheckFlightRound(true);
    if (classType == SeatClass.Economy) {
      enqueueSnackbar( "Economy class selected successfully for your retun flight!", {variant: "success"});
    }
    else if (classType == SeatClass.Business) {
      enqueueSnackbar( "Business class selected successfully! for your retun flight!", {variant: "success"});
    }
  };

  const handleConfirmButton = () => {
    const isFlightSelected = checkFlight && (roundTrip ? checkFlightRound : true);
    
    if (isFlightSelected) {
      enqueueSnackbar("Tickets booked successfully!", {variant: "success"});
      navigate("ticketCart");
    } else {
      enqueueSnackbar(roundTrip ? "Please choose both outbound and return flights." : "Please choose a flight.", {variant: "error"});
    }
  };

  return (
    <LayoutBooking>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            Available Tickets
          </h1>
          
          <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">
              Depart
            </h1>
            
            {flights.length === 0 ? (
              <p className="mx-auto text-2xl text-center">
                Currently, there are no flights available for your selected route.<br /> 
                Please consider choosing an alternative option or adjusting your search criteria. <br />
                <Link to={"/"} className="no-underline text-xl text-ahaAmber-2">Back to HomePage</Link>
              </p> 
            ) : (
              flights.map((flight) => (
                <div key={flight.id}>
                  <TicketPreview flight={flight} classType={SeatClass.None} handleSelectedFlight={handleSelectFlight}/>
                </div>
              ))
              
            )}
          </div>
          
          {(flightsRound.length > 0 && roundTrip) && (
            <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
              <h1 className="text-2xl font-bold text-center mb-6">
                Return
              </h1>
              
              {flightsRound.map((flight) => (
                <div key={flight.id}>
                  <TicketPreview flight={flight} classType={SeatClass.None} handleSelectedFlight={handleSelectFlightRound}/>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedFlight &&
          <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto mb-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                Selected Flight
            </h1>
            <TicketPreview flight={selectedFlight} classType={selectedFlightClass}/>
            { selectedFlightRound && <TicketPreview flight={selectedFlightRound} classType={selectedFlightRoundClass}/>
            }
          </div>
        }
        {flights.length === 0 ? (
              <></>
            ) : (
              <div className="flex items-center justify-center p-4">
                <button
                  onClick={handleConfirmButton} 
                  className="my-auto px-6 py-2 text-ahaAmber-2 text-base cursor-pointer border-ahaAmber-2 font-semibold hover:bg-ahaAmber-2 hover:text-white rounded-md">
                  Confirm and continue
                </button>
              </div>   
            )}
      </div>
    </LayoutBooking>

  );
};

export default TicketPage;