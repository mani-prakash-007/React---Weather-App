import React from "react";
import { useState, useRef } from "react";
import { ImSearch } from "react-icons/im";
import {
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiDaySunny,
  WiRain,
  WiStrongWind,
} from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { FaRegSnowflake } from "react-icons/fa6";
import { LuHaze } from "react-icons/lu";

export const WeatherCard = () => {
  //References
  const inputRef = useRef();

  //States
  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState();

  //Fetch Weather Data
  const fetchWeatherData = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(API_URL);
      const weatherData = await response.json();
      setWeatherData(weatherData);
    } catch (error) {
      alert("Error on Fetching Data");
    }
  };

  //Handle Click
  const handleClick = () => {
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    if (inputValue.length === 0) {
      alert("Enter a City Name");
    } else {
      fetchWeatherData(inputValue);
      setCityName(inputValue);
    }
  };
  //Get Weather Icon function
  const getWeatherIcon = (weatherMain) => {
    switch (weatherMain) {
      case "Clouds":
        return <WiCloudy className="w-32 h-28 mx-auto my-3" />;
      case "Clear":
        return <WiDaySunny className="w-32 h-28 mx-auto my-3" />;
      case "Rain":
        return <WiRain className="w-32 h-28 mx-auto my-3" />;
      case "Drizzle":
        return <WiDayRain className="w-32 h-28 mx-auto my-3" />;
      case "Mist":
        return <WiDayCloudy className="w-32 h-28 mx-auto my-3" />;
      case "Snow":
        return <FaRegSnowflake className="w-32 h-28 mx-auto my-3" />;
      case "Haze":
        return <LuHaze className="w-32 h-28 mx-auto my-3" />;
      default:
        return null; // Return null or a default icon if none of the conditions match
    }
  };

  return (
    <>
      <div className="border border-black w-96 h-144 rounded">
        <div className="mt-2">
          <input
            type="text"
            className="border border-black pl-5 py-2 my-5 ml-14 rounded-3xl"
            ref={inputRef}
            placeholder="Enter City Name"
          />
          <button
            className="border border-black rounded-full p-3 ml-7 hover:bg-black hover:text-white active:scale-95"
            onClick={handleClick}
          >
            <ImSearch />
          </button>
          {weatherData &&
            (weatherData.cod == 200 ? (
              <>
                <div className=" w-80 h-80 mx-auto">
                  {getWeatherIcon(weatherData.weather[0].main)}
                  <h1 className="font-bold text-5xl text-center italic my-9">
                    {`${weatherData.main.temp} °C`}
                  </h1>
                  <p className="font-semibold text-3xl text-center text-wrap ">
                    {weatherData.weather[0].main}
                  </p>
                  <p className="font-semibold text-3xl text-center text-wrap ">
                    {weatherData.name}
                  </p>
                </div>
                <div className=" w-96 h-32 mx-auto my-3 flex justify-evenly">
                  <div className=" w-52 h-20 my-auto flex justify-evenly p-2">
                    <WiHumidity className=" w-16 h-16" />
                    <div className="p-1">
                      <h1 className="font-bold text-center text-xl">
                        {weatherData.main.humidity} %
                      </h1>
                      <p className="font-medium">Humidity</p>
                    </div>
                  </div>
                  <div className=" w-52 h-20 my-auto flex justify-evenly p-2">
                    <WiStrongWind className=" w-16 h-16" />

                    <div className="p-1">
                      <h1 className="font-bold text-center text-xl">
                        {weatherData.wind.speed} Km/h
                      </h1>
                      <p className="font-medium">Wind Speed</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-80 h-80 mx-auto flex flex-col justify-center">
                  <h1 className="my-10 font-bold text-5xl text-center text-wrap ">
                    City Not Found
                  </h1>
                  <h1 className="my-10 font-semibold italic text-2xl text-center text-wrap ">{`"${cityName}"`}</h1>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

//
