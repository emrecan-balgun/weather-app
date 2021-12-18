import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { 
    city,
    latitude,
    longitude,
    currentMainDescription, 
    currentDescription, 
    currentIcon, 
    currentTemperature, 
    currentMinTemperature, 
    currentMaxTemperature, 
    currentWind,
    currentHumidity, 
    currentPressure, 
    changeCurrentMainDescription, 
    changeCurrentDescription, 
    changeCurrentIcon, 
    changeCurrentTemperature, 
    changeCurrentMinTemperature, 
    changeCurrentMaxTemperature, 
    changeCurrentWind, 
    changeCurrentHumidity, 
    changeCurrentPressure,
    changeLatitude,
    changeLongitude
} from '../redux/weatherSlice';
import { useEffect } from 'react';

function TodayWeather() {
    const dispatch = useDispatch();

    const cityName = useSelector(city);
    const lat = useSelector(latitude);
    const lon = useSelector(longitude);
    const mainDescription = useSelector(currentMainDescription);
    const description = useSelector(currentDescription);
    const icon = useSelector(currentIcon);
    const temperature = useSelector(currentTemperature);
    const minTemperature = useSelector(currentMinTemperature);
    const maxTemperature = useSelector(currentMaxTemperature);
    const wind = useSelector(currentWind);
    const humidity = useSelector(currentHumidity);
    const pressure = useSelector(currentPressure);

    function getGeocode() {
         axios(`http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_GECODE_KEY}&query=${cityName}`)
        .then(response => dispatchGeocode(response.data.data[0]))
    }

    // useEffect(() => {
    //     getGeocode();

    //     if(lat != '') {
    //         axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    //         .then(response => dispatchData(response.data.current))
    //     }
    // }, [cityName])

    useEffect(() => {
        getGeocode();

        if(lat != ''){
            axios(`https://api.openweathermap.org/data/2.5/find?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
            .then(response => dispatchData(response.data.list[0]))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cityName])

    function dispatchGeocode(response) {
        // console.log(response.name);
        // console.log(response.latitude);
        // console.log(response.longitude);
        dispatch(changeLatitude((response.latitude)));
        dispatch(changeLongitude((response.longitude)));
    }

    function dispatchData(response) {
        dispatch(changeCurrentTemperature((response.main.temp)));
        dispatch(changeCurrentMinTemperature((response.main.temp_min)));
        dispatch(changeCurrentMaxTemperature((response.main.temp_max)));
        dispatch(changeCurrentIcon(`http://openweathermap.org/img/w/${response.weather[0].icon}.png`));
        dispatch(changeCurrentMainDescription((response.weather[0].main)));
        dispatch(changeCurrentDescription((response.weather[0].description)));
        dispatch(changeCurrentWind((response.wind.speed)));
        dispatch(changeCurrentHumidity((response.main.humidity)));
        dispatch(changeCurrentPressure((response.main.pressure)));
    }

    return (
        <div className="todayWeather">
            <div className="todayWeather__weather">
                <img className="todayWeather__weather__icon" src={icon} alt={mainDescription} />
                <span className="todayWeather__weather__iconName">{description}</span>
            </div>
            <div className="todayWeather__temperature">
                <span className="todayWeather__temperature__information">{Math.ceil(temperature)}°C</span>
                <div>
                    <span className="todayWeather__temperature__max">{Math.ceil(minTemperature)}°C</span>
                    <span className="todayWeather__temperature__seperator"> / </span>
                    <span className="todayWeather__temperature__min">{Math.ceil(maxTemperature)}°C</span>
                </div>
                
            </div>
            
            <div className="todayWeather__status">
                <span className="todayWeather__status__wind">Wind: {wind} kmph</span>
                <span className="todayWeather__status__precip">Humidity: {humidity}%</span>
                <span className="todayWeather__status__pressure">Pressure: {pressure} mb</span>
            </div>
        </div>
    )
}

export default TodayWeather
