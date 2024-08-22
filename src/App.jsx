import { useState, useEffect } from "react";
import { WeatherCard } from "./components/WeatherCard";
function App() {
  const [city, setCity] = useState("Coimbatore");
  const [weather, setWeather] = useState();

  //2 Way Data Binding
  const setCityName = (cityName) => {
    setCity(cityName);
  };

  //Weather Details
  const fetchWeatherData = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(API_URL);
      const weatherData = await response.json();
      console.log(weatherData);
      setWeather(weatherData);
    } catch (error) {
      console.log("Can't Fetch Data");
    }
  };

  //Side Effects
  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  return (
    <>
      <div>
        <h1 className="font-bold text text-center">Weather App</h1>
        <div className="flex justify-center">
          <WeatherCard setCityName={setCityName} />
        </div>
      </div>
    </>
  );
}

export default App;
