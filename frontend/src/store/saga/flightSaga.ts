import { call, put, takeLatest } from "redux-saga/effects";
import { getFromRequest } from "../../api/flightAPI";
import {
  fetchFlightsRequest,
  setFlights,
  setFlightsRound,
} from "../slice/flightSlice";

function* handleFetchFlights(action: any): any {
  try {
    const { fromIATA, toIATA, departureTime, isRoundTrip, returnDate } = action.payload;

    const response = yield call(getFromRequest, fromIATA, toIATA, departureTime);
    yield put(setFlights(response.data));

    if (isRoundTrip && returnDate) {
      const responseRound = yield call(getFromRequest, toIATA, fromIATA, returnDate);
      yield put(setFlightsRound(responseRound.data));
    }
  } catch (error) {
    console.error("Flight fetch error:", error);
  }
}

export default function* flightSaga() {
  yield takeLatest(fetchFlightsRequest.type, handleFetchFlights);
}
