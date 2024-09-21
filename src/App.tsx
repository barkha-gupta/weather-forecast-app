import "./App.css";
import ForecastLayout from "./components/ForecastLayout";

import { Header } from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <>
      <Header />
      <div className="grid grid-rows-[1fr_1fr] md:grid-cols-[2fr_5fr] gap-4 lg:grid-rows-none my-12 px-6 py-3">
        {/* Weather display component */}
        <WeatherDisplay />

        {/* Forecast components for 5 days */}
        <ForecastLayout />
      </div>
    </>
  );
}

export default App;
