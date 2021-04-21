import React, {useState} from 'react';
import {Container} from 'reactstrap';
import Nasa from './Nasa';
import Weather from './Weather';

const Main = (props) => {
    return(
        <div>
            {props.isNasa
                ? <Nasa longitude = {props.longitude} latitude = {props.latitude}/>
                : props.isWeather
                    ? <Weather longitude = {props.longitude} latitude = {props.latitude}/>
                    : <></>
            }
        </div>
    )
}

export default Main;