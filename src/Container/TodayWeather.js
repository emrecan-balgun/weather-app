import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { 
    city, 
    currentMainDescription, 
    currentDescription, 
    currentIcon, 
    currentTemperature, 
    currentWind,
    currentHumidity, 
    currentPressure, 
    changeCurrentMainDescription, 
    changeCurrentDescription, 
    changeCurrentIcon, 
    changeCurrentTemperature, 
    changeCurrentWind, 
    changeCurrentHumidity, 
    changeCurrentPressure
} from '../redux/weatherSlice';
import { useEffect } from 'react';

function TodayWeather() {
    const dispatch = useDispatch();

    const cityName = useSelector(city);
    const mainDescription = useSelector(currentMainDescription);
    const description = useSelector(currentDescription);
    const icon = useSelector(currentIcon);
    const temperature = useSelector(currentTemperature);
    const wind = useSelector(currentWind);
    const humidity = useSelector(currentHumidity);
    const pressure = useSelector(currentPressure);

    useEffect(() => {
        axios(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(response => dispatchData(response.data.list[0]))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityName])

    function dispatchData(response) {
        if(response.name) {
            dispatch(changeCurrentTemperature((response.main.temp)));
            dispatch(changeCurrentIcon(`http://openweathermap.org/img/w/${response.weather[0].icon}.png`));
            dispatch(changeCurrentMainDescription((response.weather[0].main)));
            dispatch(changeCurrentDescription((response.weather[0].description)));
            dispatch(changeCurrentWind((response.wind.speed)));
            dispatch(changeCurrentHumidity((response.main.humidity)));
            dispatch(changeCurrentPressure((response.main.pressure)));
        }
    }

    return (
        <div className="todayWeather">
            <div className="todayWeather__weather">
                <img className="todayWeather__weather__icon" src={icon} alt={mainDescription} />
                <span className="todayWeather__weather__iconName">{description}</span>
            </div>
            <span className="todayWeather__temperature">{Math.ceil(temperature)}°C</span>
            <div className="todayWeather__status">
                <span className="todayWeather__status__wind">Wind: {wind} kmph</span>
                <span className="todayWeather__status__precip">Humidity: {humidity}%</span>
                <span className="todayWeather__status__pressure">Pressure: {pressure} mb</span>
            </div>
        </div>
    )
}

export default TodayWeather
