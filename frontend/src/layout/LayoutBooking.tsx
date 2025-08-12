import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import { useBookingTicket } from "../store/hooks/useBookingTicket";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FlightInfoSummary from "../components/FlightInfoSummary/FlightInfoSummary";

type LayoutBookingProps = {
  children: React.ReactNode;
};

const LayoutBooking: React.FC<LayoutBookingProps> = ({ children }) => {
  const {selectedFlightPreview, selectedPassenger} = useBookingTicket();
  
  if (!selectedFlightPreview || !selectedFlightPreview.fromAirport.city.name || !selectedFlightPreview.toAirport.city.name) {
    return <div className="text-center text-red-500">No flight selected or flight data is incomplete.</div>;
  }

  const totalPassengers = selectedPassenger.adults + selectedPassenger.children + selectedPassenger.infants;
  
  return (
    <>
      <NavBar isDarkText={true}/>
      <div className="relative">
        <img
          src={'https://aha-airline.s3.ap-southeast-2.amazonaws.com/sunset4.jpg'}
          alt="Header"
          className="w-full h-[300px] object-cover"
          onError={(e) => (e.currentTarget.src = '/path/to/default-image.jpg')}
        />
        <Breadcrumbs />
        {!selectedFlightPreview || !selectedFlightPreview.fromAirport.city.name || !selectedFlightPreview.toAirport.city.name ? (
        <div className="text-center text-red-500">No flight selected or flight data is incomplete.</div>
          ) : (
            <FlightInfoSummary
              selectedFlightPreview={selectedFlightPreview}
              totalPassengers={totalPassengers}
            />
          )}
      </div>
      <main className="min-h-screen bg-slate-50">
        <div className="w-[70%] mx-auto">{children}</div>
      </main>
      <Breadcrumbs />
      <Footer isLandingPage={false}/>
    </>
  );
};

export default LayoutBooking;
