import { useState } from 'react';
import weatherBackup from './temp.json';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(weatherBackup);
    const LOCATION = import.meta.env.VITE_LATITUDE_LONGITUDE; // "{latitude},{longitude}"
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const fetchWeather = async () => {
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

    const weatherIconMap: { [key: string]: string } = {
        'clear-day': 'clear_day',
        'clear-night': 'clear_night',
        'partly-cloudy-day': 'partly_cloudy_day',
        'partly-cloudy-night': 'partly_cloudy_night',
        'cloudy': 'cloudy',
        'thunderstorm': 'thunderstorm',
        'rain': 'rainy',
        'snow': 'weather_snowy',
        'wind': 'air',
        'sleet': 'rainy_snow',
        'hail': 'weather_hail',
        'fog': 'foggy',
    };

    function getWeatherIcon(type: string) {
        return weatherIconMap[type] || 'sentiment_sad';
    }



    return (
        <div>
            <div className='flex-col shad pb-4 m-2'>
                <div className='flex weather'>
                    <i className="material-symbols-outlined" style={{ fontSize: '36px', color: 'white' }}>{getWeatherIcon(weatherData.currently.icon)}</i>
                    <h1>{Math.round(weatherData.currently.apparentTemperature)}°C</h1>
                </div>
                <p className='weather summary flex'>{weatherData.currently.summary}</p>
            </div>
            <button onClick={fetchWeather}>Refresh Weather</button>
        </div>
    );
}

export default WeatherComponent;