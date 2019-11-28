import React,{useState,useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './App.css';

//import actions
import { fetchWeather } from './actions/fetchWeather'



function App() {
  //set the city
  const [city, setCity]=useState("");



  const weatherSelector = useSelector(state => state)

  const dispatch= useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city))

  useEffect(() => {
    getWeatherInfoAction("paris")
  }, {})

  const getWeatherInfo =e => {
    e.preventDefault()
    if(city === ''){
      console.log("no city to search for")
    }else{
      getWeatherInfoAction(city);
      {console.log("selector", weatherSelector)} 
    }
  }

  let details = '';
  if(weatherSelector.weatherinfo  && weatherSelector.weatherinfo.hasOwnProperty("location")){
    details =
      <div className="details">
          <h2> Weather Details</h2>
          <p>
            {weatherSelector.weatherinfo.location.name } <span>
            { weatherSelector.weatherinfo.location.country}
            </span> </p>
            <p>{weatherSelector.weatherinfo.current.temperature}°</p>
            <p>{weatherSelector.weatherinfo.current.weather_descriptions}</p>
            <img src={weatherSelector.weatherinfo.current.weather_icons} />
    </div>
  }else{
    details = <p>You need to type a city</p>
  }



  return (
    <>
      <div className="App">
        <header>
          <h1>React Redux Weather App</h1>
        </header>
        <main>  
          <form onSubmit={getWeatherInfo}>
             <div className="control">

               <input 
                type="text"
                name="name"
                placeholder="City name"
                onChange={ e => setCity(e.target.value)}
               />
               <input 
                type="submit"
                value="Check Weather"
               />

             </div>
          </form>
             {details}
        </main>
      </div>
    </>
  );
}

export default App;
