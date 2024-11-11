import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { testAPI } from './api/test';
import NavBar from './components/NavBar/NavBar';


function App() {
  // useEffect(() => {
  //   testAPI().then((res) => {
  //     console.log(res);
  //   })
  // }, [])


  return (
    <div className="container">
      <NavBar />
    </div>
  );
}
export default App;
