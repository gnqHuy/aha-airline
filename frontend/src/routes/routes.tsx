import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Explore from '../pages/Explore/Explore';
import Booking from '../pages/Booking/Booking';
import TravelInfo from '../pages/TravelInfo/TravelInfo';
import Destination from '../pages/Destination/Destination';
import CityInfo from '../pages/CityInfo/CityInfo';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'; // Import ScrollToTop

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
    path: "/explore/destination",
    element: (
      <>
        <ScrollToTop />
        <Destination />
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
    path: "/travelinfo",
    element: (
      <>
        <ScrollToTop />
        <TravelInfo />
      </>
    ),
  }
]);
