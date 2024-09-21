import { FC } from "react";
import { ForeCast } from "../context/WeatherContext";

interface ForecastCardProps {
  data: ForeCast;
}

const ForecastCard: FC<ForecastCardProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="text-secondary-text text-sm font-medium">{data.day}</div>
      <img src={data.icon} alt="weather icon" height={100} width={80} />
      <div>{data.highestTemp}C&deg;</div>
      <div>{data.lowestTemp}C&deg;</div>
    </div>
  );
};

export default ForecastCard;
