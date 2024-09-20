import { FC } from "react";

const SearchInputBox: FC = () => {
  return (
    <div>
      <input
        className="search-input rounded-full bg-secondary-text placeholder:text-primary-text focus:outline-none focus:border-primary-text focus:ring-black focus:ring-1 sm:text-sm border-shadow-custom"
        type="text"
        placeholder="Search city"
      />
    </div>
  );
};

export default SearchInputBox;
