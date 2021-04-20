<<<<<<< HEAD
import React from "react";
=======
import React, { useState, useEffect } from 'react';
import AppLoader from './components/AppLoader';
import Main from './components/Main';
>>>>>>> e8fe5b9332912a4b4680746681abcea2c443d7bf
import './App.css';

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [isNasa, setIsNasa] = useState(false);
  const [isWeather, setIsWeather] = useState(false);

  useEffect(() => {
    const getLocation = () => {
      console.log("getLocation is firing");
      navigator.geolocation.getCurrentPosition(showPosition);
    };

    const showPosition = (position) => {
      console.log("Show position is firing");
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    getLocation();
  }, []);

  return (
    <div className = 'App'>
      <AppLoader setIsNasa = {setIsNasa} setIsWeather = {setIsWeather}/>
      <hr />
      <Main isNasa = {isNasa} isWeather = {isWeather}/>
    </div>
  );
}

export default App;