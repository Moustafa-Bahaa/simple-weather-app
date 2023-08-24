const API_KEY = "18c0fcd463944b729a97e1d0cc91fa3d"

export const useFetch = async (city, country) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`)
        const weather = await response.json();
        return weather
    }
    catch (err) {
        console.log(err);
    }
}