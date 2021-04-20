import React, {useState, useEffect} from 'react';
import './App.css';

const App = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

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
    <div>
      <AppLoader />
      <Main />
    </div>
  );
}

export default App;