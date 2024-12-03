import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Explore from '../pages/Explore/Explore';
import Booking from '../pages/Booking/Booking';
import TravelInfo from '../pages/TravelInfo/TravelInfo';
import Destination from '../pages/Destination/Destination';
import CityInfo from '../pages/CityInfo/CityInfo';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'; // Import ScrollToTop
import Experience from '../pages/Experience/Experience';
import Offer from '../pages/Offer/Offer';
import AboutUs from '../pages/AboutUs/AboutUs';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <HomePage />
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
        <ScrollToTop />
        <CityInfo />
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
    path: "/about us",
    element: (
      <>
        <ScrollToTop />
        <AboutUs />
      </>
    ),
  },
  {
    path: "/travelinfo",
    element: (
      <>
        <ScrollToTop />
        <TravelInfo />
      </>
    ),
  }
]);
