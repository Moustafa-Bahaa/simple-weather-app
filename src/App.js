import './App.css';
import { useState, useCallback, memo } from 'react';
import { useFetch } from './hooks/UseFetch';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {

  const [weatherData, setWeatherData] = useState()
  const [isLoading, setIsloading] = useState(false)
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")

  const handleCityChange = useCallback((e) => {
    const value = e.target.value
    setCity(value)
  }, [city, setCity])

  const handleCountryChange = useCallback((e) => {
    const value = e.target.value
    setCountry(value)
  }, [country, setCountry])

  const fetchWeatherData = useCallback((city, country) => {
    if (!city || !country) {
      alert("fill all the required inputs")
    } else {
      useFetch(city, country).then((data) => {
        if (data.message) {
          alert("enter valid data")
        } else {
          console.log(data.message);
          setIsloading(true)
          setWeatherData(data)
          setIsloading(false)
          setCity("")
          setCountry("")
        }
      })
    }
  }, [city, country])


  if (isLoading) {
    return <div id="loading">|</div>
  }

  return (

    <div className="App">

      <Form handleCityChange={handleCityChange} handleCountryChange={handleCountryChange} city={city} country={country} fetchWeatherData={fetchWeatherData} />
      {weatherData && <Weather weatherData={weatherData} />}

    </div>
  );
}

export default memo(App);
