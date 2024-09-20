import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherContext = createContext({});

export const WeatherProvider: FC<WeatherProviderProps> = ({ children }) => {
  const [city, setCity] = useState<string>("New Delhi");
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error fetching weather data:", error));
  }, []);

  const value = {};
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
