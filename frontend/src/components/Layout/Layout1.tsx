import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FaHome, FaPlaneDeparture } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { useFlightContext } from "../../context/FlightContext/FlightContext";
import image3 from "../../assets-test/Images/sunset4.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

type LayoutProps = {
  children: React.ReactNode;
  headerImage?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, headerImage = image3 }) => {
  const { selectedFlightPreview, selectedPassenger } = useFlightContext();
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const segmentPath = `/${pathSegments.slice(0, index + 1).join("/")}`;
    const isLast = index === pathSegments.length - 1;

    return (
      <React.Fragment key={segment}>
        {!isLast ? (
          <Link to={segmentPath} className="text-golden no-underline capitalize">
            {segment}
          </Link>
        ) : (
          <span className="text-black capitalize">{segment.replace(/%20/g, " ")}</span> 
        )}
        {!isLast && <IoIosArrowForward className="mx-2" />} 
      </React.Fragment>
    );
  });
  
  if (!selectedFlightPreview || !selectedFlightPreview.fromAirport.city.name || !selectedFlightPreview.toAirport.city.name) {
    return <div className="text-center text-red-500">No flight selected or flight data is incomplete.</div>;
  }

  const totalPassengers = selectedPassenger.adults + selectedPassenger.children + selectedPassenger.infants;

  const departureDate = new Date(selectedFlightPreview.departureTime);

  const formattedDate = departureDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formattedTime = departureDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <>
      <NavBar />
      <div className="relative">
        <img
          src={headerImage}
          alt="Header"
          className="w-full h-[300px] object-cover"
          onError={(e) => (e.currentTarget.src = '/path/to/default-image.jpg')}
        />
        <div className="bg-white">
          <div className="flex items-center w-[1100px] mx-auto p-3 text-lg">
            <Link to="/" className="flex items-center text-golden no-underline">
              <FaHome className="mr-2" />
            </Link>
            <IoIosArrowForward className="mr-2" />
            {breadcrumbs}
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md flex items-center justify-between w-[90%] max-w-3xl">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <div className="text-xl font-semibold text-gray-900">{selectedFlightPreview.fromAirport.iata}</div>
                <div className="text-base text-gray-500">{selectedFlightPreview.fromAirport.city.name}</div>
              </div>
              <div className="flex items-center text-gray-500">
                <div className="h-0.5 w-36 bg-gray-300"></div>
                <FaPlaneDeparture className="mx-2 text-xl text-golden" />
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold text-gray-900">{selectedFlightPreview.toAirport.iata}</div>
                <div className="text-base text-gray-500">{selectedFlightPreview.toAirport.city.name}</div>
              </div>
            </div>
          </div>
          <div className="h-14 w-px bg-golden mx-4"></div>
          <div className="flex items-center justify-center w-38 font-semibold">
            <div>
              Depart<br />
              <span className="block mt-2 font-normal">
                {formattedDate}
              </span>
            </div>
          </div>
          <div className="h-14 w-px bg-golden mx-4"></div>
          <div className="flex items-center justify-center w-32 font-semibold">
            <div>
              Passengers<br />
              <div className="flex items-center mt-2">
                <IoPerson className="text-golden mr-1" />
                <span className="font-semibold">{totalPassengers}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="min-h-screen bg-slate-50">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
