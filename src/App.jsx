import { WeatherCard } from "./components/WeatherCard";
function App() {
  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="w-120 min-h-156">
          <h1 className="font-bold text text-center text-2xl py-4">Weather App</h1>
          <div className="flex justify-center">
            <WeatherCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
