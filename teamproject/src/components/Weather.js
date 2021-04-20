import React from 'react';

let lat = '35';
let lon = '139'; 
const key = 'c2dcab1e8ebb45fa2c4ee5ec8c694545';


let tempIcon = document.querySelector('temp-icon');

let weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`

//console.log(weatherURL);

const Weather = (props) => {

fetch(weatherURL)
.then(function (response) {
    //console.log(response);
    return response.json()
})
.then(data => {
    //console.log(data.name)  //cityname.value
    //console.log(data.main.temp)  //temp.value
    //console.log(data.main.feels_like); //feel
    //console.log((data.weather[0].description)); //description

    let name = data;
    let temp = data.main.temp
    let feelsLike = data.main.feels_like
    let desc = data.weather[0].description

})    
};


export default Weather;  