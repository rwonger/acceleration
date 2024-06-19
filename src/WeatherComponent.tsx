import { useEffect, useState } from 'react';
import weatherBackup from './temp.json';

function WeatherComponent() {
    const [weatherData, setWeatherData] = useState(weatherBackup);
    const [location, setLocation] = useState("");
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
    const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation(`${position.coords.latitude},${position.coords.longitude}`);
        }, (error) => {
            console.log(error);
        });
    }, []);

    useEffect(() => {
        if (location) {
            const fetchWeather = async () => {
                try {
                    const cachedWeather = localStorage.getItem('weatherData');
                    const cachedTimestamp = localStorage.getItem('weatherDataTimestamp');
                    const now = new Date().getTime();

                    // uses cached weather data within cached time duration instead of making new api call every reload
                    if (cachedWeather && cachedTimestamp && now - parseInt(cachedTimestamp, 10) < CACHE_DURATION) {
                        setWeatherData(JSON.parse(cachedWeather));
                    } else {
                        const response = await fetch(`https://api.pirateweather.net/forecast/${API_KEY}/${location}?units=ca`);
                        if (!response.ok) {
                            throw new Error('Error fetching weather data');
                        }
                        const data = await response.json();
                        
                        // displays alert if weather data is not returned properly
                        if ('statusCode' in data) {
                            alert('Please enable locational services for weather services to work :(')
                        } else {
                            setWeatherData(data);
                            localStorage.setItem('weatherData', JSON.stringify(data));
                            localStorage.setItem('weatherDataTimestamp', now.toString());
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
            };
            fetchWeather();
        }
    }, [location, API_KEY, CACHE_DURATION]);

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
            <div className='flex-col pb-4 m-2'>
                <div className='flex weather'>
                    <i className="material-symbols-outlined weatherIcon px-1">{getWeatherIcon(weatherData.currently.icon)}</i>
                    <h1>{Math.round(weatherData.currently.temperature)}°C</h1>
                </div>
                <p className='weather summary flex'>{weatherData.currently.summary}</p>
                <p className='text-right text-base'>{weatherData.timezone.split('/')[1]}</p>

            </div>
            {/* <button onClick={() => setLocation(location)}>Refresh Weather</button> */}
        </div>
    );
}

export default WeatherComponent;
