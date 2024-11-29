import React from "react";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/hanoi.jpg';
import image2 from '../../assets-test/hanoi.jpg';
import image6 from '../../assets-test/seoul.jpg';
import image7 from '../../assets-test/paris.jpg';


const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Asia */}
      <div className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Asia</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image1} title={"Hanoi"} link={"/explore/destination/vietnam"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image7} title={"Singapore"} link={"/explore/destination/singapore"} width="600px" />
            <GenericCard image={image6} title={"Seoul"} link={"/explore/destination/seoul"} width="400px" />
          </div>
        </div>
      </div>

      {/* Europe */}
      <div className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Europe</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center mb-4 gap-4">
            <GenericCard image={image7} title={"Paris"} link={"/explore/destination/paris"} width="400px" />
            <GenericCard image={image6} title={"Rome"} link={"/explore/destination/rome"} width="600px" />
          </div>
          <GenericCard image={image1} title={"London"} link={"/explore/destination/london"} width={"1016px"} />
        </div>
      </div>

      {/* Africa */}
      <div className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Africa</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Cairo"} link={"/explore/destination/cairo"} width="600px" />
            <GenericCard image={image6} title={"Marrakech"} link={"/explore/destination/marrakech"} width="400px" />
          </div>
        </div>
      </div>

      {/* North America */}
      <div className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">North America</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image2} title={"New York"} link={"/explore/destination/new-york"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image7} title={"Toronto"} link={"/explore/destination/toronto"} width="600px" />
            <GenericCard image={image6} title={"Mexico City"} link={"/explore/destination/mexico-city"} width="400px" />
          </div>
        </div>
      </div>

      {/* Oceania */}
      <div className="mt-14 mb-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Oceania</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Sydney"} link={"/explore/destination/sydney"} width="400px" />
            <GenericCard image={image6} title={"Melbourne"} link={"/explore/destination/melbourne"} width="600px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
