import React, { memo } from 'react'

const Form = ({handleCountryChange, handleCityChange, city, country, fetchWeatherData}) => {
  return (
    <div className='form-container'>
            <input type='text' value={country} onChange={handleCountryChange} placeholder='Country' required/>
            <input type='text' value={city}  onChange={handleCityChange} placeholder='City' required/>
            <button onClick={()=>fetchWeatherData(city, country)}>Get Weather</button>
    </div>
  )
}

export default memo(Form) 
