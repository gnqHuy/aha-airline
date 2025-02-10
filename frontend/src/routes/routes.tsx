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
import Register from '../pages/LoginPage/Register/Register';
import Admin from '../pages/Admin/Admin';
import Aircrafts from '../pages/Admin/Aircrafts/Aircrafts';
import Airports from '../pages/Admin/Airports/Airports';
import Cities from '../pages/Admin/Cities/Cities';
import FlightRoutes from '../pages/Admin/FlightRoutes/FlightRoutes';
import Flights from '../pages/Admin/Flights/Flights';
import BookManagement from '../pages/BookManagement/BookManagement';
import CheckInManagement from '../pages/CheckInManagement/CheckInManagement';
import YourTicket from '../pages/YourTicket/YourTicket';
import ProtectedRoute from './protectedRoute';

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
          <ScrollToTop />
          <PassengerInfor />
      </>
    ),
  },
  {
    path: "/ticket/ticketCart/passengerInfor/payment",
    element: (
      <>
          <ScrollToTop />
          <Payment />
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
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRoles={["SuperAdmin", "FlightAdmin"]}>
          <>
            <ScrollToTop />
            <Admin />
          </>
        </ProtectedRoute>
    ),
    children: [
      {
        path: "aircrafts",
        element: <Aircrafts/>,
      },
      {
        path: "airports",
        element: <Airports/>,
      },
      {
        path: "cities",
        element: <Cities/>,
      },
      {
        path: "flight-routes",
        element: <FlightRoutes/>,
      },
      {
        path: "flights",
        element: <Flights/>,
      },
    ],
  },
  {
    path: "/book-management", 
    element: (
      <>
        <ScrollToTop />
        <BookManagement />
      </>
    )
  }, 
  {
    path: "/checkin-management", 
    element: (
      <>
        <ScrollToTop />
        <CheckInManagement />
      </>
    )
  }, 
  {
    path: "/news", 
    element: (
      <>
        <ScrollToTop />
        <NewsPage />
      </>
    )
  }, 
  {
    path: "/your-ticket", 
    element: (
      <>
        <ScrollToTop />
        <YourTicket />
      </>
    )
  }
]);
