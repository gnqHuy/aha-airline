import { RootState } from "../store";

export const selectPassengers = (state: RootState) => state.passenger;
export const selectTotalPassengers = (state: RootState) =>
    state.passenger.adults + state.passenger.children + state.passenger.infants;
