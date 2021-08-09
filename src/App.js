
import { useState } from 'react';
import './App.css';
import {fetchWeather} from './api/fetchWeather'

function App() {
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState("");
  console.log(city);

  const search= async(e)=>{
    if(e.key ==="Enter"){
      const data= await fetchWeather(city);
      setWeather(data);
      setCity("");
      console.log(data);
      
    }
  }

  return (
    <div className="App">
      <div className="weather__search">
        <input  className="weather__searchBox" type="text" placeholder="Search city for weather"  value={city} onChange={(e)=> setCity(e.target.value)} 
        onKeyPress={search}
        />
      </div>
    </div>
  );
}

export default App;
