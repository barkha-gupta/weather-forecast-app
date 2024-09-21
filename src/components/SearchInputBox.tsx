import { FC, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchInputBox: FC = () => {
  const { setCity, city } = useContext(WeatherContext);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  return (
    <div>
      <input
        className="search-input rounded-full bg-secondary-text placeholder:text-primary-text focus:outline-none focus:border-primary-text focus:ring-black focus:ring-1 sm:text-sm border-shadow-custom"
        type="text"
        placeholder="Search city"
        onChange={handleCityChange}
        value={city}
      />
    </div>
  );
};

export default SearchInputBox;
