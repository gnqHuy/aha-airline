import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { testAPI } from './api/test';
import NavBar from './components/NavBar/NavBar';
import NewsSection from './components/NewsSection/NewsSection';
import FlightCard from './components/FlightCard/FlightCard';


function App() {
  useEffect(() => {
    testAPI().then((res) => {
      console.log(res);
    })
  }, [])

  return(
    <></>
  );
}

export default App;
