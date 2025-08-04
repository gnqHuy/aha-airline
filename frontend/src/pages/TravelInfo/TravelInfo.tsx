import React from "react";
import Layout from "../../layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/Images/plane3.webp';
import image2 from '../../assets-test/Images/beijing.jpg';
import image6 from '../../assets-test/Images/plane2.jpg';
import image7 from '../../assets-test/Images/plane.jpg';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-[1016px] mx-auto pt-4"> <p className="text-3xl text-ahaAmber-2 font-bold">Travel Info</p></div>
      <div className="flex flex-col items-center my-4">
        <GenericCard image={image7} title={"Check-In"} link={"check-in"} width={"66.3vw"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image6} title={"Baggage Info"} link={"baggageinfo"} width = "32.6vw"/>
          <GenericCard image={image1} title={"Travel Document"} link={"traveldocument"} width = "32.6vw"/>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;