import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlightTickets, Ticket } from "../../object/ticket";
import { FlightTicketResponse } from "../../object/reponseTicketData";

interface BookingState {
  flightTickets: FlightTickets;
  flightTicketsRound: FlightTickets;
  responseTicketData: FlightTicketResponse | null;
  responseTicketData1: FlightTicketResponse | null;
}

const initialState: BookingState = {
  flightTickets: { flightId: "", bookedId: null, tickets: [] },
  flightTicketsRound: { flightId: "", bookedId: null, tickets: [] },
  responseTicketData: null,
  responseTicketData1: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addFlightTicket: (state, action: PayloadAction<Ticket>) => {
      state.flightTickets.tickets.push(action.payload);
    },
    setFlightTicketsId: (state, action: PayloadAction<{ flightId: string; bookedId: string }>) => {
      state.flightTickets.flightId = action.payload.flightId;
      state.flightTickets.bookedId = action.payload.bookedId;
    },
    addFlightTicketRound: (state, action: PayloadAction<Ticket>) => {
      state.flightTicketsRound.tickets.push(action.payload);
    },
    setFlightTicketsRoundId: (state, action: PayloadAction<{ flightId: string; bookedId: string }>) => {
      state.flightTicketsRound.flightId = action.payload.flightId;
      state.flightTicketsRound.bookedId = action.payload.bookedId;
    },
    setResponseTicketData: (state, action: PayloadAction<FlightTicketResponse>) => {
      state.responseTicketData = action.payload;
    },
    setResponseTicketData1: (state, action: PayloadAction<FlightTicketResponse>) => {
      state.responseTicketData1 = action.payload;
    },
    resetBooking: () => initialState,
  },
});

export const {
  addFlightTicket,
  setFlightTicketsId,
  addFlightTicketRound,
  setFlightTicketsRoundId,
  setResponseTicketData,
  setResponseTicketData1,
  resetBooking,
} = bookingSlice.actions;

export const createTicketsSagaRequest = createAction<{ userId: string }>("booking/createTicketsSagaRequest");

export default bookingSlice.reducer;