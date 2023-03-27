import { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbCircleFilled } from "react-icons/tb";
import DisplayGamesSoccer from "./DisplayGamesSoccer";

const DateSelectSoccer = ({ games, betList, placeBet }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [displayBetText, setDisplayBetText] = useState(true);
  const sampleData = ["3/29", "3/30", "3/31", "4/01", "4/02"];

  const getWeekday = (dateString) => {
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    const date = new Date(`2023/${dateString}`);
    return days[date.getDay()];
  };

  const handleClick = (date) => {
    setSelectedDate((prevDate) => (prevDate === date ? "" : date));
  };

  return (
    <div className="space-y-3">
      {sampleData.map((date) => (
        <div key={date} className="">
          <div
            onClick={() => handleClick(date)}
            className={`flex mb-1  relative justify-between p-2 ${
              selectedDate === date && "dateSelect"
            } `}
          >
            <button className="flex space-x-2 items-center">
              <BsCalendarWeek size={30} />
              <p className="text-xl">{`2023年${date}(${getWeekday(date)})`}</p>
              {displayBetText &&
                games.filter(
                  (match) => match.matchDate === date && match.isJapan
                ).length > 0 && (
                  <div className=" ">
                    <img
                      className="w-6"
                      src="https://www.svgrepo.com/show/405519/flag-for-flag-japan.svg"
                      alt=""
                    />
                  </div>
                )}
            </button>
            {displayBetText &&
              games
                .filter((match) => match.matchDate === date)
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

          {/* 試合表示 */}
          {selectedDate === date && (
            <div>
              {games.filter((match) => match.matchDate === date).length > 0 ? (
                games
                  .filter((match) => match.matchDate === date)
                  .map((match, index) => (
                    <DisplayGamesSoccer
                      key={`${match.homeTeam}-${match.awayTeam}`}
                      match={match}
                      index={index}
                      betList={betList}
                      placeBet={placeBet}
                    />
                  ))
              ) : (
                <div className="w-[95%] mx-auto flex items-center py-1 dark:text-slate-300">
                  <div className="text-xl">試合は予定されていません</div>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default DateSelectSoccer;
