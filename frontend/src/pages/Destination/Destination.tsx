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
import image14 from '../../assets-test/Images/cities/istanbul.webp';
import image15 from '../../assets-test/Images/cities/san-francisco.jpg';
import Spinner from "../../components/Spinner/Spinner";

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
      {/* <Spinner timeout={5} /> */}
      <div id="asia" className="pt-4">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Asia</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image1} title={"Hanoi"} link={"hanoi"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image2} title={"Singapore"} link={"singapore"} width="600px" />
            <GenericCard image={image3} title={"Seoul"} link={"seoul"} width="400px" />
          </div>
        </div>
      </div>

      <div id="europe" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Europe</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center mb-4 gap-4">
            <GenericCard image={image4} title={"Paris"} link={"paris"} width="400px" />
            <GenericCard image={image5} title={"Rome"} link={"rome"} width="600px" />
          </div>
          <GenericCard image={image6} title={"London"} link={"london"} width={"1016px"} />
        </div>
      </div>

      <div id="africa" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Africa</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image7} title={"Cairo"} link={"cairo"} width="600px" />
            <GenericCard image={image8} title={"Marrakech"} link={"marrakech"} width="400px" />
          </div>
        </div>
      </div>

      <div id="north-america" className="mt-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">North America</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={image9} title={"New York"} link={"new york"} width={"1016px"} />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={image10} title={"Toronto"} link={"toronto"} width="600px" />
            <GenericCard image={image11} title={"Mexico City"} link={"mexico city"} width="400px" />
          </div>
        </div>
      </div>

      <div id="oceania" className="mt-14 mb-14">
        <div className="w-[1016px] mx-auto">
          <p className="text-3xl text-golden font-bold">Oceania</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={image12} title={"Sydney"} link={"sydney"} width="400px" />
            <GenericCard image={image13} title={"Melbourne"} link={"melbourne"} width="600px" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Destination;


