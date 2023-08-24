import './App.css';
import { useCallback, memo, useEffect, useReducer } from 'react';
import { useFetch } from './hooks/UseFetch';
import Form from './components/Form';
import Weather from './components/Weather';
import { INITIAL_STATE, weatherReducer } from './reducers/weatherReducer';

function App() {

  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE)

  const handlChange = useCallback((e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value }
    })
  })

  useEffect(() => {
    fetchWeatherData(state.city, state.country)
  }, [])

  const fetchWeatherData = () => {
    if (!state.city || !state.country) {
      alert("fill all the required inputs")
    } else {
      dispatch({ type: "FETCH_START" })
      useFetch(state.city, state.country).then((data) => {
        if (data.message) {
          dispatch({ type: "FETCH_ERROR" })
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
      })
    }
  }

  if (state.isLoading) {
    return <div id="loading">|</div>
  }
  return (

    <div className="App">

      <Form handlChange={handlChange} state={state} fetchWeatherData={fetchWeatherData} />
      {state.weatherData ? <Weather state={state} /> : <h1>you have entered invalid data</h1>}

    </div>
  );
}

export default memo(App);
