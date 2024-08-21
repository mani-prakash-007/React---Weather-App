import React from "react";
import { useState, useRef } from "react";
import { ImSearch } from "react-icons/im";

export const WeatherCard = (props) => {
  //References
  const inputRef = useRef();
  const handleClick = () => {
    props.setCityName(inputRef.current.value);
  };
  return (
    <div className="border border-black w-96 h-144">
        <input
          type="text"
          className="border border-black pl-5 py-2 my-5 ml-14 rounded-3xl"
          ref={inputRef}
        />
        <button
          className="border border-black rounded-full p-3 ml-7"
          onClick={handleClick}
        >
          <ImSearch />
        </button>
    </div>
  );
};
