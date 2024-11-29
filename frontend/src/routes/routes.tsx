import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NavBar from '../components/NavBar/NavBar';
import Explore from '../pages/Explore/Explore';
import Booking from '../pages/Booking/Booking';
import TravelInfo from '../pages/TravelInfo/TravelInfo';

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
        path: "/booking", 
        element: <Booking />
    },
    {
        path: "/travelinfo", 
        element: <TravelInfo />
    }
])