import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchFlightState = {
  searchFlightState: boolean;
};

const initialState: SearchFlightState = {
  searchFlightState: false,
};

const searchFlightStateSlice = createSlice({
  name: "searchFlight",
  initialState,
  reducers: {
    setSearchFlightState: (state, action: PayloadAction<boolean>) => {
      state.searchFlightState = action.payload;
    },
  },
});

export const { setSearchFlightState } = searchFlightStateSlice.actions;
export default searchFlightStateSlice.reducer;
