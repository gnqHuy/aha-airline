import React from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import GenericCard from "../../components/GenericCard/GenericCard";

const HomePage: React.FC = () => {
  return (
    <LayoutDefault>
      <div className="w-[1016px] mx-[16vw] pt-4"> <p className="text-3xl text-ahaAmber-2 font-bold">Booking</p></div>
      <div className="flex flex-col items-center my-4">
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/green3.jpg`} title={"Online Booking"} link={"/"} width = "32.5vw"/>
          <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/green4.jpg`} title={"Booking Information"} link={"booking-info"} width = "32.5vw"/>    
        </div>
        <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/green-sky.webp`} title={"Additional Service"} link={"additional-services"} width={"66.3vw"} />
      </div>
    </LayoutDefault>
  );
};

export default HomePage;