import React from 'react'

function TodayWeather() {
    return (
        <div className="todayWeather">
            <div className="todayWeather__weather">
                <img className="todayWeather__weather__icon" src="https://i.pinimg.com/originals/53/22/c2/5322c2cad533e12e552d0dfdc89b4c25.png" alt="sunny" />
                <span className="todayWeather__weather__iconName">Sunny</span>
            </div>
            <span className="todayWeather__temperature">9°C</span>
            <div className="todayWeather__status">
                <span className="todayWeather__status__wind">Wind: 11 kmph</span>
                <span className="todayWeather__status__precip">Precip: 00 mm</span>
                <span className="todayWeather__status__pressure">Pressure: 1012 mb</span>
            </div>
        </div>
    )
}

export default TodayWeather
