import React, {useState} from 'react';
import {Container} from 'reactstrap';
import Nasa from './Nasa';
import Weather from './Weather';

const Main = (props) => {
    return(
        <div>
            {props.isNasa
                ? <Nasa />
                : props.isWeather
                    ? <Weather />
                    : <></>
            }
        </div>
    )
}

export default Main;