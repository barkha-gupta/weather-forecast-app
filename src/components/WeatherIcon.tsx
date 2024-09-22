import { FC, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherIcon: FC = () => {
  const { weatherDetails } = useContext(WeatherContext);
  const iconSrc = weatherDetails.icon;
  return (
    <>
      <img src={iconSrc} alt="weather icon" width={200} height={200} />
    </>
  );
};

export default WeatherIcon;
