import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/Images/plane3.webp';
import image2 from '../../assets-test/Images/beijing.jpg';
import image6 from '../../assets-test/Images/san-francisco.jpg';
import image7 from '../../assets-test/Images/istanbul.webp';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-[1016px] mx-auto pt-4"> <p className="text-3xl text-golden font-bold">Booking</p></div>
      <div className="flex flex-col items-center my-4">
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image6} title={"Online Booking"} link={"onlinebooking"} width = "32.5vw"/>
          <GenericCard image={image7} title={"Booking Information"} link={"booking-info"} width = "32.5vw"/>    
        </div>
        <GenericCard image={image2} title={"Additional Service"} link={"additional-services"} width={"66.3vw"} />
      </div>
    </Layout>
  );
};

export default HomePage;