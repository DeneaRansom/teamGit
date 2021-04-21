import React, {useEffect, useState, } from "react"


const Nasa = (props) => {
    const lat = props.latitude;
    const long = props.longitude;
    const date = "2020-04-01"
    const dim = .25; //sets dimension of photo
    const api_key = "eWJ8epFCnbCbAKuiUQBUMprUoM3xWtWHaTZtTyaO";

    const [imageSource, setImageSource] = useState("")

    if (lat && long) {
        console.log("Will this keep running until the condish is met?");
        let url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&dim=${dim}&date=${date}&api_key=${api_key}`;
        
        fetch(url)
        .then(res => setImageSource(res.url))
    }


    return(
        <div>
            <h3>Pulling Satellite Image</h3>
            <p>We are spying on you</p>
           <img src={imageSource}></img>
        </div>
    )
}
export default Nasa;