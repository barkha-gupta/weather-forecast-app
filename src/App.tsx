import "./App.css";
import { Header } from "./components/Header";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap my-12 px-6 py-3">
        {/* weather display component */}
        <WeatherDisplay />

        {/* forcast components for 5 days */}
      </div>
    </>
  );
}

export default App;
