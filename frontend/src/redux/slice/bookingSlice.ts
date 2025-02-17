import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlightTickets, Ticket } from "../../object/ticket";
import { RootState } from "../store";

interface BookingState {
  flightTickets: FlightTickets;
  flightTicketsRound: FlightTickets;
}

const initialState: BookingState = {
  flightTickets: { flightId: "", bookedId: null, tickets: [] },
  flightTicketsRound: { flightId: "", bookedId: null, tickets: [] },
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
  },
});

export const { addFlightTicket, setFlightTicketsId, addFlightTicketRound, setFlightTicketsRoundId } =
  bookingSlice.actions;
export default bookingSlice.reducer;
