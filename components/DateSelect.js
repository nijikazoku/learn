import { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineAlert } from "react-icons/ai";
import DisplayGames from "./DisplayGames";
const DateSelect = ({ games }) => {
  const [selectedDate, setSelectedDate] = useState("");
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
            className={`flex mb-1  justify-between py-2 ${
              selectedDate === date &&
              "bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 bg-opacity-40"
            } `}
          >
            <button className="flex space-x-2 ">
              <BsCalendarWeek size={30} />
              <p className="text-xl">{`2023年${date}(${getWeekday(date)})`}</p>
            </button>
            <IoMdArrowDropdown size={30} />
          </div>

          {/* 試合表示 */}
          {selectedDate === date && (
            <div>
              {games.filter((match) => match.matchDate === date).length > 0 ? (
                games
                  .filter((match) => match.matchDate === date)
                  .map((match, index) => (
                    <DisplayGames
                      key={`${match.homeTeam}-${match.awayTeam}`}
                      match={match}
                      index={index}
                    />
                  ))
              ) : (
                <div className="w-[95%] mx-auto flex items-center py-1 text-slate-300">
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
export default DateSelect;
