import React from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import GenericCard from "../../components/GenericCard/GenericCard";

const HomePage: React.FC = () => {
  return (
    <LayoutDefault>
      <div className="w-[1016px] mx-auto pt-4"> <p className="text-3xl text-ahaAmber-2 font-bold">Travel Info</p></div>
      <div className="flex flex-col items-center my-4">
        <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/plane3.webp`} title={"Check-In"} link={"check-in"} width={"66.3vw"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/plane2.jpg`} title={"Baggage Info"} link={"baggageinfo"} width = "32.6vw"/>
          <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/plane.jpg`} title={"Travel Document"} link={"traveldocument"} width = "32.6vw"/>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default HomePage;