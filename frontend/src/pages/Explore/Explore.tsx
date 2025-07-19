import React from "react";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";
import image1 from '../../assets-test/Images/plane2.jpg';
import image2 from '../../assets-test/Images/sunset4.jpg';
import image3 from '../../assets-test/Images/sunrise5.jpg';

const HomePage: React.FC = () => {
  
  return (
    <Layout>
      <div className="w-[1016px] mx-auto pt-4"> <p className="text-3xl text-ahaAmber-2 font-bold">Explore</p></div>
      <div className="flex flex-col items-center my-4">
        <GenericCard image={image1} title={"Destination"} link={"destination"} width={"66.3vw"} />
        <div className="flex justify-center items-center my-4 gap-4">
          <GenericCard image={image2} title={"Experience"} link={"experience"} width = {"32.6vw"}/>
          <GenericCard image={image3} title={"Offer"} link={"offer"} width = "32.6vw"/>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;