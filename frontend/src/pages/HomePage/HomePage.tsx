import React, { useEffect } from "react";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import { useDispatch } from "react-redux";
import { resetFlightData, setRoundTrip } from "../../store/slice/flightSlice";
import { resetBooking } from "../../store/slice/bookingSlice";
import { resetPassengers } from "../../store/slice/passengerSlice";
import LayoutDefault from "../../layout/LayoutLandingPage";
import FlightBookingSection from "../../components/FlightBookingSection/FlightBookingSection";
// In your main layout or App.jsx

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect (() => {
      dispatch(setRoundTrip(false));
      dispatch(resetBooking());
      dispatch(resetFlightData());
      dispatch(resetPassengers())
  })
  return (
    <>
      <LayoutDefault>
        <FlightBookingSection /> 
        <FlightPreview />
      </LayoutDefault>
    </>
  );
};

export default HomePage;
