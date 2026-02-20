import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import "./InfoBox.css";


export default function InfoBox({info}){
    const IMG_URL="https://images.unsplash.com/photo-1770034285769-4a5a3f410346?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1579847641267-5445b760b991?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let HOT_URL="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=679&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return <div className="InfoBox">
        {/* <h2 className="InfoBox__title">Weather Information-{info.weather}</h2> */}
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80?<ThunderstormIcon/>:info.temp>15?<SunnyIcon/>:<SevereColdIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
          <p>Temperature: {info.temp}°C</p>
          <p>Feels Like: {info.feelsLike}°C</p>
          <p>Humidity: {info.humidity}%</p>
          <p>Temp Min: {info.tempMin}°C</p>
          <p>Temp Max: {info.tempMax}°C</p>
          <p>Weather: {info.weather}</p>
        </Typography>
      </CardContent>

    </Card>
    </div>

}