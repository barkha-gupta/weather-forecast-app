import { FC, useContext } from "react";
import WeatherIcon from "./WeatherIcon";
import { WeatherContext } from "../context/WeatherContext";
import LocationIcon from "../assets/icons/location.svg";

const WeatherDisplay: FC = () => {
  const { weatherDetails, city, isFahrenheit } = useContext(WeatherContext);
  return (
    <div className="border-[#2e2e38] border-shadow-custom rounded-3xl flex flex-col gap-2 py-6 px-3 bg-[#2e2e38]">
      <div className="flex items-center font-semibold justify-start">
        <img src={LocationIcon} alt="location icon" height={20} width={20} />
        {city.toLocaleUpperCase()}
      </div>
      <div className="pt-2 px-16 flex items-center justify-center">
        <WeatherIcon />
      </div>
      <div className="text-center text-3xl mt-[-20px] font-extrabold">
        {weatherDetails.temp}&deg; {isFahrenheit ? "F" : "C"}
      </div>

      <p className="text-xl text-center font-medium">
        {weatherDetails.condition}
      </p>
    </div>
  );
};

export default WeatherDisplay;
