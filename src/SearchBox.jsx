import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"; 
export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="2c1368621e6cf840ed8cb7232aa7a026";
     let getWeatherInfo = async(cityName)=>{
        try{
            let response=await fetch(`${API_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        if(!response.ok){
            throw new Error(jsonResponse.message || 'City not found');
        }
        console.log(jsonResponse);
        let result={
            city: jsonResponse.name || cityName,
            temp:jsonResponse.main.temp,
            feelsLike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            weather:jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    }
     };
         
    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        const cityToFetch = city.trim();
        if(!cityToFetch){
            setError(true);
            return;
        }

       let newInfo = await getWeatherInfo(cityToFetch);
       updateInfo(newInfo);
       setCity("");
       setError(false);
 }catch(error){
        setError(true);
        console.log(error);
 } }

    return (
        <div className="SearchBox">
        {/* <h3 className="SearchBox__title">Search for the weather</h3> */}
        <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" 
            label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color:"red"}}>City not found. Please try again.</p>}
        </form>
        </div>
    );
}