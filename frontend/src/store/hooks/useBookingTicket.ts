import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginRequest, logout, registerRequest } from "../slice/authSlice";
import { selectSearchFlightState } from "../selector/searchFlightStateSelector";
import { FlightPreviewType } from "../../object/flightPreview";
import { fetchFlightsRequest, setReturnDate, setRoundTrip, setSelectedFlight, setSelectedFlightClass, setSelectedFlightPreview, setSelectedFlightRound, setSelectedFlightRoundClass } from "../slice/flightSlice";
import { setSearchFlightState } from "../slice/searchFlightStateSlice";
import { PassengerState, setPassengers } from "../slice/passengerSlice";
import { isFlightTicketRoundSelected, isFlightTicketSelected, selectFlights, selectFlightsRound, selectIsRoundTrip, selectReturnDate, selectSelectedFlight, selectSelectedFlightClass, selectSelectedFlightPreview, selectSelectedFlightRound, selectSelectedFlightRoundClass } from "../selector/flightSelector";
import { selectPassengers } from "../selector/passengerSelector";
import { addFlightTicket, addFlightTicketRound, createTicketsSagaRequest, setFlightTicketsId, setFlightTicketsRoundId } from "../slice/bookingSlice";
import { selectFlightTicketsRoundState, selectFlightTicketsState, selectResponseTicketData, selectResponseTicketData1 } from "../selector/bookingSelector";
import { useEffect, useState } from "react";

export const useBookingTicket = () => {
    const dispatch = useDispatch();
    const searchFlightState = useSelector(selectSearchFlightState);
    const selectedFlightPreview = useSelector(selectSelectedFlightPreview);
    const roundTrip = useSelector(selectIsRoundTrip);
    const returnDate = useSelector(selectReturnDate);
    const selectedFlight = useSelector(selectSelectedFlight);
    const selectedFlightRound = useSelector(selectSelectedFlightRound);
    const selectedFlightClass = useSelector(selectSelectedFlightClass);
    const selectedFlightRoundClass = useSelector(selectSelectedFlightRoundClass);
    const selectedPassenger = useSelector(selectPassengers);
    const flightTickets = useSelector(selectFlightTicketsState);
    const flightTicketsRound = useSelector(selectFlightTicketsRoundState);
    const responseTicketData = useSelector(selectResponseTicketData);
    const responseTicketData1 = useSelector(selectResponseTicketData1);
    const isTicketSelected = useSelector(isFlightTicketSelected);
    const isRoundTicketSelected = useSelector(isFlightTicketRoundSelected);

    const isFlightSelected =
        selectedFlightPreview?.fromAirport?.city?.name &&
        selectedFlightPreview?.toAirport?.city?.name;

    const flights = useSelector(selectFlights);
    const flightsRound = useSelector(selectFlightsRound);

    useEffect(() => {
    if (isFlightSelected) {
        dispatch(fetchFlightsRequest({
        fromIATA: selectedFlightPreview.fromAirport.iata,
        toIATA: selectedFlightPreview.toAirport.iata,
        departureTime: selectedFlightPreview.departureTime,
        isRoundTrip: roundTrip,
        returnDate: returnDate,
        }));
    }
    }, [isFlightSelected, selectedFlightPreview]);
    
  return {
    isTicketSelected, isRoundTicketSelected, responseTicketData, responseTicketData1, isFlightSelected, flights, flightsRound, searchFlightState, flightTickets, flightTicketsRound, selectedFlightPreview, roundTrip, returnDate, selectedFlight, selectedFlightRound, selectedFlightClass, selectedFlightRoundClass, selectedPassenger,
    setSearchFlightState: () => dispatch(setSearchFlightState(!searchFlightState)),
    setSelectedPassengers: (passengers: PassengerState) => dispatch(setPassengers(passengers)),
    setIsRoundTrip: (state: boolean) => dispatch(setRoundTrip(state)),
    setReturnDate: (date: any) => dispatch(setReturnDate(date)),
    setSelectedFlightPreview: (flightPreview: any) => dispatch(setSelectedFlightPreview(flightPreview)),
    setSelectedFlightRound: (flight: any) => dispatch(setSelectedFlightRound(flight)),
    setSelectedFlightRoundClass: (classType: any) => dispatch(setSelectedFlightRoundClass(classType)),
    setSelectedFlight: (flight: any) => dispatch(setSelectedFlight(flight)),
    setSelectedFlightClass: (classType: any) => dispatch(setSelectedFlightClass(classType)),
    addFlightTicket: (ticket: any) => dispatch(addFlightTicket(ticket)),
    addFlightTicketRound: (ticket: any) => dispatch(addFlightTicketRound(ticket)),
    setFlightTicketsId: (object: any) => dispatch(setFlightTicketsId(object)),
    setFlightTicketsRoundId: (object: any) => dispatch(setFlightTicketsRoundId(object)),
    createTickets: (id: any) => dispatch(createTicketsSagaRequest({ userId: id }))
  };
};
