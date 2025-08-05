import React, { useEffect } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import GenericCard from "../../components/GenericCard/GenericCard";

const getImage = (city: string) =>
  `https://aha-airline.s3.ap-southeast-2.amazonaws.com/${city.toLowerCase().replace(/ /g, "-")}.jpg`;

const Destination: React.FC = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const div = document.querySelector(hash);
      if (div) {
        div.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, []);

  return (
    <LayoutDefault>
      <div id="asia" className="pt-4">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-ahaAmber-2 font-bold">Asia</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={getImage("hanoi")} title="Hanoi" link="hanoi" width="66.3vw" />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={getImage("singapore")} title="Singapore" link="singapore" width="38.5vw" />
            <GenericCard image={getImage("seoul")} title="Seoul" link="seoul" width="27vw" />
          </div>
        </div>
      </div>

      <div id="europe" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-ahaAmber-2 font-bold">Europe</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center mb-4 gap-4">
            <GenericCard image={getImage("paris")} title="Paris" link="paris" width="27vw" />
            <GenericCard image={getImage("rome")} title="Rome" link="rome" width="38.5vw" />
          </div>
          <GenericCard image={getImage("london")} title="London" link="london" width="66.3vw" />
        </div>
      </div>

      <div id="africa" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-ahaAmber-2 font-bold">Africa</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={getImage("cairo")} title="Cairo" link="cairo" width="38.5vw" />
            <GenericCard image={getImage("marrakech")} title="Marrakech" link="marrakech" width="27vw" />
          </div>
        </div>
      </div>

      <div id="north-america" className="mt-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-ahaAmber-2 font-bold">North America</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <GenericCard image={getImage("new york")} title="New York" link="new york" width="66.3vw" />
          <div className="flex justify-center items-center mt-4 gap-4">
            <GenericCard image={getImage("toronto")} title="Toronto" link="toronto" width="38.5vw" />
            <GenericCard image={getImage("mexico city")} title="Mexico City" link="mexico city" width="27vw" />
          </div>
        </div>
      </div>

      <div id="oceania" className="mt-14 mb-14">
        <div className="w-[1016px] mx-[16vw]">
          <p className="text-3xl text-ahaAmber-2 font-bold">Oceania</p>
        </div>
        <div className="flex flex-col items-center mt-4">
          <div className="flex justify-center items-center gap-4">
            <GenericCard image={getImage("sydney")} title="Sydney" link="sydney" width="27vw" />
            <GenericCard image={getImage("melbourne")} title="Melbourne" link="melbourne" width="38.5vw" />
          </div>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default Destination;
