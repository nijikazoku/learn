import { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import DisplayGamesBaseball from "./DisplayGamesBaseball";
const TodaysMatch = ({ games, placeBet, betList }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleClick = (date) => {
    setSelectedDate((prevDate) => (prevDate === date ? null : date));
  };
  const [displayBetText, setDisplayBetText] = useState(true);
  return (
    <>
      <div className="text-xl">今日の試合</div>
      <div className="">
        <div
          onClick={() => handleClick("3/28")}
          className={`flex mb-1  relative justify-between py-2 ${
            selectedDate === "3/28" &&
            "bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 bg-opacity-40"
          } `}
        >
          <button className="flex space-x-2 ">
            <BsCalendarWeek size={30} />
            <p className="text-xl">2023年3/28(火)</p>
          </button>
          {displayBetText &&
            games
              .filter((match) => match.matchDate === "3/28")
              .some((match) => match.canBet === "accept") && (
              <div className="absolute top-[37%] right-[12%] ">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
                  <span class="inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                </span>
              </div>
            )}
          <IoMdArrowDropdown size={30} />
        </div>
        {selectedDate === "3/28" &&
          (games.filter((match) => match.matchDate === "3/28").length > 0 ? (
            games
              .filter((match) => match.matchDate === "3/28")
              .map((match, index) => (
                <DisplayGamesBaseball
                  key={`${match.homeTeam}-${match.awayTeam}`}
                  match={match}
                  index={index}
                  placeBet={placeBet}
                  betList={betList}
                />
              ))
          ) : (
            <div className="w-[95%] mx-auto flex items-center py-1 text-slate-300">
              <div className="text-xl">試合は予定されていません</div>
            </div>
          ))}
      </div>
    </>
  );
};
export default TodaysMatch;
