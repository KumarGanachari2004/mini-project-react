import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feelsLike:19.15,
        humidity:82,
        temp:19.05,
        tempMax:19.05,
        tempMin:19.05,
        weather:"mist"
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div className="weather-app">
            <header className="weather-header">
                <h1>Weather App</h1>
                <p className="subtitle">Search any city to get the latest weather</p>
            </header>
            <main className="weather-container">
                <section className="search-section">
                    <SearchBox updateInfo={updateInfo}/>
                </section>
                <section className="info-section">
                    <InfoBox info={weatherInfo}/>
                </section>
            </main>
            <footer className="weather-footer">Built with React + MUI</footer>
        </div>
    )
}