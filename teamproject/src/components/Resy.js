//API not needed for project

import React from 'react';

const Resy = (props) => {

    const lat = 39.770221;
    const long = -86.145656;
    const day = 2021-04-20; //YYYY-MM-DD

    let url = `https://resy.p.rapidapi.com/4/find
        ?lat=${lat}
        &long=${long}
        &&day=${day}&party_size=2`

    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "",//get your own key
		    "x-rapidapi-host": "resy.p.rapidapi.com",
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch((err) => console.log(err))

    return(
        <div>

        </div>
    )
}

export default Resy;