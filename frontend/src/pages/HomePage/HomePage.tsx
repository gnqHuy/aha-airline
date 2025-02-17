import React, { useEffect } from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Spinner from "../../components/Spinner/Spinner";
import { useDispatch } from "react-redux";
import { setRoundTrip } from "../../redux/slice/flightSlice";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  useEffect (() => {
     dispatch(setRoundTrip(false));
  })
  return (
    <><NavBar /><NewsSection /><BookingSection /><FlightPreview /><Footer/></>
  );
};

export default HomePage;
