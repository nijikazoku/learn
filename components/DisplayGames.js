import { IoMdBaseball } from "react-icons/io";
import { TbCircleFilled, TbCircleCheck } from "react-icons/tb";

const DisplayGames = ({ match, index }) => {
  return (
    <div
      key={index}
      className="w-[95%] mx-auto border-b-4 border-slate-800 bg-opacity-40 mb-3 rounded-lg overflow-hidden space-y-2 py-2 bg-slate-700"
    >
      {/* 日付＆スタジアム&ベット状態 */}
      <div className="flex px-2 justify-between">
        <div className="flex space-x-2 items-end">
          <div className="flex  items-center">
            <IoMdBaseball size={18} />
            <p className="">{match.category}</p>
          </div>
          <div className="flex space-x-1">
            <p>{match.matchDate}</p>
            <p> {match.matchTime}</p>
          </div>
          {/* スタジアム */}
          <p className="text-[0.75rem] gray-600 whitespace-nowrap">
            {match.avenue}
          </p>
        </div>
        <div className="flex flex-grow pl-2 items-center whitespace-nowrap justify-end">
          {match.canBet === "now" && (
            <div className="flex animate-pulse items-center border-green-600 space-x-1 border rounded-full font-bold p-1">
              <TbCircleFilled color="green" size={14} />{" "}
              <span className="text-[0.7rem]">ベット受付中</span>
            </div>
          )}
          {match.canBet === "before" && (
            <div className="rounded-full border border-yellow-400 font-bold p-1 flex items-center space-x-1">
              <TbCircleFilled color="yellow" size={14} />
              <span className="text-[0.7rem]">ベット受付前</span>
            </div>
          )}
          {match.canBet === "after" && (
            <div className="rounded-full font-bold p-1 border border-red-600 flex space-x-1 items-center">
              <TbCircleFilled size={14} color="red" />
              <span className="text-[0.7rem]">オッズ確定</span>
            </div>
          )}
        </div>
      </div>
      {/* チーム名＆オッズ */}
      <div className="flex text-lg font-bold">
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
