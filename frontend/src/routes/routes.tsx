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
import PassengerInfor from '../pages/PassengerInfo/PassengerInfor';
import Payment from '../pages/Payment/Payment';
import LoginPage from '../pages/LoginPage/LoginPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import { BookedTicketProvider } from '../context/BookedFlight/BookedFlight';
import Register from '../pages/LoginPage/Register/Register';

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
    path: "/explore/destination/:city",
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
        <ScrollToTop />
        <Ticket />
      </>
    ),
  },
  {
    path: "/ticket/ticketCart",
    element: (
      <>
        <ScrollToTop />
        <TicketCard />
      </>
    ),
  },
  {
    path: "/ticket/ticketCart/passengerInfor",
    element: (
      <>
        <BookedTicketProvider>
          <ScrollToTop />
          <PassengerInfor />
        </BookedTicketProvider>      
      </>
    ),
  },
  {
    path: "/ticket/ticketCart/passengerInfor/payment",
    element: (
      <>
        <BookedTicketProvider>
          <ScrollToTop />
          <Payment />
        </BookedTicketProvider>      
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
  }, 
  {
    path: "/sign-up", 
    element: (
      <>
        <ScrollToTop />
        <Register />
      </>
    )
  }
]);
