import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <NewsSection />
      <BookingSection />
      <FlightPreview />
    </Layout>
  );
};

export default HomePage;
