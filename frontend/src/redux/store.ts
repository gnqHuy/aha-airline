import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import searchFlightStateReducer from "./slice/searchFlightStateSlice";
import flightReducer from "./slice/flightSlice";
import passengerReducer from "./slice/passengerSlice";
import bookingReducer from "./slice/bookingSlice"

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const persistConfig = {
    key: "root",
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ["auth", "flight"]
}

const rootReducer = combineReducers({
    auth: authReducer,
    searchFlightState: searchFlightStateReducer,
    flight: flightReducer,
    passenger: passengerReducer,
    booking: bookingReducer,
});

const persistedAuthReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedAuthReducer as unknown as Reducer<RootState>,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
