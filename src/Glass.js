import React from 'react'
import { useStateValue } from "./StateProvider";
import './styles/Glass.css'


function Glass() {
    const [{weatherInfo}, dispatch] = useStateValue();
    return (
        <div className="glass">
            <div className="city">
                <h2 className="city__name">
                    <span>{weatherInfo?.name}</span>
                    <sup>{weatherInfo?.sys.country}</sup>
                </h2>
                <div className="temp">
                    <h1>
                        <span>{weatherInfo?.main.temp}</span>
                        <sup>&deg;</sup>
                    </h1>
                    <h3 className="weather__type">{weatherInfo?.weather[0].main}</h3>
                </div>
            </div>
        </div>
    )
}

export default Glass
