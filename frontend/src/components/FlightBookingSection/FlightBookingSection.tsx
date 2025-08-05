import React, { useState } from "react";
import BookingSectionManageBooking from "./ManageBookingTab/BookingSectionManageBooking";
import BookingSectionCheckIn from "./CheckInTab/BookingSectionCheckIn";
import BookingTab from "./BookingTab/BookingTab";

const FlightBookingSection = () => {
  const [activeTab, setActiveTab] = useState("book");

  const renderTabContent = () => {
    switch (activeTab) {
      case "book":
        return (
          <BookingTab />
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

    const base = `w-full h-[45px] font-semibold text-sm rounded-full border-none transition-colors`;
    const activeStyle = `${bgColor} ${textColor}`;
    const inactiveStyle = `bg-white/40 text-ahaGreen-0`;

    return `${base} ${isActive ? activeStyle : inactiveStyle}`;
  };

  return (
    <div className="flex justify-center min-h-[65vh]">
      <div className="bg-white/50 h-fit min-w-[55vh] rounded-3xl shadow-lg ">
        {/* Tabs */}
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

        {/* Nội dung tab */}
        <div className="mx-auto px-5">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default FlightBookingSection;
