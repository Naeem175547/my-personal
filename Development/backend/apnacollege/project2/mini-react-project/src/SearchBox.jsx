import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox() {
    let [city,setCity]=useState("")

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="f55dd6901885140ac397e86c1c12d759"

    let getWeatherInfo=async()=>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
       let data=await response.json()
       console.log(data)
    }


    let handleChange=(evt)=>{
        console.log(evt.target.value)
        setCity(evt.target.value)
    }

    let handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(city)
        getWeatherInfo()
    }


    return (
        
        <>
        <div>
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="search" variant="outlined" onChange={handleChange}/>
                <Button variant="contained" type='submit'>Contained</Button>

            </form>
        </div>
        
        
        </>
    )
    
}