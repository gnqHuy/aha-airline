import {createBrowserRouter} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import NavBar from '../components/NavBar/NavBar';
import Explore from '../pages/Explore/Explore';

export const router = createBrowserRouter([
    {
        path: "/", 
        element: <HomePage />
    },
    {
        path: "/explore", 
        element: <Explore />
    },
])