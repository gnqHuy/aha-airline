import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import FlightTable from "../../components/FlightTable/FlightTable";

const HomePage: React.FC = () => {
  return (
    <><NavBar /><NewsSection /><BookingSection /><FlightPreview /><Footer/></>
  );
};

export default HomePage;
