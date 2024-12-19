import { createSlice } from "@reduxjs/toolkit";
import { UserStore } from "../../types/user";

export interface InitialAuthState {
    // user: UserStore | null,
    accessToken: string | null
}

const initialState : InitialAuthState = {
    // user: null,
    accessToken: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            // state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
        },
        logout: (state) => {
            // state.user = null;
            state.accessToken = null;
        }
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;