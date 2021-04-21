import React, { useState, useEffect } from 'react';
import AppLoader from './components/AppLoader';
import Main from './components/Main';
import './App.css';

const App = () => {
  const [latitude, setLatitude] = useState(false);
  const [longitude, setLongitude] = useState(false);
  const [isNasa, setIsNasa] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [resultsAreEmpty, setResultsAreEmpty] = useState(true);

  if(latitude == false && longitude == false) {
    const getLocation = () => {
      console.log("getLocation is firing");
      navigator.geolocation.getCurrentPosition(showPosition);
    };
    getLocation();

    function showPosition(position) {
      console.log("Show position is firing");
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };
  }

  useEffect(() => {
    if (resultsAreEmpty)  {
      if(latitude && longitude) {
        console.log("I would be fetching with",latitude, longitude)
        setResultsAreEmpty(false)
      } else {
        console.log("Waiting on latitude, longitude")
      }

    } else {
      console.log("Bypassing fetch request")
    }
  }, [latitude, longitude]);


  return (
    <div className = 'App'>
      <AppLoader setIsNasa = {setIsNasa} setIsWeather = {setIsWeather}/>
      <hr />
      <h3>{latitude} {longitude}</h3>
      <Main isNasa = {isNasa} isWeather = {isWeather}/>
    </div>
  );
}

export default App;