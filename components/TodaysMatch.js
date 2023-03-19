import { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { canBetNpb } from "../src/baseball/canBetNpb";
import DisplayGames from "./DisplayGames";
const TodaysMatch = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = (date) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
  };
  return (
    <>
      <div className="text-xl">今日の試合</div>
      <div className="">
        <div
          onClick={() => handleClick("03/28")}
          className={`flex mb-1  justify-between py-2 ${
            selectedDate === "03/28" &&
            "bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 bg-opacity-40"
          } `}
        >
          <button className="flex space-x-2 ">
            <BsCalendarWeek size={30} />
            <p className="text-xl">2023年03/28(火)</p>
          </button>
          <IoMdArrowDropdown size={30} />
        </div>
        {selectedDate === "03/28" &&
          canBetNpb
            .filter((match) => match.matchDate === "03/28")
            .map((match, index) => (
              <DisplayGames
                key={`${match.homeTeam}-${match.awayTeam}`}
                match={match}
                index={index}
              />
            ))}
      </div>
    </>
  );
};
export default TodaysMatch;
