import { useState } from 'react';
import weatherBackup from './temp.json'

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(weatherBackup);
    const LOCATION = import.meta.env.VITE_LATITUDE_LONGITUDE; // "{latitude},{longitude}"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

        const fetchWeather = async() => {
            try { 
                const response = await fetch(`https://api.pirateweather.net/forecast/${API_KEY}/${LOCATION}?units=ca`);
                if (!response.ok) {
                    throw new Error('Error fetching weather data');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (Error) {
                console.log(Error);
            }
        };


    return (
        <div>
            <h2>Weather</h2>
            <p>Timezone: {weatherData.timezone}</p>
            <button onClick={fetchWeather}>Refresh Weather</button>
        </div>
    );
}

export default WeatherComponent;