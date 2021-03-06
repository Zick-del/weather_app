import React, { useState } from "react";


const api = {
  key: "95a1ccd951918d20b68168c7f9058e20",
  base: "https://api.openweathermap.org/data/2.5/",
};


const dateBuilder = (d) => {

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day}, ${date}. ${month} ${year}`;
};

const WeatherApp = ({ setCountryCode }) => {

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setCountryCode(result.sys.country)
          setQuery('')
          setWeather(result)
        })
    }

  }

  return (
    <div className="weather-app">
      <div className={(typeof weather.main != "undefined")
        ? `main ${weather.weather[0].main}`.toLowerCase()
        : 'main'}>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search} />
        </div>

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>

            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}

      </div>
    </div>
  );
};

export default WeatherApp;
