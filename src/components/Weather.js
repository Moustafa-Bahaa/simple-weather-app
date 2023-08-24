import React, { memo } from 'react'
import logo from '../assets/cloudy_4868307.png';
const Weather = ({ state }) => {
    return (
        <div className='weather-container'>
            <h1>{state.weatherData?.sys?.country} , {state.weatherData?.name}</h1>
            <img src={logo} />

            <h1>Temp : {Math.round(state.weatherData?.main?.temp - 273.15)}<sup> o </sup>C</h1>
            <div className='additional-info'>
                <h3>Pressure : {state.weatherData?.main?.pressure}</h3>
                <h3>Humidity : {state.weatherData?.main?.humidity}</h3>
            </div>
        </div>
    )
}

export default memo(Weather) 
