import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Explore from '../pages/Explore/Explore';
import Booking from '../pages/Booking/Booking';
import TravelInfo from '../pages/TravelInfo/TravelInfo';
import Destination from '../pages/Destination/Destination';
import CityInfo from '../pages/CityInfo/CityInfo';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Experience from '../pages/Experience/Experience';
import Offer from '../pages/Offer/Offer';
import BookingInformation from '../pages/Booking/BookingInformation/BookingInformation';
import AdditionalService from '../pages/Booking/AdditionalService/AdditionalService';
import AboutUs from '../pages/AboutUs/AboutUs';
import TravelInfoCheckIn from '../pages/TravelInfo/CheckIn/TravelInfoCheckIn';
import BaggageInfo from '../pages/TravelInfo/BaggageInfo/BaggageInfo';
import TravelDocument from '../pages/TravelInfo/TravelDocument/TravelDocument';
import Ticket from '../pages/TicketPage/TicketPage';
import { SearchFlightStateProvider } from '../context/SearchFlightState/SearchFlightState';
import TicketCard from '../pages/TicketCart/TicketCart';
import { TicketProvider } from '../context/TicketContext/TicketContext';
import PassengerInfo from '../components/BookingSection/Book/Content/PassengerInfo/PassengerInfo';
import PassengerInfor from '../pages/PassengerInfo/PassengerInfor';
import { BookedTicketProvider } from '../context/BookedTicket/BookedTicket';
import Payment from '../pages/Payment/Payment';
import LoginPage from '../pages/LoginPage/LoginPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <SearchFlightStateProvider>
        <ScrollToTop />
        <HomePage />
      </SearchFlightStateProvider>
      </>
    ),
  },
  {
    path: "/explore",
    element: (
      <>
        <ScrollToTop />
        <Explore />
      </>
    ),
  },
  {
    path: "/explore/offer",
    element: (
      <>
        <ScrollToTop />
        <Offer />
      </>
    ),
  },
  {
    path: "/explore/destination",
    element: (
      <>
        <ScrollToTop />
        <Destination />
      </>
    ),
  },
  {
    path: "/explore/experience",
    element: (
      <>
        <ScrollToTop />
        <Experience />
      </>
    ),
  },
  {
    path: "/explore/destination/:nameCity",
    element: (
      <>
        <SearchFlightStateProvider>
          <ScrollToTop />
          <CityInfo />
        </SearchFlightStateProvider>
      </>
    ),
  },
  {
    path: "/booking",
    element: (
      <>
        <ScrollToTop />
        <Booking />
      </>
    ),
  },
  {
    path: "/ticket",
    element: (
      <>
      <TicketProvider>
        <ScrollToTop />
        <Ticket />
      </TicketProvider>
      </>
    ),
  },
  {
    path: "/ticket/ticketCart",
    element: (
      <>
      <TicketProvider>
        <ScrollToTop />
        <TicketCard />
      </TicketProvider>
      </>
    ),
  },
  {
    path: "/ticket/ticketCart/passengerInfor",
    element: (
      <>
      
        <TicketProvider>
          <BookedTicketProvider>
          <ScrollToTop />
          <PassengerInfor />
          </BookedTicketProvider>
        </TicketProvider>
      
      </>
    ),
  },
  {
    path: "/ticket/ticketCart/passengerInfor/payment",
    element: (
      <>
      
        <TicketProvider>
          <BookedTicketProvider>
          <ScrollToTop />
          <Payment />
          </BookedTicketProvider>
        </TicketProvider>
      
      </>
    ),
  },
  {
    path: "/about us",
    element: (
      <>
        <ScrollToTop />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/travel-info",
    element: (
      <>
        <ScrollToTop />
        <TravelInfo />
      </>
    ),
  },
  {
    path: "/booking/booking-info",
    element: (
      <>
        <ScrollToTop />
        <BookingInformation />
      </>
    ),
  }, 
  {
    path: "/booking/additional-services",
    element: (
      <>
        <ScrollToTop />
        <AdditionalService />
      </>
    ),
  }, 
  {
    path: "/travel-info/check-in",
    element: (
      <>
        <ScrollToTop />
        <TravelInfoCheckIn />
      </>
    )
  }, 
  {
    path: "/travel-info/baggageinfo",
    element: (
      <>
        <ScrollToTop />
        <BaggageInfo />
      </>
    )
  }, 
  {
    path: "/travel-info/traveldocument",
    element: (
      <>
        <ScrollToTop />
        <TravelDocument />
      </>
    )
  }, 
  {
    path: "/login", 
    element: (
      <>
        <ScrollToTop />
        <LoginPage />
      </>
    )
  }
]);
