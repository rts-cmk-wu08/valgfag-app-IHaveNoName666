import { useState, useEffect } from "react";

const Location = () => {
    const [myPos, setMyPos] = useState();
    const [data, setData] = useState();

    useEffect(() => {

        if('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setMyPos(position)
            })
        }
    
    }, []);

    useEffect(() => {
        if(myPos){ 
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${myPos?.coords?.latitude}&lon=${myPos?.coords?.longitude}&appid=${process.env.REACT_APP_OPENWEATHER}&units=metric`)
        .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log("An error occurred while fetching forecast:", error));
          }
      }, [myPos]);

    return ( 
    <div className="app">
      { data ? <div className="container">
        <div className="top">
          <div className="location">
            <p>{data?.name}</p>
          </div>
          <div className="temp">{data?.main ? <h1>{data?.main.temp.toFixed()}°</h1> : null}</div>
          <div className="description">
            {data?.weather ? <p>{data?.weather[0].main}</p> : null}
          </div>
        </div>

        {data?.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data?.main ? <p className="bold">{data?.main.feels_like.toFixed()}°</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data?.main ? <p className="bold">{data?.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data?.wind ? <p className="bold">{data?.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div> : <p>Loading..</p>}
    </div>
     );
}
 
export default Location;