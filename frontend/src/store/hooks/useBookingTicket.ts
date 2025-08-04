import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { loginRequest, logout, registerRequest } from "../slice/authSlice";
import { selectSearchFlightState } from "../selector/searchFlightStateSelector";
import { FlightPreviewType } from "../../object/flightPreview";
import { setReturnDate, setRoundTrip, setSelectedFlight, setSelectedFlightClass, setSelectedFlightPreview, setSelectedFlightRound, setSelectedFlightRoundClass } from "../slice/flightSlice";
import { setSearchFlightState } from "../slice/searchFlightStateSlice";
import { PassengerState, setPassengers } from "../slice/passengerSlice";
import { selectIsRoundTrip, selectReturnDate, selectSelectedFlight, selectSelectedFlightClass, selectSelectedFlightPreview, selectSelectedFlightRound, selectSelectedFlightRoundClass } from "../selector/flightSelector";
import { selectPassengers } from "../selector/passengerSelector";
import { addFlightTicket, addFlightTicketRound, setFlightTicketsId, setFlightTicketsRoundId } from "../slice/bookingSlice";
import { selectFlightTicketsRoundState, selectFlightTicketsState } from "../selector/bookingSelector";
import { useEffect, useState } from "react";
import { getFromRequest } from "../../api/flightAPI";
import { Flight } from "../../object/flight";
import { AddTickets } from "../../api/ticket";
import { FlightTicketResponse } from "../../object/reponseTicketData";

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

    const [flights, setFlights] = useState<Flight[]>([]);
    const [flightsRound, setFlightsRound] = useState<Flight[]>([]);
    
    const isFlightSelected =
    selectedFlightPreview &&
    selectedFlightPreview.fromAirport.city.name &&
    selectedFlightPreview.toAirport.city.name;

    useEffect(() => {
        if (isFlightSelected) {
        const fetchData = async () => {
            try {
            const response = await getFromRequest(
            selectedFlightPreview.fromAirport.iata,
            selectedFlightPreview.toAirport.iata,
            selectedFlightPreview.departureTime);
            setFlights(response.data);
            if (roundTrip) {
                const response1 = await getFromRequest(
                selectedFlightPreview.toAirport.iata,
                selectedFlightPreview.fromAirport.iata,
                returnDate);
                setFlightsRound(response1.data);
            }
            } catch (err) {

            }
        };
        fetchData();
        }
    }, [isFlightSelected, selectedFlightPreview]);

    const [responseTicketData, setResponseTicketData] = useState<FlightTicketResponse | null>(null);
    const [responseTicketData1, setResponseTicketData1] = useState<FlightTicketResponse | null>(null);

    const createTickets = async (userId: string | undefined) => {
        if (!userId) return;

        try {
            dispatch(setFlightTicketsId({ flightId: selectedFlight?.id || "", bookedId: userId }));
            const response = await AddTickets(flightTickets);
            setResponseTicketData(response.data);

            if (roundTrip) {
            dispatch(setFlightTicketsRoundId({ flightId: selectedFlightRound?.id || "", bookedId: userId }));
            const response1 = await AddTickets(flightTicketsRound);
            setResponseTicketData1(response1.data);
            }
        } catch (err) {

        } finally {

        }
    };
    
    
  return {
    responseTicketData, responseTicketData1, isFlightSelected, flights, flightsRound, searchFlightState, flightTickets, flightTicketsRound, selectedFlightPreview, roundTrip, returnDate, selectedFlight, selectedFlightRound, selectedFlightClass, selectedFlightRoundClass, selectedPassenger,
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
    createTickets
  };
};
