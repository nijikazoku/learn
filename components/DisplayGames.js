import { IoMdBaseball } from "react-icons/io";
import { TbCircleFilled } from "react-icons/tb";
import { BiMinus } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
const DisplayGames = ({ match, index }) => {
  return (
    <div
      key={index}
      className="relative border border-gray-700 bg-opacity-40 mb-3 rounded-lg overflow-hidden shadow space-y-2 py-3 px-2 from-gray-900 to-gray-600 bg-gradient-to-r"
    >
      {/* 日付＆スタジアム&ベット状態 */}
      <div className="flex  justify-between">
        <div className="max-w-[40%] ">
          <div className="flex text-lg space-x-1 items-center ">
            <div className="flex  items-center ">
              <IoMdBaseball size={25} />
              <p className="">{match.category}</p>
            </div>
            <div className="whitespace-nowrap">{match.type}</div>
          </div>
          <div className="text-sm space-x-1 items-end justify-start pl-1 flex">
            <p className=""> {match.matchTime}</p>
            <p className="gray-600 whitespace-nowrap">{match.avenue}</p>
          </div>
        </div>
        {/* オッズ状態 */}
        <div className="flex flex-grow pl-2 items-center whitespace-nowrap justify-end">
          {match.canBet === "now" && (
            <div className="flex animate-pulse items-center border-green-600 space-x-1 border-2 rounded-full  py-1 px-2">
              <TbCircleFilled color="green" size={14} />{" "}
              <span className="text-[0.7rem]">ベット受付中</span>
            </div>
          )}
          {match.canBet === "before" && (
            <div className="rounded-full border border-yellow-400 py-1 px-2 flex items-center space-x-1">
              <BiMinus color="yellow" size={14} />
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
      <div className="flex text-xl">
        {/* チーム名 */}
        <div className="w-1/2 pl-2">
          <p cla>{match.homeTeam}</p>
          <p>{match.awayTeam}</p>
        </div>
        {/* オッズ */}
        <div className="flex w-1/2 px-1 justify-end space-x-1 text-lg">
          {match.canBet === "now" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsHome}
            </button>
          ) : (
            <button className="border rounded-md w-1/3">ー</button>
          )}
          {match.canBet === "now" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsDraw}
            </button>
          ) : (
            <button className="border rounded-md w-1/3">ー</button>
          )}{" "}
          {match.canBet === "now" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsAway}
            </button>
          ) : (
            <button className="border rounded-md w-1/3">ー</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayGames;
