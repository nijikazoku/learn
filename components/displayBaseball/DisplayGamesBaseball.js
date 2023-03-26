import { IoMdBaseball } from "react-icons/io";
import { TbCircleFilled } from "react-icons/tb";
import { BiMinus } from "react-icons/bi";
import { AiOutlineExclamationCircle, AiFillLock } from "react-icons/ai";
import { useState } from "react";
import { canBetNba } from "../../src/basketball/canBetNba";
const DisplayGamesBaseball = ({ match, index, betList, placeBet }) => {
  const [matchList, setMatchList] = useState(canBetNba);

  return (
    <>
      <div
        key={index}
        className="relative border border-gray-700 bg-opacity-40 mb-3 rounded-lg overflow-hidden shadow space-y-2 py-3 px-2 from-gray-900 to-gray-600 bg-gradient-to-r"
      >
        {/* 日付＆スタジアム&ベット状態 */}
        <div className="flex  relative  justify-between">
          <div className="flex-grow ">
            <div className="flex text-base space-x-1 items-center ">
              <div className="flex space-x-1 items-center ">
                {match.sports === "baseball" && (
                  <img
                    className="w-5"
                    src="https://www.svgrepo.com/show/395857/baseball.svg"
                    alt=""
                  />
                )}

                <p className="">{match.category}</p>
              </div>
              <div className="whitespace-nowrap">{match.type}</div>
            </div>
            <div className="text-sm space-x-1 items-center justify-start pl-1 flex">
              <p className="">{match.matchDate}</p>
              <p>{match.matchTime}</p>
              <p className="gray-600 whitespace-nowrap text-xs truncate">
                {match.avenue}
              </p>
            </div>
          </div>
          {/* オッズ状態 */}
          <div className="flex absolute top-0 right-0  flex-grow pl-2 items-center whitespace-nowrap justify-end">
            {match.canBet === "accept" && (
              <div className="flex items-center border-green-600 space-x-1 border-2 rounded-full  py-1 px-2">
                <TbCircleFilled color="green" size={14} />{" "}
                <span className="text-[0.7rem]">ベット受付中</span>
              </div>
            )}
            {match.canBet === "before" && (
              <div className="rounded-full border border-[#FBBF24] py-1 px-2 flex items-center space-x-1">
                <BiMinus color="#FBBF24" size={14} />
                <span className="text-[0.7rem]">ベット受付前</span>
              </div>
            )}
            {match.canBet === "after" && (
              <div className="rounded-full  py-1 px-2 border border-red-600 flex space-x-1 items-center">
                <AiOutlineExclamationCircle size={16} color="red" />
                <span className="text-[0.7rem]">オッズ確定</span>
              </div>
            )}
          </div>
        </div>
        {/* チーム名＆オッズ */}
        <div className="flex flex-col text-lg space-y-2">
          {/* チーム名 */}
          <div className="px-2">
            {/* ホームチーム */}
            <div className="flex items-center justify-start space-x-2">
              <p className="text-blue-600 w-[3rem] text-center text-[0.7rem] ">
                HOME
              </p>
              <p className="flex-grow">{match.homeTeam}</p>
              {match.homeTeam.inJapan && (
                <img
                  className="w-6"
                  src="https://www.svgrepo.com/show/405519/flag-for-flag-japan.svg"
                  alt=""
                />
              )}
            </div>
            {/* アウェイチーム */}
            <div className="flex items-center justify-start space-x-2">
              <p className="text-red-600 w-[3rem] text-center text-[0.7rem]">
                AWAY
              </p>
              <p className="flex-grow">{match.awayTeam}</p>
              {match.awayTeam.inJapan && (
                <img
                  className="w-6"
                  src="https://www.svgrepo.com/show/405519/flag-for-flag-japan.svg"
                  alt=""
                />
              )}
            </div>
          </div>

          {/* オッズ */}
          <div className="flex justify-around space-x-3 text-lg">
            {/* ホームオッズ */}
            {match.canBet === "accept" && (
              <button
                onClick={() =>
                  placeBet(
                    match.matchId,
                    "oddsHome",
                    match.homeTeam,
                    match.awayTeam,
                    match.category,
                    match.type,
                    match.matchDate,
                    match.matchTime,
                    match.avenue,
                    match.betNum,
                    match.incrementValue
                  )
                }
                className={`border py-2 rounded-md w-1/3 border-green-600 ${
                  betList &&
                  betList.length > 0 &&
                  betList.some(
                    (bet) =>
                      bet.matchId === match.matchId &&
                      bet.oddsType === "oddsHome"
                  )
                    ? "bg-blue-700 border-none"
                    : ""
                }`}
              >
                {match.oddsHome}
              </button>
            )}
            {match.canBet === "after" && (
              <div className="border  text-center border-none bg-red-700 py-2 rounded-md w-1/3 ">
                {match.oddsHome}
              </div>
            )}
            {match.canBet === "before" && (
              <div className="border flex justify-center items-center rounded-md w-1/3 py-2">
                <AiFillLock size={25} color="#FBBF24" />
              </div>
            )}
            {/* ドローオッズ */}
            {match.canBet === "accept" && (
              <button
                onClick={() =>
                  placeBet(
                    match.matchId,
                    "oddsDraw",
                    match.homeTeam,
                    match.awayTeam,
                    match.category,
                    match.type,
                    match.matchDate,
                    match.matchTime,
                    match.avenue,
                    match.betNum,
                    match.incrementValue
                  )
                }
                className={`border py-2 border-green-600 rounded-md w-1/3 ${
                  betList &&
                  betList.length > 0 &&
                  betList.some(
                    (bet) =>
                      bet.matchId === match.matchId &&
                      bet.oddsType === "oddsDraw"
                  )
                    ? "bg-gray-500 border-none"
                    : ""
                }`}
              >
                {match.oddsDraw}
              </button>
            )}
            {match.canBet === "after" && (
              <div className="border  text-center border-none bg-red-700 py-2 rounded-md w-1/3 ">
                {match.oddsDraw}
              </div>
            )}
            {match.canBet === "before" && (
              <div className="border flex justify-center items-center rounded-md w-1/3 py-2">
                <AiFillLock size={25} color="#FBBF24" />
              </div>
            )}
            {/* アウェイオッズ */}
            {match.canBet === "accept" && (
              <button
                onClick={() =>
                  placeBet(
                    match.matchId,
                    "oddsAway",
                    match.homeTeam,
                    match.awayTeam,
                    match.category,
                    match.type,
                    match.matchDate,
                    match.matchTime,
                    match.avenue,
                    match.betNum,
                    match.incrementValue
                  )
                }
                className={`border py-2 border-green-600 rounded-md w-1/3 ${
                  betList &&
                  betList.length > 0 &&
                  betList.some(
                    (bet) =>
                      bet.matchId === match.matchId &&
                      bet.oddsType === "oddsAway"
                  )
                    ? "bg-red-600 border-none"
                    : ""
                }`}
              >
                {match.oddsAway}
              </button>
            )}
            {match.canBet === "after" && (
              <div className="border  text-center border-none bg-red-700 py-2 rounded-md w-1/3 ">
                {match.oddsAway}
              </div>
            )}
            {match.canBet === "before" && (
              <div className="border flex justify-center items-center rounded-md w-1/3 py-2">
                <AiFillLock size={25} color="#FBBF24" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayGamesBaseball;
