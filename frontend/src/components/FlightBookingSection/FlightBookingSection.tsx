import React, { useState } from "react";
import BookingSectionManageBooking from "../BookingSection/ManageBooking/BookingSectionManageBooking";
import BookingSectionCheckIn from "../BookingSection/CheckIn/BookingSectionCheckIn";
import BookingContent from "../BookingSection/Book/Content/BookingContent";

const FlightBookingSection = () => {
  const [activeTab, setActiveTab] = useState("book");

  const renderTabContent = () => {
    switch (activeTab) {
      case "book":
        return (
          <BookingContent
            sectionTab={activeTab}
            handleChangeTab={setActiveTab}
          />
        );
      case "manage":
        return (
          <BookingSectionManageBooking
            sectionTab={activeTab}
            handleChangeTab={setActiveTab}
            prevTab={activeTab}
          />
        );
      case "checkIn":
        return (
          <BookingSectionCheckIn
            sectionTab={activeTab}
            handleChangeTab={setActiveTab}
            prevTab={activeTab}
          />
        );
      default:
        return null;
    }
  };

  const buttonClass = (
    tab: string,
    textColor: string = "text-white",
    bgColor: string = "bg-ahaGreen-opacity-0" 
  ) => {
    const isActive = activeTab === tab;

    const base = `w-full h-[50px] px-6 py-2 font-semibold text-base border-none transition-colors`;
    const activeStyle = `${bgColor} ${textColor}`;
    const inactiveStyle = `bg-white/40 text-ahaGreen-0`;

    return `${base} ${isActive ? activeStyle : inactiveStyle}`;
  };

  return (
    <div className="absolute bg-ahaGreen-opacity-3 left-[25%] w-[50%] top-[80%] rounded-2xl mx-auto -translate-y-full overflow-hidden backdrop-blur-sm shadow-lg">
      <div className="flex justify-center">
        <button className={buttonClass("book")} onClick={() => setActiveTab("book")}>
          Book Flight
        </button>
        <button className={buttonClass("manage")} onClick={() => setActiveTab("manage")}>
          Manage Booking
        </button>
        <button className={buttonClass("checkIn")} onClick={() => setActiveTab("checkIn")}>
          Check-In
        </button>
      </div>
      <div className="mx-auto px-5">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default FlightBookingSection;
