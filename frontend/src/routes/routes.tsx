import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import Explore from "../pages/Explore/Explore";
import Offer from "../pages/Offer/Offer";
import Destination from "../pages/Destination/Destination";
import Experience from "../pages/Experience/Experience";
import CityInfo from "../pages/CityInfo/CityInfo";
import Booking from "../pages/Booking/Booking";
import BookingInformation from "../pages/Booking/BookingInformation/BookingInformation";
import AdditionalService from "../pages/Booking/AdditionalService/AdditionalService";
import TravelInfo from "../pages/TravelInfo/TravelInfo";
import TravelInfoCheckIn from "../pages/TravelInfo/CheckIn/TravelInfoCheckIn";
import BaggageInfo from "../pages/TravelInfo/BaggageInfo/BaggageInfo";
import TravelDocument from "../pages/TravelInfo/TravelDocument/TravelDocument";
import Ticket from "../pages/TicketPage/TicketPage";
import TicketCard from "../pages/TicketCart/TicketCart";
import PassengerInfor from "../pages/PassengerInfo/PassengerInfor";
import Payment from "../pages/Payment/Payment";
import AboutUs from "../pages/AboutUs/AboutUs";
import LoginPage from "../pages/LoginPage/LoginPage";
import Register from "../pages/RegisterPage/Register";
import Admin from "../pages/Admin/Admin";
import Aircrafts from "../pages/Admin/Aircrafts/Aircrafts";
import Airports from "../pages/Admin/Airports/Airports";
import Cities from "../pages/Admin/Cities/Cities";
import FlightRoutes from "../pages/Admin/FlightRoutes/FlightRoutes";
import Flights from "../pages/Admin/Flights/Flights";
import BookManagement from "../pages/BookManagement/BookManagement";
import CheckInManagement from "../pages/CheckInManagement/CheckInManagement";
import YourTicket from "../pages/YourTicket/YourTicket";
import ScrollLayout from "../layout/ScrollLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ScrollLayout><HomePage /></ScrollLayout>,
  },
  {
    path: "/explore",
    children: [
      { index: true, element: <ScrollLayout><Explore /></ScrollLayout> },
      { path: "offer", element: <ScrollLayout><Offer /></ScrollLayout> },
      { path: "destination", element: <ScrollLayout><Destination /></ScrollLayout> },
      { path: "experience", element: <ScrollLayout><Experience /></ScrollLayout> },
      { path: "destination/:nameCity", element: <ScrollLayout><CityInfo /></ScrollLayout> },
    ],
  },
  {
    path: "/booking",
    children: [
      { index: true, element: <ScrollLayout><Booking /></ScrollLayout> },
      { path: "booking-info", element: <ScrollLayout><BookingInformation /></ScrollLayout> },
      { path: "additional-services", element: <ScrollLayout><AdditionalService /></ScrollLayout> },
    ],
  },
  {
    path: "/travel-info",
    children: [
      { index: true, element: <ScrollLayout><TravelInfo /></ScrollLayout> },
      { path: "check-in", element: <ScrollLayout><TravelInfoCheckIn /></ScrollLayout> },
      { path: "baggageinfo", element: <ScrollLayout><BaggageInfo /></ScrollLayout> },
      { path: "traveldocument", element: <ScrollLayout><TravelDocument /></ScrollLayout> },
    ],
  },
  {
    path: "/ticket",
    children: [
      { index: true, element: <ScrollLayout><Ticket /></ScrollLayout> },
      { path: "ticketCart", element: <ScrollLayout><TicketCard /></ScrollLayout> },
      { path: "ticketCart/passengerInfor", element: <ScrollLayout><PassengerInfor /></ScrollLayout> },
      { path: "ticketCart/passengerInfor/payment", element: <ScrollLayout><Payment /></ScrollLayout> },
    ],
  },
  {
    path: "/about-us",
    element: <ScrollLayout><AboutUs /></ScrollLayout>,
  },
  {
    path: "/login",
    element: <ScrollLayout><LoginPage /></ScrollLayout>,
  },
  {
    path: "/sign-up",
    element: <ScrollLayout><Register /></ScrollLayout>,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute requiredRoles={["SuperAdmin", "FlightAdmin"]}>
        <ScrollLayout><Admin /></ScrollLayout>
      </ProtectedRoute>
    ),
    children: [
      { path: "aircrafts", element: <Aircrafts /> },
      { path: "airports", element: <Airports /> },
      { path: "cities", element: <Cities /> },
      { path: "flight-routes", element: <FlightRoutes /> },
      { path: "flights", element: <Flights /> },
    ],
  },
  {
    path: "/book-management",
    element: <ScrollLayout><BookManagement /></ScrollLayout>,
  },
  {
    path: "/checkin-management",
    element: <ScrollLayout><CheckInManagement /></ScrollLayout>,
  },
  {
    path: "/your-ticket",
    element: <ScrollLayout><YourTicket /></ScrollLayout>,
  },
]);
