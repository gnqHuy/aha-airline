import React, { useState } from "react";
import BookingSectionManageBooking from "./ManageBookingTab/BookingSectionManageBooking";
import BookingSectionCheckIn from "./CheckInTab/BookingSectionCheckIn";
import BookingContent from "./BookingTab/BookingTab";

const FlightBookingSection = () => {
  const [activeTab, setActiveTab] = useState("book");

  const renderTabContent = () => {
    switch (activeTab) {
      case "book":
        return (
          <BookingContent />
        );
      case "manage":
        return (
          <BookingSectionManageBooking />
        );
      case "checkIn":
        return (
          <BookingSectionCheckIn />
        );
      default:
        return null;
    }
  };

  const buttonClass = (
    tab: string,
    textColor: string = "text-white",
    bgColor: string = "bg-ahaGreen-1" 
  ) => {
    const isActive = activeTab === tab;

    const base = `w-full h-[50px] px-6 py-2 font-semibold text-base rounded-full border-none transition-colors`;
    const activeStyle = `${bgColor} ${textColor}`;
    const inactiveStyle = `bg-white/40 text-ahaGreen-0`;

    return `${base} ${isActive ? activeStyle : inactiveStyle}`;
  };

  return (
    <div className="absolute bg-white left-[30%] w-[40%] h-[45%] top-[70%] rounded-3xl mx-auto -translate-y-full overflow-visible backdrop-blur-sm shadow-lg">
      <div className="flex justify-center bg-white p-1 mb-3 rounded-full">
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
