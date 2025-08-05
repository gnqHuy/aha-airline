import React from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import GenericCard from "../../components/GenericCard/GenericCard";

const HomePage: React.FC = () => {
  
  return (
    <LayoutDefault>
      <div className="w-[1016px] mx-auto p-6"> <p className="text-3xl text-ahaAmber-2 font-bold">Explore</p></div>
      <div className="flex flex-col items-center">
        <GenericCard image={'https://aha-airline.s3.ap-southeast-2.amazonaws.com/plane2.jpg'} title={"Destination"} link={"destination"} width={"66.3vw"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={'https://aha-airline.s3.ap-southeast-2.amazonaws.com/sunset4.jpg'} title={"Experience"} link={"experience"} width = {"32.6vw"}/>
          <GenericCard image={`https://aha-airline.s3.ap-southeast-2.amazonaws.com/sunrise1.jpg`} title={"Offer"} link={"offer"} width = "32.6vw"/>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default HomePage;