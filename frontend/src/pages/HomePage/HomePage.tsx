import React, { useEffect } from "react";
import NewsSection from "../../components/FlightBookingSection/FlightBookingSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { resetFlightData, setRoundTrip } from "../../redux/slice/flightSlice";
import { resetBooking } from "../../redux/slice/bookingSlice";
import { resetPassengers } from "../../redux/slice/passengerSlice";
import LayoutDefault from "../../components/Layout/LayoutDefault";
import FlightBookingSection from "../../components/FlightBookingSection/FlightBookingSection";

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
    <FlightBookingSection/><FlightPreview />
    </LayoutDefault>
    </>
  );
};

export default HomePage;
