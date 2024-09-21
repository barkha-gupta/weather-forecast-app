import { FC, useContext } from "react";
import ForecastCard from "./ForecastCard";
import { ForeCast, WeatherContext } from "../context/WeatherContext";

const ForecastLayout: FC = () => {
  const { foreCastData } = useContext(WeatherContext);
  return (
    <div className="border-[#2e2e38] rounded-3xl bg-[#2e2e38] py-6 px-3 flex flex-col gap-3 justify-between">
      <h2 className="text-center font-medium">
        Temprature Forecast for next 5 days
      </h2>
      <div className="flex justify-between">
        {foreCastData.map((data: ForeCast) => (
          <ForecastCard data={data} key={data.day} />
        ))}
      </div>
    </div>
  );
};

export default ForecastLayout;
