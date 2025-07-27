import React, { useEffect } from "react";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import { useDispatch } from "react-redux";
import { resetFlightData, setRoundTrip } from "../../redux/slice/flightSlice";
import { resetBooking } from "../../redux/slice/bookingSlice";
import { resetPassengers } from "../../redux/slice/passengerSlice";
import LayoutDefault from "../../components/Layout/LayoutDefault";
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
        <FlightBookingSection/> 
        <FlightPreview />
      </LayoutDefault>
    </>
  );
};

export default HomePage;
