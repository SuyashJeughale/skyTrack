import React, { useState } from 'react'
import axios from 'axios'
import './app.css';


function App() {
  
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=8879dbf30708acfc4fee9e2cb759f6d8`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  return (
    <div className="app">
      <div className="search">
      <div className='navbar'>
                    <div className='suyash' >
                      <p className="aa">SMART AGRIOT</p>
                      <div className="aa" >My location </div>
                      <div className="aa">Customer service</div>
                      <div className="aa">Maps</div>
                      <div className="aa">Zones</div>
                      <div className="aa"> About</div>
                    </div>
                    <div className='suyash'>
                      <form className='formcorner'>
                         <input  type="search" placeholder="Search" ></input>
                         <button className="button-21"type="submit">Search</button>
                      </form>
                  </div>          
                </div>
      <h1><b>Welcome to Sky Track</b></h1>
      <b className='city'>Enter the city name :</b>
        <input className='input'
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='..........................................................'
          type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{(data.main.temp.toFixed()-32)*0.5}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div> 

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
        
        <footer>
        
  <div className="copyright">
    <p>@copyright under Act 2022 - Smart Agriot Pvt.Ltd </p>
    <h5 className='h5'>Contact us  📞+91 8329566173 || 🌐suyashjeughale1@gmail.com</h5>
  </div>
</footer>
      </div> 
    </div>
    
  );
}

export default App;
