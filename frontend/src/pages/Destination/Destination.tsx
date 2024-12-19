import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/Images/hanoi.jpg';
import image2 from '../../assets-test/Images/hanoi.jpg';
import image6 from '../../assets-test/Images/seoul.jpg';
import image7 from '../../assets-test/Images/paris.jpg';


const Destination: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const div = document.querySelector(hash); 
      if (div) {
        div.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
      }
    }
  }, []);
  return (
    <Layout>
      <div id="asia" className="pt-4">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Asia</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image1} title={"Hanoi"} link={"hanoi"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image7} title={"Singapore"} link={"singapore"} width="600px" />
            <GenericCard image={image6} title={"Seoul"} link={"seoul"} width="400px" />
          </div>
        </div>
      </div>

      <div id="europe" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Europe</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center mb-4 gap-4">
            <GenericCard image={image7} title={"Paris"} link={"paris"} width="400px" />
            <GenericCard image={image6} title={"Rome"} link={"rome"} width="600px" />
          </div>
          <GenericCard image={image1} title={"London"} link={"london"} width={"1016px"} />
        </div>
      </div>

      <div id="africa" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Africa</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Cairo"} link={"cairo"} width="600px" />
            <GenericCard image={image6} title={"Marrakech"} link={"marrakech"} width="400px" />
          </div>
        </div>
      </div>

      <div id="north-america" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">North America</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image2} title={"New York"} link={"new york"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image7} title={"Toronto"} link={"toronto"} width="600px" />
            <GenericCard image={image6} title={"Mexico City"} link={"mexico city"} width="400px" />
          </div>
        </div>
      </div>

      <div id="oceania" className="mt-14 mb-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Oceania</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Sydney"} link={"sydney"} width="400px" />
            <GenericCard image={image6} title={"Melbourne"} link={"melbourne"} width="600px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Destination;


