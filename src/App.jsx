import { useState } from "react";
import { WeatherCard } from "./components/WeatherCard";
function App() {
  const [city, setCity] = useState("Coimbatore");

  //2 Way Data Binding
  const setCityName = (cityName) => {
    setCity(cityName);
  };

  return (
    <>
      <div>
        <h1 className="font-bold text text-center">Weather App</h1>
        <div className="flex justify-center">
          <WeatherCard></WeatherCard>
        </div>
      </div>
    </>
  );
}

export default App;
