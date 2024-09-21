import { FC, useContext } from "react";
import { ForeCast, WeatherContext } from "../context/WeatherContext";

interface ForecastCardProps {
  data: ForeCast;
}

const ForecastCard: FC<ForecastCardProps> = ({ data }) => {
  const { isFahrenheit } = useContext(WeatherContext);
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="text-secondary-text text-sm font-medium">{data.day}</div>
      <img src={data.icon} alt="weather icon" height={100} width={80} />
      <div>
        {data.highestTemp}
        {isFahrenheit ? "F" : "C"}&deg;
      </div>
      <div>
        {data.lowestTemp}
        {isFahrenheit ? "F" : "C"}&deg;
      </div>
    </div>
  );
};

export default ForecastCard;
