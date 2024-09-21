import "./App.css";
import ForecastLayout from "./components/ForecastLayout";

import { Header } from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <div className="bg-[#1e1f24]">
      <Header />
      <div className="grid grid-rows-[1fr_1fr] md:grid-cols-[2fr_5fr] gap-4 lg:grid-rows-none my-12 mx-3">
        {/* Weather display component */}
        <WeatherDisplay />

        {/* Forecast components for 5 days */}
        <ForecastLayout />
      </div>
    </div>
  );
}

export default App;
