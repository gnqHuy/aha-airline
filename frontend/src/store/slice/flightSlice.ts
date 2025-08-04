import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Flight } from "../../object/flight";
import { SeatClass } from "../../object/enum/SeatClass";
import { FlightPreviewType } from "../../object/flightPreview";
import { AircraftStatus } from "../../object/enum/AircraftStatus";
import { FlightStatus } from "../../object/enum/FlightStatus";

interface FlightState {
    flights: Flight[];
    flightsRound: Flight[];
    selectedFlightPreview: FlightPreviewType | null,
    selectedFlight: Flight;
    selectedFlightRound: Flight;
    selectedFlightClass: SeatClass;
    selectedFlightRoundClass: SeatClass;
    roundTrip: boolean;
    returnDate: string;
}

const initialState: FlightState = {
    flights: [],
    flightsRound: [],
    selectedFlightPreview: null,
    selectedFlight: {
      id: "",
      aircraft: {
        name: "",
        model: "",
        manufacturer: "",
        noOfSeats: 0,
        status: AircraftStatus.Airborne,
        availableAt: undefined,
        terminal: ""
      },
      flightRoute: {
        fromAirportIATA: "",
        toAirportIATA: "",
        fromAirport: {
          iata: "",
          name: "",
          city: {
            name: "",
            country: "",
            imageUrl: ""
          }
        },
        toAirport: {
          iata: "",
          name: "",
          city: {
            name: "",
            country: "",
            imageUrl: ""
          }
        },
        noOfFlights: 0,
        distance: 0
      },
      boardingTime: "",
      departureTime: "",
      arrivalTime: "",
      boardingGate: "",
      remainingBsnSeats: 0,
      remainingEcoSeats: 0,
      economyPrice: 0,
      businessPrice: 0,
      status: FlightStatus.Upcomming
    },
    selectedFlightRound: {
      id: "",
      aircraft: {
        name: "",
        model: "",
        manufacturer: "",
        noOfSeats: 0,
        status: AircraftStatus.Airborne,
        availableAt: undefined,
        terminal: ""
      },
      flightRoute: {
        fromAirportIATA: "",
        toAirportIATA: "",
        fromAirport: {
          iata: "",
          name: "",
          city: {
            name: "",
            country: "",
            imageUrl: ""
          }
        },
        toAirport: {
          iata: "",
          name: "",
          city: {
            name: "",
            country: "",
            imageUrl: ""
          }
        },
        noOfFlights: 0,
        distance: 0
      },
      boardingTime: "",
      departureTime: "",
      arrivalTime: "",
      boardingGate: "",
      remainingBsnSeats: 0,
      remainingEcoSeats: 0,
      economyPrice: 0,
      businessPrice: 0,
      status: FlightStatus.Upcomming
    },
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
    resetFlightData: () => initialState,
     fetchFlightsRequest: (
      state,
      action: PayloadAction<{
        fromIATA: string;
        toIATA: string;
        departureTime: string;
        isRoundTrip: boolean;
        returnDate?: string;
      }>
    ) => {},

    setFlights: (state, action: PayloadAction<Flight[]>) => {
      state.flights = action.payload;
    },
    setFlightsRound: (state, action: PayloadAction<Flight[]>) => {
      state.flightsRound = action.payload;
    },
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
    resetFlightData,
    fetchFlightsRequest,
    setFlights,
    setFlightsRound,
} = flightSlice.actions;

export default flightSlice.reducer;
