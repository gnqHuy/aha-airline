import { RootState } from "../store";

export const selectFlightTicketsState = (state: RootState) => state.booking.flightTickets;
export const selectFlightTicketsRoundState = (state: RootState) => state.booking.flightTicketsRound;