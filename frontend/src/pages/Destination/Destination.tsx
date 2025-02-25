import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import GenericCard from "../../components/GenericCard/GenericCard";

import image1 from '../../assets-test/Images/cities/hanoi.jpg';
import image2 from '../../assets-test/Images/cities/singapore.jpg';
import image3 from '../../assets-test/Images/cities/seoul.jpg';
import image4 from '../../assets-test/Images/cities/paris.jpg';
import image5 from '../../assets-test/Images/cities/rome.jpg';
import image6 from '../../assets-test/Images/cities/london.jpg';
import image7 from '../../assets-test/Images/cities/cairo.jpg';
import image8 from '../../assets-test/Images/cities/marrakech.jpg';
import image9 from '../../assets-test/Images/cities/newyork.jpg';
import image10 from '../../assets-test/Images/cities/toronto.jpg';
import image11 from '../../assets-test/Images/cities/mexico.jpg';
import image12 from '../../assets-test/Images/cities/sydney.jpg';
import image13 from '../../assets-test/Images/cities/melbourne.jpg';


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
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-golden font-bold">Asia</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image1} title={"Hanoi"} link={"hanoi"} width={"66.3vw"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image2} title={"Singapore"} link={"singapore"} width="38.5vw" />
            <GenericCard image={image3} title={"Seoul"} link={"seoul"} width="27vw" />
          </div>
        </div>
      </div>

      <div id="europe" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-golden font-bold">Europe</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center mb-4 gap-4">
            <GenericCard image={image4} title={"Paris"} link={"paris"} width="27vw" />
            <GenericCard image={image5} title={"Rome"} link={"rome"} width="38.5vw" />
          </div>
          <GenericCard image={image6} title={"London"} link={"london"} width={"66.3vw"} />
        </div>
      </div>

      <div id="africa" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-golden font-bold">Africa</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Cairo"} link={"cairo"} width="38.5vw" />
            <GenericCard image={image8} title={"Marrakech"} link={"marrakech"} width="27vw" />
          </div>
        </div>
      </div>

      <div id="north-america" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-golden font-bold">North America</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image9} title={"New York"} link={"new york"} width={"66.3vw"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image10} title={"Toronto"} link={"toronto"} width="38.5vw" />
            <GenericCard image={image11} title={"Mexico City"} link={"mexico city"} width="27vw" />
          </div>
        </div>
      </div>

      <div id="oceania" className="mt-14 mb-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-golden font-bold">Oceania</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image12} title={"Sydney"} link={"sydney"} width="27vw" />
            <GenericCard image={image13} title={"Melbourne"} link={"melbourne"} width="38.5vw" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Destination;


