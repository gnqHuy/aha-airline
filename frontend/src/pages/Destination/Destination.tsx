import React from "react";
import NewsSection from "../../components/NewsSection/NewsSection";
import FlightPreview from "../../components/FlightPreview/FlightPreview";
import BookingSection from "../../components/BookingSection/BookingSection";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/hanoi.jpg';
import image2 from '../../assets-test/hanoi.jpg';
import image6 from '../../assets-test/seoul.jpg';
import image7 from '../../assets-test/paris.jpg';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Layout>
        <div>
            <div className="w-[1016px] mx-auto mt-14"> <p className="text-3xl text-golden font-bold">Southest Asia</p></div>
            <div className="flex flex-col items-center my-4">
            <GenericCard image={image1} title={"Hanoi"} link={"/explore/destination/vietnam"} width={"1016px"} />
                <div className="flex justify-center items-center my-4 gap-4">
                    <GenericCard image={image7} title={"Singapore"} link={"/explore/destination/singapore"} width="600px"/>
                    <GenericCard image={image6} title={"Thailand"} link={"/explore/destination/thailand"} width="400px" />
                </div>
            </div>
        </div>
    </Layout>
  );
};

export default HomePage;