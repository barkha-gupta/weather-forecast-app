import { createContext, FC, ReactNode, useEffect, useState } from "react";

interface WeatherProviderProps {
  children: ReactNode;
}

export interface WeatherDetails {
  temp: number;
  condition: string;
  icon: string;
}
const initialWeatherDetails: WeatherDetails = {
  temp: 0,
  condition: "",
  icon: "",
};
export const WeatherContext = createContext({
  city: "Bengaluru",
  weatherDetails: initialWeatherDetails,
});

const apiKey = import.meta.env.VITE_API_KEY;

const fetchWeatherData = async (
  city: string,
  apiKey: string,
  setWeatherDetails: Function
) => {
  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    const data = await res.json();

    if (data && data.current) {
      setWeatherDetails({
        temp: data.current.temp_c,
        condition: data.current.condition.text,
        icon: data.current.condition.icon,
      });
    } else {
      console.log("Unexpected API response structure.");
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

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      fetchWeatherData(city, apiKey, setWeatherDetails);
    }

    return () => {
      isMounted = false;
    };
  }, [city]);

  const value = { city, weatherDetails };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
