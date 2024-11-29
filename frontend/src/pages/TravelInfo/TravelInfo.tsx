import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/plane3.webp';
import image2 from '../../assets-test/beijing.jpg';
import image6 from '../../assets-test/plane2.jpg';
import image7 from '../../assets-test/plane.jpg';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-[1016px] mx-auto mt-14"> <p className="text-3xl text-golden font-bold">Travel Info</p></div>
      <div className="flex flex-col items-center my-4">
        <GenericCard image={image7} title={"Check-In"} link={"check-in"} width={"1016px"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image6} title={"Baggage Info"} link={"baggageinfo"} />
          <GenericCard image={image1} title={"Travel Document"} link={"traveldocument"} />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;