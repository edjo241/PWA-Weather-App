import axios from 'axios'

const URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="fba4a73e2cec9850c6bef2b4b8dacc46";

export const fetchWeather= async(query)=>{
    const {data} =await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    })
    return data;
}