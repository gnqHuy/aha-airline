import { RootState } from "../store";

export const selectSearchFlightState = (state: RootState) => state.searchFlightState.searchFlightState;
