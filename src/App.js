import './App.css';
import Clear from './asset/weather icon/clearr.png'
import Mist from './asset/weather icon/Misr.png'
import Clouds from './asset/weather icon/clouds.png'
import Drizzle from './asset/weather icon/Drizzle.png'
import Fog from './asset/weather icon/Fog.png'
import Haze from './asset/weather icon/Haze.png'
import Rain from './asset/weather icon/Rain.png'
import Smoke from './asset/weather icon/smoke.png'
import Snow from './asset/weather icon/Snow.png'
import Thunder from './asset/weather icon/Thunderstrom.png'
import React,{useState,useEffect} from 'react';

function App() {
  const today=new Date();
  let [search,setsearch]=useState(null);
  let [search2,setsearch2]=useState(null);
  const [city,setcity]=useState(null);
  const [city1,setcity1]=useState(null);
  // const [city2,setcity2]=useState(null);
  const hour=today.getHours();
  const minute=today.getMinutes();
  const second=today.getSeconds();
  const currenttime=hour+":"+minute+":"+second;
  const date=today.getDate();
  const day=today.getDay();
  const month=today.getMonth();
  const year=today.getFullYear();
  const currdate=date+"/"+month+"/"+year;
  const currday=day===1?"Monday":day===2?"Tuesday":day===3?"Wednesday":day===4?"Thrusday":day===5?"Friday":day===6?"Saturday":"Sunday";
  async function submit()
  {
    setsearch(search2);
  
  }
  useEffect(() => {
  const handlekey=e=>{
    if(e.key === 'Enter')
    {
      if(e&&e.preventDefault)
      {
        e.preventDefault();
      }
    }
    
  }; 
  document.addEventListener('keydown', handlekey);
  return () => {
    document.removeEventListener('keydown', handlekey);
  };
},[])
  useEffect(()=>
  {
    async function fetchapi()
    {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&units=merit&appid=0c224c88bacaf8db16604e035396daaf`;
    let resp=await fetch(url);
    let respjson=await resp.json();
    console.log(respjson);
    setcity(respjson.main);
    setcity1(respjson);

    }
    fetchapi();
  },[search])

  return (
    <>
    <div className="body">
    </div>
      <div className="contain">
      <div className="container-1">
         <h1>{currdate}</h1>
         {city?<h1 className="search" >{search}<br/>  {city1.sys.country}</h1>:null}
        {city?<h1 className="temperatore">{city.temp}°C</h1>:null}
        
        <h1 className="time">{currenttime}</h1>
         <h1 className="day">{currday}</h1>
      </div>
      
      <div className="container-2">
       {city?city1.weather[0].main==="Mist"?<img src={Mist} alt=""/>:city1.weather[0].main==="Clear"?<img src={Clear} alt=""/>:city1.weather[0].main==="Clouds"?<img src={Clouds} alt=""/>:city1.weather[0].main==="Drizzle"?<img src={Drizzle} alt=""/>:city1.weather[0].main==="Fog"?<img src={Fog} alt=""/>:city1.weather[0].main==="Haze"?<img src={Haze} alt=""/>:city1.weather[0].main==="Rain"?<img src={Rain} alt=""/>:city1.weather[0].main==="Smoke"?<img src={Smoke} alt=""/>:city1.weather[0].main==="Snow"?<img src={Snow} alt=""/>:city1.weather[0].main==="Thunderstorm"?<img src={Thunder} alt=""/>:null:null} 
  {city?<h3 className="dityu">{city1.weather[0].main}</h3>:null}
 <input type="text" className="form-control"  onChange={(e)=>setsearch2(e.target.value)}  placeholder="Search any city"/><button className="button" type="submit" onClick={()=>{submit();}}>Search</button>
  {city?<h3 className="ssss">{search}</h3>:null}
  <hr/>
      <table className="table">
        <tbody>
          <td>
            <tr>Temperature</tr>
            <tr>Humidity</tr>
            <tr>Pressure</tr>
            <tr>Wind Speed</tr>
          </td>
          {city?
            <td className="BORD">
            <tr>{city.temp} °C</tr>
            <tr>{city.humidity} g/kg</tr>
            <tr>{city.pressure} Pa</tr>
            <tr>{city1.wind.speed} m/s</tr>
          </td>:null
          }
        </tbody>
      </table>
      </div>
      </div>
   
    
    </>
  );
}

export default App;
