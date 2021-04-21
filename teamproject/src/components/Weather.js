<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import stormIcon from '../icons/storm.png';
import partlyCloudyIcon from '../icons/partlyCloud.png';
import rainIcon from '../icons/rain.png';
import snowIcon from '../icons/snow.png';
import clearIcon from '../icons/clear.png';
import cloudyIcon from '../icons/clouds.png';


let lat = '35';
let lon = '139'; 
const key = 'c2dcab1e8ebb45fa2c4ee5ec8c694545';

let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`


const Weather = (props) => {
  const [temp, setTemp] = useState([]);
  const [desc, setDesc] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [Id, setId] = useState([]);
  const [tempIcon, setTempIcon] = useState([]);

  
    fetch(weatherURL)
    .then((response) => response.json())
    .then((response) => {
        //console.log(response);
        setCityName(response.name) //cityName
        setTemp(response.main.temp) //setTemp
        setDesc(response.weather[0].description)
        setId(response.weather[0].id)  //setDesc

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

  


  //fetch(weatherURL)
 //.then(res => res.json())
 //.then(res => setResponseObj(res))

//console.log(setResponseObj);

 //const cityName = res.data.name;
 //let temp = data.main.temp
 //let feelsLike = data.main.feels_like
 //let desc = data.weather[0].description



 
//console.log(data)



return (
    <div className="weatherApp">
        <div className="card">
            <span className="city">
               {cityName}
            </span>
            <div className="temp">
                {temp}
                <img src={tempIcon} alt="Weather Icons"></img>
            </div>
            <div className="feel">
                {desc}
            </div>
        </div>
    </div>
)
}



export default Weather;  
=======
import React from 'react';

function Weather(props) {
    return(
        <div>
            <h1>Weather API</h1>
            <div>Below is the longitude</div>
            <div>{props.longitude}</div>
            <div>Below is the latitude</div>
            <div>{props.latitude}</div>
        </div>
    )
}

export default Weather;
>>>>>>> 175a4e5725be1aec1e7d58c239b7dcaedf3a522a
