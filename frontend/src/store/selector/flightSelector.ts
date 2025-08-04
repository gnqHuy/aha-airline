import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const selectFlightState = (state: RootState) => state.flight;

export const selectSelectedFlightPreview = (state: RootState) => state.flight.selectedFlightPreview;

export const selectSelectedFlight = (state: RootState) => state.flight.selectedFlight;

export const selectSelectedFlightRound = (state: RootState) => state.flight.selectedFlightRound;

export const selectSelectedFlightClass = (state: RootState) => state.flight.selectedFlightClass;

export const selectSelectedFlightRoundClass = (state: RootState) => state.flight.selectedFlightRoundClass;

export const selectIsRoundTrip = (state: RootState) => state.flight.roundTrip;

export const selectReturnDate = (state: RootState) => state.flight.returnDate;

export const selectFlightDetails = createSelector(
  [selectSelectedFlight, selectSelectedFlightClass],
  (selectedFlight, selectedFlightClass) => ({
    selectedFlight,
    selectedFlightClass,
  })
);

export const selectRoundTripDetails = createSelector(
  [selectSelectedFlightRound, selectSelectedFlightRoundClass, selectIsRoundTrip],
  (selectedFlightRound, selectedFlightRoundClass, isRoundTrip) => ({
    selectedFlightRound,
    selectedFlightRoundClass,
    isRoundTrip,
  })
);

export const selectFlights = (state: RootState) => state.flight.flights;
export const selectFlightsRound = (state: RootState) => state.flight.flightsRound;
