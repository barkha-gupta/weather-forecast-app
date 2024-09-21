import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface WeatherProviderProps {
  children: ReactNode;
}

export interface WeatherDetails {
  temp: number;
  condition: string;
  icon: string;
}

export interface ForeCast {
  day: string;
  highestTemp: number;
  lowestTemp: number;
  icon: string;
}
const initialWeatherDetails: WeatherDetails = {
  temp: 0,
  condition: "",
  icon: "",
};
export const WeatherContext = createContext({
  city: "",
  weatherDetails: initialWeatherDetails,
  foreCastData: [] as ForeCast[],
  isFahrenheit: false,
  toggleTempUnit: () => {},
});

const apiKey = import.meta.env.VITE_API_KEY;

const fetchWeatherData = async (
  city: string,
  apiKey: string,
  setWeatherDetails: Function,
  setForecastData: Function
) => {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=5&aqi=no&alerts=no`
    );
    const data = await res.json();

    if (data && data.current) {
      setWeatherDetails({
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    }

    if (data && data.forecast && data.forecast.forecastday) {
      const forecastData = data.forecast.forecastday.map((day: any) => ({
        day: new Date(day.date).toLocaleDateString("en-US", {
          weekday: "long",
        }),
        highestTemp: day.day.maxtemp_c,
        lowestTemp: day.day.mintemp_c,
        icon: day.day.condition.icon,
      }));
      setForecastData(forecastData);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const [city, setCity] = useState<string>("New Delhi");
  const [weatherDetails, setWeatherDetails] = useState<WeatherDetails>(
    initialWeatherDetails
  );
  const [foreCastData, setForecastData] = useState<ForeCast[]>([]);
  const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchWeatherData(city, apiKey, setWeatherDetails, setForecastData);
    }

    return () => {
      isMounted = false;
    };
  }, [city]);

  const toggleTempUnit = () => {
    setIsFahrenheit((prev) => !prev);
  };

  const getTemperature = (tempCelsius: number) => {
    const temp = isFahrenheit ? (tempCelsius * 9) / 5 + 32 : tempCelsius;
    return parseFloat(temp.toFixed(1));
  };

  const value = {
    city,
    weatherDetails: {
      ...weatherDetails,
      temp: getTemperature(weatherDetails.temp),
    },
    foreCastData: foreCastData.map((forecast) => ({
      ...forecast,
      highestTemp: getTemperature(forecast.highestTemp),
      lowestTemp: getTemperature(forecast.lowestTemp),
    })),
    isFahrenheit,
    toggleTempUnit,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
