import React, { useState } from "react";
import BookingSectionManageBooking from "./ManageBookingTab/BookingSectionManageBooking";
import BookingSectionCheckIn from "./CheckInTab/BookingSectionCheckIn";
import BookingContent from "./BookingTab/BookingTab";

// Tab configuration để tránh trùng lặp
const TAB_CONFIG = [
  { id: "book", label: "Book Flight", component: BookingContent },
  { id: "manage", label: "Manage Booking", component: BookingSectionManageBooking },
  { id: "checkIn", label: "Check-In", component: BookingSectionCheckIn },
] as const;

type TabId = typeof TAB_CONFIG[number]["id"];

// Tab Button Component để tái sử dụng
interface TabButtonProps {
  tab: TabId;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ tab, label, isActive, onClick }) => {
  const baseClasses = "flex-1 h-12 px-4 py-2 font-semibold text-sm md:text-base rounded-full border-none transition-all duration-300 ease-in-out transform hover:scale-105";
  const activeClasses = "bg-ahaGreen-1 text-white shadow-md";
  const inactiveClasses = "bg-white/40 text-ahaGreen-0 hover:bg-white/60";

  return (
    <button
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      onClick={onClick}
      type="button"
      aria-pressed={isActive}
      aria-label={`Switch to ${label} tab`}
    >
      {label}
    </button>
  );
};

// Content Container Component
interface ContentContainerProps {
  children: React.ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => (
  <div className="flex-1 min-h-0 overflow-hidden">
    <div className="h-full px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {children}
    </div>
  </div>
);

const FlightBookingSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>("book");

  const renderTabContent = () => {
    const currentTab = TAB_CONFIG.find(tab => tab.id === activeTab);
    if (!currentTab) return null;
    
    const Component = currentTab.component;
    return <Component />;
  };

  return (
    <div className="
      fixed left-1/2 top-3/4 -translate-x-1/2 -translate-y-full z-50
      w-[95vw] max-w-2xl h-[85vh] max-h-[600px]
      lg:absolute lg:left-[30%] lg:top-[75%] lg:w-[40%] lg:min-w-[400px] lg:max-w-[600px] lg:h-[48%]
      bg-white/50 backdrop-blur-md rounded-3xl shadow-xl
      flex flex-col overflow-hidden
      transition-all duration-300 ease-in-out
    ">
      {/* Tab Navigation */}
      <div className="flex-shrink-0 p-2">
        <div className="flex bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-inner">
          {TAB_CONFIG.map(({ id, label }) => (
            <TabButton
              key={id}
              tab={id}
              label={label}
              isActive={activeTab === id}
              onClick={() => setActiveTab(id)}
            />
          ))}
        </div>
      </div>
      
      {/* Content Area */}
      <ContentContainer>
        {renderTabContent()}
      </ContentContainer>
    </div>
  );
};

export default FlightBookingSection;
