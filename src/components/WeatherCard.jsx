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
import BgVideo_clear from "../assets/Videos/Clear.mp4";
import BgVideo_colud from "../assets/Videos/Cloud.mp4";
import BgVideo_drizzle from "../assets/Videos/Drizzle.mp4";
import BgVideo_haze from "../assets/Videos/Haze.mp4";
import BgVideo_mist from "../assets/Videos/Mist.mp4";
import BgVideo_rain from "../assets/Videos/Rain.mp4";
import BgVideo_snow from "../assets/Videos/Snow.mp4";

export const WeatherCard = () => {
  //References
  const inputRef = useRef();

  //States
  const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState();

  console.log("Weather Data :", weatherData);
  console.log("City : ", cityName);

  //Fetch Weather Data
  const fetchWeatherData = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${
      import.meta.env.VITE_API_KEY
    }`;
    try {
      const response = await fetch(API_URL);
      const weatherData = await response.json();
      setWeatherData(weatherData);
      console.log(API_URL);
    } catch (error) {
      alert("Error on Fetching Data");
    }
  };

  //Handle Click
  const handleClick = () => {
    const inputValue = inputRef.current.value;
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
        return <WiCloudy className="w-32 h-28 mx-auto my-3 text-gray-500" />;
      case "Clear":
        return (
          <WiDaySunny className="w-32 h-28 mx-auto my-3 text-yellow-300" />
        );
      case "Rain":
        return <WiRain className="w-32 h-28 mx-auto my-3 text-blue-700" />;
      case "Drizzle":
        return <WiDayRain className="w-32 h-28 mx-auto my-3 text-teal-300" />;
      case "Mist":
        return <WiDayCloudy className="w-32 h-28 mx-auto my-3 text-blue-100" />;
      case "Snow":
        return <FaRegSnowflake className="w-32 h-28 mx-auto my-3 text-white" />;
      case "Haze":
        return <LuHaze className="w-32 h-28 mx-auto my-3 text-orange-300" />;
      default:
        return null; // Return null or a default icon if none of the conditions match
    }
  };
  const getWeatherBackground = (weatherMain) => {
    switch (weatherMain) {
      case "Clouds":
        return BgVideo_colud;
      case "Clear":
        return BgVideo_clear;
      case "Rain":
        return BgVideo_rain;
      case "Drizzle":
        return BgVideo_drizzle;
      case "Mist":
        return BgVideo_mist;
      case "Snow":
        return BgVideo_snow;
      case "Haze":
        return BgVideo_haze;
      default:
        return null; // Return null or a default icon if none of the conditions match
    }
  };

  return (
    <>
      <div className="border border-black w-96 h-144 rounded my-10">
        <video
          src={getWeatherBackground(
            weatherData && weatherData.cod == 200 && weatherData.weather[0].main
          )}
          className="w-full h-full object-cover object-right"
          autoPlay
          loop
          muted
        />
        <div className="absolute w-full h-full top-40 flex">
          <div className="mt-2">
            <input
              type="text"
              className="border border-black pl-5 py-2 my-5 ml-14 rounded-3xl  font-semibold"
              ref={inputRef}
              placeholder="Enter City Name"
            />
            <button
              className="border border-black rounded-full p-3 ml-7 bg-transparent hover:bg-black hover:text-white active:scale-95"
              onClick={handleClick}
            >
              <ImSearch />
            </button>

            {weatherData &&
              (weatherData.cod == 200 ? (
                <>
                  <div className=" w-80 h-80 mx-auto text-white">
                    {getWeatherIcon(weatherData.weather[0].main)}
                    <h1 className="font-bold text-5xl text-center italic my-9 text-orange-300">
                      {`${weatherData.main.temp} °C`}
                    </h1>
                    <p className="font-semibold text-3xl text-center text-wrap">
                      {weatherData.weather[0].main}
                    </p>
                    <p className="font-semibold text-5xl text-center text-wrap text-green-300 ">
                      {weatherData.name}
                    </p>
                  </div>
                  <div className=" w-96 h-32 mx-auto my-3 flex justify-evenly">
                    <div className=" w-52 h-20 my-auto flex justify-evenly p-2">
                      <WiHumidity className=" w-16 h-16 text-cyan-400" />
                      <div className="p-1 text-cyan-400">
                        <h1 className="font-bold text-center text-xl">
                          {weatherData.main.humidity} %
                        </h1>
                        <p className="font-medium">Humidity</p>
                      </div>
                    </div>
                    <div className=" w-52 h-20 my-auto flex justify-evenly p-2">
                      <WiStrongWind className=" w-16 h-16 text-blue-400" />

                      <div className="p-1 text-blue-400">
                        <h1 className="font-bold text-center text-xl">
                          {weatherData.wind.speed} Km/h
                        </h1>
                        <p className="font-medium">Wind Speed</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                weatherData.cod == 404 && (
                  <>
                    <div className="w-80 h-80 mx-auto flex flex-col justify-center ml-7">
                      <h1 className="my-10 font-bold text-5xl text-center text-wrap text-white">
                        City Not Found
                      </h1>
                      <h1 className="my-10 font-semibold italic text-2xl text-center text-wrap text-white">{`"${cityName}"`}</h1>
                    </div>
                  </>
                )
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
