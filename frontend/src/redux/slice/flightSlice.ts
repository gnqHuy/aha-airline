import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight } from "../../object/flight";
import { SeatClass } from "../../object/enum/SeatClass";
import { FlightPreviewType } from "../../object/flightPreview";

interface FlightState {
    selectedFlightPreview: FlightPreviewType | null,
    selectedFlight: Flight | null;
    selectedFlightRound: Flight | null;
    selectedFlightClass: SeatClass;
    selectedFlightRoundClass: SeatClass;
    roundTrip: boolean;
    returnDate: string;
}

const initialState: FlightState = {
    selectedFlightPreview: null,
    selectedFlight: null,
    selectedFlightRound: null,
    selectedFlightClass: SeatClass.Economy,
    selectedFlightRoundClass: SeatClass.Economy,
    roundTrip: false,
    returnDate: "",
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    setSelectedFlightPreview: (state, action: PayloadAction<FlightPreviewType>) => {
        state.selectedFlightPreview = action.payload;
    },
    setSelectedFlight: (state, action: PayloadAction<Flight>) => {
      state.selectedFlight = action.payload;
    },
    setSelectedFlightRound: (state, action: PayloadAction<Flight>) => {
      state.selectedFlightRound = action.payload;
    },
    setSelectedFlightClass: (state, action: PayloadAction<SeatClass>) => {
      state.selectedFlightClass = action.payload;
    },
    setSelectedFlightRoundClass: (state, action: PayloadAction<SeatClass>) => {
      state.selectedFlightRoundClass = action.payload;
    },
    setRoundTrip: (state, action: PayloadAction<boolean>) => {
      state.roundTrip = action.payload;
    },
    setReturnDate: (state, action: PayloadAction<string>) => {
      state.returnDate = action.payload;
    },
    clearFlightData: (state) => {
      return initialState;
    }
  },
});

export const {
    setSelectedFlightPreview,
    setSelectedFlight,
    setSelectedFlightRound,
    setSelectedFlightClass,
    setSelectedFlightRoundClass,
    setRoundTrip,
    setReturnDate,
    clearFlightData
} = flightSlice.actions;

export default flightSlice.reducer;
