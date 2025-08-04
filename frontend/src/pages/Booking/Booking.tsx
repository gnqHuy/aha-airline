import React from "react";
import Layout from "../../layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";
import image1 from '../../assets-test/Images/green3.jpg';
import image2 from '../../assets-test/Images/green4.jpg';
import image3 from '../../assets-test/Images/green1.jpg';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="w-[1016px] mx-[16vw] pt-4"> <p className="text-3xl text-ahaAmber-2 font-bold">Booking</p></div>
      <div className="flex flex-col items-center my-4">
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image1} title={"Online Booking"} link={"/"} width = "32.5vw"/>
          <GenericCard image={image2} title={"Booking Information"} link={"booking-info"} width = "32.5vw"/>    
        </div>
        <GenericCard image={image3} title={"Additional Service"} link={"additional-services"} width={"66.3vw"} />
      </div>
    </Layout>
  );
};

export default HomePage;