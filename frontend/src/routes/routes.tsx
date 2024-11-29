import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NavBar from '../components/NavBar/NavBar';
import Explore from '../pages/Explore/Explore';
import Booking from '../pages/Booking/Booking';
import TravelInfo from '../pages/TravelInfo/TravelInfo';
import Destination from '../pages/Destination/Destination';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <HomePage />
    },
    {
        path: "/explore", 
        element: <Explore />
    },
    {
        path: "/explore/destination", 
        element: <Destination />
    },
    {
        path: "/explore/destination/:name", 
        element: <HomePage />
    },
    {
        path: "/booking", 
        element: <Booking />
    },
    {
        path: "/travelinfo", 
        element: <TravelInfo />
    }
])