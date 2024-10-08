import { FC, useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { City, ICity } from "country-state-city";
import { useDebounce } from "../hooks/useDebounce";

interface WeatherContextType {
  setCity: (city: string) => void;
  city: string;
}

const SearchInputBox: FC = () => {
  const allCities = City.getAllCities();

  const { setCity, city } = useContext(WeatherContext) as WeatherContextType;
  const [firstSixMatching, setFirstSixMatching] = useState<ICity[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");

  const debouncedSearch = useDebounce(searchCity, 500);

  useEffect(() => {
    setCity(debouncedSearch);
  }, [debouncedSearch, setCity]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchCity(inputValue);

    if (inputValue.length > 0 && inputValue.length < 3) {
      setErrorMsg("Please enter at least 3 characters.");
    } else if (inputValue.length > 0 && firstSixMatching.length === 0) {
      setErrorMsg("City not found. Please check your input.");
    } else {
      setErrorMsg("");
    }

    if (inputValue.length > 0) {
      const filteredCities = allCities.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase())
      );

      setFirstSixMatching(filteredCities.slice(0, 6));
    } else {
      setFirstSixMatching([]);
    }
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setSearchCity(selectedCity);
    setFirstSixMatching([]);
  };

  return (
    <div className="search-container flex flex-col justify-center items-center">
      <input
        className="search-input rounded-full bg-secondary-text placeholder:text-primary-text focus:outline-none focus:border-primary-text focus:ring-black focus:ring-1 sm:text-sm border-shadow-custom"
        type="text"
        placeholder="Search city"
        onChange={handleCityChange}
        value={searchCity}
      />
      <p className="h-4 text-xs text-[#f96a6a]">
        {errorMsg ? `*${errorMsg}` : " "}
      </p>
      <ul>
        {firstSixMatching.map((item, index) => (
          <li
            key={index}
            onClick={() => handleCitySelect(item.name)}
            className={city === item.name ? "active" : ""}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInputBox;
