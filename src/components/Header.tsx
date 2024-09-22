import { FC } from "react";
import Logo from "../assets/weather-icon-white.png";
import SearchInputBox from "./SearchInputBox";
import TempUnitToggle from "./TempUnitToggle";

// interface HeaderProps {}
export const Header: FC = () => {
  const date = new Date();
  const dateString = new Date().toDateString();

  const getGreeting = (date: Date) => {
    const currentHour = date.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good Evening";
    } else {
      return "Good Night";
    }
  };

  const greeting = getGreeting(date);

  return (
    <div className="flex justify-between p-3 items-center">
      {/* greetings and date  */}
      <div className="flex gap-1 items-end">
        <img src={Logo} alt="logo" width={50} height={50} />
        <div className="">
          <div className="text-xs text-[#7f7e84]">{greeting}!</div>
          <div className="text-sm">{dateString}</div>
        </div>
      </div>

      <div className="flex gap-5 items-baseline">
        {/* input box */}
        <SearchInputBox />
        {/* temperature unit toggle */} <TempUnitToggle />
      </div>
    </div>
  );
};
