import React, { useState, useEffect } from 'react';
import stormIcon from '../icons/storm.png';
import partlyCloudyIcon from '../icons/partlyCloud.png';
import rainIcon from '../icons/rain.png';
import snowIcon from '../icons/snow.png';
import clearIcon from '../icons/clear.png';
import cloudyIcon from '../icons/clouds.png';


const Weather = (props) => {
  const [temp, setTemp] = useState('');
  const [desc, setDesc] = useState('');
  const [cityName, setCityName] = useState('');
  const [Id, setId] = useState('');
  const [tempIcon, setTempIcon] = useState('');

    let lat = props.latitude;
    let lon = props.longitude;
    const key = 'c2dcab1e8ebb45fa2c4ee5ec8c694545';

    let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`


    useEffect(() => {
    fetch(weatherURL)
    .then((response) => response.json())
    .then((json) => {
        //console.log(json);
        //console.log(lat,lon)

        setCityName(json.name) //cityName
        setTemp(json.main.temp) //setTemp
        setDesc(json.weather[0].description)
        setId(json.weather[0].id)  //setDesc
    }, (lat,lon));

        if (Id < 240){
            setTempIcon(stormIcon) //storm
        } 
        else if (Id < 350){
             setTempIcon(partlyCloudyIcon)//partly could
        }
        else if (Id < 550){
         setTempIcon(rainIcon)//rain   
        }
        else if (Id < 650){
            setTempIcon(snowIcon)//snow
        }
        else if (Id === 800){
            setTempIcon(clearIcon)
        }
        else if (Id < 805 ){
            setTempIcon(cloudyIcon)//clouds
        }
    })
        



return (
    <div className="weatherApp">
        <div className="card">
               <h3>{`${cityName}  -  ${temp}  -  ${desc}`}</h3>
            <div className="temp">
                <img id="tempIcon" src={tempIcon} alt="Weather Icons"></img>
            </div>
            {/* <div className="feel">
                
            </div> */}
        </div>
    </div>
)
}



export default Weather;