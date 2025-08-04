import { RootState } from "../store";

export const selectFlightTicketsState = (state: RootState) => state.booking.flightTickets;
export const selectFlightTicketsRoundState = (state: RootState) => state.booking.flightTicketsRound;
export const selectResponseTicketData = (state: RootState) => state.booking.responseTicketData;
export const selectResponseTicketData1 = (state: RootState) => state.booking.responseTicketData1;