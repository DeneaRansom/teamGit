import React, { useState } from 'react';
import AppLoader from './components/AppLoader';
import Main from './components/Main';
import './App.css';


function App() {
  const [isNasa, setIsNasa] = useState(false);
  const [isWeather, setIsWeather] = useState(false);
  const [isResy, setIsResy] = useState(false);

  return (
    <div className = 'App'>
      <AppLoader setIsNasa = {setIsNasa} setIsWeather = {setIsWeather} setIsResy = {setIsResy}/>
      <hr />
      <Main isNasa = {isNasa} isWeather = {isWeather} isResy = {isResy}/>
    </div>
  );
}

export default App;