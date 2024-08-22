import { WeatherCard } from "./components/WeatherCard";
function App() {
  return (
    <>
      <div>
        <h1 className="font-bold text text-center">Weather App</h1>
        <div className="flex justify-center">
          <WeatherCard />
        </div>
      </div>
    </>
  );
}

export default App;