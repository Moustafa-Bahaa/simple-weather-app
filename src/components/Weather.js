import React, { memo } from 'react'
import logo from '../assets/cloudy_4868307.png';
const Weather = ({ weatherData }) => {
    return (
        <div className='weather-container'>
            <h1>{weatherData?.sys?.country} , {weatherData?.name}</h1>
            <img src={logo} />

            <h1>Temp : {Math.round(weatherData?.main?.temp - 273.15)}<sup> o </sup>C</h1>
            <div className='additional-info'>
                <h3>Pressure : {weatherData?.main?.pressure}</h3>
                <h3>Humidity : {weatherData?.main?.humidity}</h3>
            </div>
        </div>
    )
}

export default memo(Weather) 
