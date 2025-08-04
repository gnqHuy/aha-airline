import { call, put, select, takeLatest } from "redux-saga/effects";
import { AddTickets } from "../../api/ticket";
import { RootState } from "../store";
import {
    createTicketsSagaRequest,
  setFlightTicketsId,
  setFlightTicketsRoundId,
  setResponseTicketData,
  setResponseTicketData1,
} from "../slice/bookingSlice";
function* handleCreateTicketsSaga(action: any): any {
  try {
    const { userId } = action.payload;

    const state: RootState = yield select();
    const { flightTickets, flightTicketsRound } = state.booking;
    const { roundTrip, selectedFlight, selectedFlightRound } = state.flight;

    const ticketRequest = {
      ...flightTickets,
      flightId: selectedFlight.id,
      bookedId: userId,
    };

    const response = yield call(AddTickets, ticketRequest);
    if (response?.data) yield put(setResponseTicketData(response.data));

    if (roundTrip && selectedFlightRound?.id) {
      const ticketRoundRequest = {
        ...flightTicketsRound,
        flightId: selectedFlightRound.id,
        bookedId: userId,
      };
      const response1 = yield call(AddTickets, ticketRoundRequest);
      if (response1?.data) yield put(setResponseTicketData1(response1.data));
    }
  } catch (error) {
    console.error("Create tickets saga failed:", error);
  }
}

export default function* bookingSaga() {
  yield takeLatest(createTicketsSagaRequest.type, handleCreateTicketsSaga);
}
