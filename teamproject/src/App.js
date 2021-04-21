import React, { useState, useEffect } from 'react';
import AppLoader from './components/AppLoader';
import Main from './components/Main';
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
      <AppLoader 
        setIsNasa = {setIsNasa} 
        setIsWeather = {setIsWeather}/>
      <hr />
      <Main 
        isNasa = {isNasa} 
        isWeather = {isWeather}
        longitude = {longitude}
        latitude = {latitude}/>
    </div>
  );
}

export default App;