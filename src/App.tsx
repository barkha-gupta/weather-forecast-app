import { lazy, Suspense } from "react";
import "./App.css";
const ForecastLayout = lazy(() => import("./components/ForecastLayout"));
const WeatherDisplay = lazy(() => import("./components/WeatherDisplay"));
import { Header } from "./components/Header";

function App() {
  return (
    <div className="bg-[#1e1f24]">
      <Header />

      <div className="grid grid-rows-[1fr_1fr] md:grid-cols-[2fr_5fr] gap-4 lg:grid-rows-none my-12 mx-3">
        {/* Weather display component */}
        <Suspense fallback={<p>Loading...</p>}>
          <WeatherDisplay />
        </Suspense>

        {/* Forecast components for 5 days */}
        <Suspense fallback={<p>Loading...</p>}>
          <ForecastLayout />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
