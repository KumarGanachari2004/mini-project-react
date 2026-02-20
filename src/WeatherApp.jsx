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
        <div style={{textAlign:"center", marginLeft:"50px",display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}