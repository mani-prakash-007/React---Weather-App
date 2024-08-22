import React from "react";
import { useState, useRef } from "react";
import { ImSearch } from "react-icons/im";
import humidityImage from "../assets/images/humidity.png";

export const WeatherCard = (props) => {
  //References
  const inputRef = useRef();
  const handleClick = () => {
    props.setCityName(inputRef.current.value);
  };
  return (
    <div className="border border-black w-96 h-144 rounded">
      <div className="mt-2">
        <input
          type="text"
          className="border border-black pl-5 py-2 my-5 ml-14 rounded-3xl"
          ref={inputRef}
          placeholder="Enter City Name"
        />
        <button
          className="border border-black rounded-full p-3 ml-7"
          onClick={handleClick}
        >
          <ImSearch />
        </button>
        <div className="border border-black w-80 h-80 mx-auto">
          <img
            src=""
            alt="weather-icon"
            srcset=""
            className="border border-black w-32 h-28 mx-auto my-3"
          />
          <h1 className="font-bold text-5xl text-center italic my-9">
            {"23.56 C"}
          </h1>
          <p className="font-semibold text-3xl text-center text-wrap ">
            Coimbatore
          </p>
        </div>
        <div className="border border-black w-96 h-32 mx-auto my-3 flex justify-evenly">
          <div className="border border-black w-52 h-20 my-auto flex justify-evenly p-2">
            <img
              src={humidityImage}
              alt="Humidity"
              className="border border-black w-16 h-16"
            />
            <div className="p-1">
              <h1 className="font-bold text-center text-2xl">78 %</h1>
              <p className="font-medium">Humidity</p>
            </div>
          </div>
          <div className="border border-black w-52 h-20 my-auto flex justify-evenly p-2">
            <img
              src="../assets/images/humidity.png"
              alt="Wind Speed"
              className="border border-black w-16 h-16"
            />

            <div className="p-1">
              <h1 className="font-bold text-center text-2xl">78 Km/h</h1>
              <p className="font-medium">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//M:\Projects\Web Projects\Fontend\React\React Tasks\Weather App\src\assets\images\humidity.png
