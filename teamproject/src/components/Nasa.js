import React from 'react';

function Nasa(props) {
    return(
        <div>
            <h1>NASA API</h1>
            <div>Below is the longitude</div>
            <div>{props.longitude}</div>
            <div>Below is the latitude</div>
            <div>{props.latitude}</div>
        </div>
    )
}

export default Nasa;