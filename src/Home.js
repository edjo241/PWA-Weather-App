import { useState } from 'react';
import {useHistory, withRouter} from 'react-router-dom';
import './App.css';
import {fetchWeather} from './api/fetchWeather'
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from "./StateProvider";

function Home() {
    const [{weatherInfo}, dispatch] = useStateValue();
  const [city,setCity]=useState("");
  console.log(city);
  let history=useHistory();

  const search= async(e)=>{
    if(e.key ==="Enter"){
      const data= await fetchWeather(city);
      setCity("");
      dispatch({
          type:"ADD_WEATHER",
          weather:data
      });
    
      
      if(data.weather[0].main === "Rain"){
        history.push("/rain");
      }
      
    }
  }

  return (
     
    <div className="App">
      <div className="weather__search">
          <SearchIcon className="search__icon"/>
        <input  className="weather__searchBox" type="text" placeholder="Search city for weather"  value={city} onChange={(e)=> setCity(e.target.value)} 
        onKeyPress={search}
        ></input>
      </div>
    </div>
  
    
  );
}

export default  withRouter (Home);
