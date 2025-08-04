import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PassengerState {
    adults: number;
    children: number;
    infants: number;
}

const initialState: PassengerState = {
    adults: 1,
    children: 0,
    infants: 0
};

const passengerSlice = createSlice({
    name: "passenger",
    initialState,
    reducers: {
        setPassengers: (state, action: PayloadAction<PassengerState>) => {
            return action.payload;
        },
        incrementPassenger: (state, action: PayloadAction<"adults" | "children" | "infants">) => {
            state[action.payload] += 1;
        },
        decrementPassenger: (state, action: PayloadAction<"adults" | "children" | "infants">) => {
            if (state[action.payload] > 0) {
                state[action.payload] -= 1;
            }
        },
        resetPassengers: () => initialState,
    },
});

export const { setPassengers, incrementPassenger, decrementPassenger, resetPassengers } = passengerSlice.actions;
export default passengerSlice.reducer;
