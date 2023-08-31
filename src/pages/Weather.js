import React, { useState, useEffect } from 'react';

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState();

  const apiKey = '895284fb2d2c50a520ea537456963d9c';

  const searchLocation = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
        );

        if (!response.ok) {
          setErrorMessage("There was an error maybe the city dosent exist")
        }

        const weatherData = await response.json();
        setData(weatherData);
        console.log(weatherData);
        setLocation('');
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">{data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}</div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {
          data.name ? null :  <p>{errorMessage}</p>

        }

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
