import React, { memo } from 'react'

const Form = ({ handlChange, state, fetchWeatherData }) => {
  return (
    <div className='form-container'>
      <input type='text' value={state.country} onChange={handlChange} placeholder='Country' required name='country' />
      <input type='text' value={state.city} onChange={handlChange} placeholder='City' required name='city' />
      <button onClick={() => fetchWeatherData(state.city, state.country)}>Get Weather</button>
    </div>
  )
}

export default memo(Form) 
