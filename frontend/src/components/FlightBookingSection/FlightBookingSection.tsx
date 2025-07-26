import React, { useState } from "react";
import BookingSectionManageBooking from "./ManageBookingTab/BookingSectionManageBooking";
import BookingSectionCheckIn from "./CheckInTab/BookingSectionCheckIn";
import BookingContent from "./BookingTab/BookingTab";

const FlightBookingSection = () => {
  const [activeTab, setActiveTab] = useState("book");

  const renderTabContent = () => {
    switch (activeTab) {
      case "book":
        return <BookingContent />;
      case "manage":
        return <BookingSectionManageBooking />;
      case "checkIn":
        return <BookingSectionCheckIn />;
      default:
        return null;
    }
  };

  const buttonClass = (tab: string) => {
    const isActive = activeTab === tab;
    const base = `
      flex-1 h-12 px-4 py-2 font-semibold text-sm sm:text-base 
      rounded-full border-none transition-all duration-300 
      hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ahaGreen-1/50
    `;
    const activeStyle = `bg-ahaGreen-1 text-white shadow-lg`;
    const inactiveStyle = `bg-white/60 text-ahaGreen-0 hover:bg-white/80`;

    return `${base} ${isActive ? activeStyle : inactiveStyle}`;
  };

  return (
    <div className="
      fixed inset-0 z-50 flex items-center justify-center p-4
      lg:absolute lg:inset-auto lg:left-[30%] lg:top-[75%] lg:-translate-y-full 
      lg:w-[40%] lg:h-[48%] lg:p-0
    ">
      <div className="
        w-full max-w-2xl h-full max-h-[90vh] 
        lg:w-full lg:h-full lg:max-w-none lg:max-h-none
        bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl 
        overflow-hidden flex flex-col
        min-w-[320px]
      ">
        {/* Tab Navigation */}
        <div className="flex-shrink-0 p-3 lg:p-2">
          <div className="flex bg-white/80 p-1 rounded-full gap-1">
            <button 
              className={buttonClass("book")} 
              onClick={() => setActiveTab("book")}
            >
              <span className="hidden sm:inline">Book Flight</span>
              <span className="sm:hidden">Book</span>
            </button>
            <button 
              className={buttonClass("manage")} 
              onClick={() => setActiveTab("manage")}
            >
              <span className="hidden sm:inline">Manage Booking</span>
              <span className="sm:hidden">Manage</span>
            </button>
            <button 
              className={buttonClass("checkIn")} 
              onClick={() => setActiveTab("checkIn")}
            >
              <span className="hidden sm:inline">Check-In</span>
              <span className="sm:hidden">Check-In</span>
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto px-3 lg:px-4 pb-4">
            <div className="min-h-full">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingSection;
