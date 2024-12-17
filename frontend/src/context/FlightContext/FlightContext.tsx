import React, { createContext, useContext, useEffect, useState } from "react";
import { Flight } from "../../object/flight/flight";
import { PassengerCount } from "../../object/passengerCount/passengerCount";
import { getAllAirport } from "../../api/airportAPI";

type FlightContextType = {
  selectedFlight: Flight | null;
  setSelectedFlight: (flight: Flight) => void;
  selectedPassenger: PassengerCount;
  setSelectedPassenger: (passengerCount: PassengerCount) => void;
  airports: any[];
  setAirports: (flights: any[]) => void;
  newsList: any[];
  setNewsList: (news: any[]) => void;
  news: any;
  setNews: (news: any) => void;
  index: number;
  setIndex: (index: number) => void;
};

type News = {
  imgLink: string;
  header: string;
  content: string; 
}

const content1Sample = `<div class="max-w-4xl relative left-[6rem] p-6 bg-[] rounded-lg shadow-lg font-space-grotesk">
      <div class="text-center mb-6">
        <h1 class="text-4xl font-semibold text-blue-600">
          AHA Airlines Announces Exclusive 20% Discount on International Flights!
        </h1>
        <p class="text-lg text-gray-500 mt-2">Date: December 17, 2024 | Location: Hanoi, Vietnam</p>
      </div>
      <!-- Image added here (real URL) -->
      <img src="https://image.cnbcfm.com/api/v1/image/107124573-1664221269888-gettyimages-463523885-19742e2d-9225-4f17-af59-5d06fa636af6.jpeg?v=1668095693" alt="Airplane at sunset" class="w-full h-auto rounded-lg mb-6" />
      <p class="text-xl text-gray-700 mb-6">
        AHA Airlines is excited to announce an <strong>exclusive 20% discount</strong> on all
        <strong>international flights</strong> for a limited time! This offer is perfect for travelers planning their
        dream vacations, business trips, or visiting loved ones around the world.
      </p>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-blue-600">Offer Details:</h2>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Discount: 20% off on Economy Class and Business Class tickets.</li>
          <li>Eligible Routes: All international destinations (Europe, Asia, Africa, South America).</li>
          <li>Booking Period: June 17, 2024 – June 30, 2024.</li>
          <li>Travel Period: July 1, 2024 – December 15, 2024.</li>
        </ul>
      </div>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-blue-600">How to Avail the Discount:</h2>
        <ol class="list-decimal pl-6 mt-2 text-gray-700">
          <li>Visit the <a href="https://www.ahaairlines.com" class="text-blue-500">AHA Airlines official website</a>.</li>
          <li>Choose your international destination.</li>
          <li>Use the promo code: <strong>FLY2024</strong> at checkout.</li>
          <li>Enjoy 20% savings on your flight!</li>
        </ol>
      </div>
      <div class="text-center mt-8">
        <p class="text-xl text-gray-700 mb-4">
          Hurry! This offer is valid for a limited time only. Book your tickets today and explore the world with
          <strong>AHA Airlines</strong> at unbeatable prices.
        </p>
        <a href="" class="bg-blue-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Book Now
        </a>
      </div>
    </div>`

  const content2Sample = `<div class="max-w-4xl p-6 rounded-lg shadow-lg relative left-[6rem] font-space-grotesk">
      <div class="text-center mb-6">
        <h1 class="text-4xl font-semibold text-red-600">
          Big Sale! Get 50% Off on All Domestic Flights with AHA Airlines!
        </h1>
        <p class="text-lg text-gray-500 mt-2">Date: December 17, 2024 | Location: Hanoi, Vietnam</p>
      </div>
      <!-- Airline Sale Image -->
      <img src="https://media.cntraveler.com/photos/607f3c487774091e06dd5d21/16:9/w_2560%2Cc_limit/Breeze%2520Airways_166655077_303814634409055_8038496796049085212_n.jpeg" alt="Airline sale" class="w-full h-auto rounded-lg mb-6" />
      <p class="text-xl text-gray-700 mb-6">
        AHA Airlines is excited to offer an <strong>exclusive 50% discount</strong> on all
        <strong>domestic flights</strong> for the next two weeks! Whether you're flying for business, pleasure,
        or visiting friends and family, now is the perfect time to book your next flight with us.
      </p>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-red-600">Sale Details:</h2>
        <ul class="list-disc pl-6 mt-2 text-gray-700">
          <li>Discount: 50% off on all Economy Class tickets.</li>
          <li>Eligible Routes: All domestic flights within the United States.</li>
          <li>Booking Period: July 15, 2024 – July 30, 2024.</li>
          <li>Travel Period: August 1, 2024 – September 30, 2024.</li>
        </ul>
      </div>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold text-red-600">How to Avail the Discount:</h2>
        <ol class="list-decimal pl-6 mt-2 text-gray-700">
          <li>Visit the <a href="https://www.ahaairlines.com" class="text-blue-500">AHA Airlines official website</a>.</li>
          <li>Choose your domestic destination within the U.S.</li>
          <li>Use the promo code: <strong>HALFPRICE</strong> at checkout.</li>
          <li>Save 50% on your flight and enjoy your travels!</li>
        </ol>
      </div>
      <div class="text-center mt-8">
        <p class="text-xl text-gray-700 mb-4">
          Don’t miss out on this amazing opportunity! Book your tickets before the sale ends, and enjoy the best
          domestic flights at unbeatable prices with <strong>AHA Airlines</strong>.
        </p>
        <a href="https://www.ahaairlines.com" class="bg-red-600 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition duration-300">
          Book Now
        </a>
      </div>
    </div>`

const NewSlide = [
  {imgLink: "https://www.priestmangoode.com/wp-content/uploads/2021/04/United-Airlines_B787-9-Livery_Priestmangoode.jpg", header: "20% discount for international flights", content: content1Sample, link: "/news"},
  {imgLink: "https://upload.wikimedia.org/wikipedia/commons/0/03/Australian_Airlines_VH-OGI_Sydney_Airport_2005.jpg", header: "50% discount for domestic flights", content: content2Sample, link: "/news"}
]


const FlightContext = createContext<FlightContextType | undefined>(undefined);

export const FlightProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedPassenger, setSelectedPassenger] = useState<PassengerCount>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [newsList, setNewsList] = useState<News[]>([]);
  const [airports, setAirports] = useState<any[]>([]);
  const [news, setNews] = useState<any>(NewSlide[0]);
  const [index, setIndex] = useState<number>(Number(localStorage.getItem('news-index')));

  useEffect(() => {
    setNewsList(NewSlide);
    getAllAirport().then((res) => {
      setAirports(res.data);
    })
    localStorage.setItem('news-index', index.toString());
  }, [index]);

  return (
    <FlightContext.Provider
      value={{
        selectedFlight,
        setSelectedFlight,
        selectedPassenger,
        setSelectedPassenger,
        airports,
        setAirports,
        newsList,
        setNewsList,
        news,
        setNews,
        index,
        setIndex
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error("useFlight must be used within a FlightProvider");
  }
  return context;
};
