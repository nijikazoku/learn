import { IoMdBaseball } from "react-icons/io";

const DisplayGames = ({ match, index }) => {
  return (
    <div key={index} className="py-2 border-b space-y-2">
      {/* 日付＆スタジアム&ベット状態 */}
      <div className="flex px-2 justify-between">
        <div className="flex space-x-2 items-center">
          <div className="flex  items-center">
            <IoMdBaseball size={18} />
            <p className="">{match.category}</p>
          </div>
          <div className="flex space-x-1">
            <p>{match.matchDate}</p>
            <p> {match.matchTime}</p>
          </div>
          <p className="text-[0.9rem] gray-600">{match.avenue}</p>
        </div>
        <div className="flex flex-grow pl-2 items-center whitespace-nowrap justify-end">
          {match.canBet ? (
            <div className="text-sm animate-pulse rounded-lg bg-green-600 font-bold p-1 ">
              ベット受付中
            </div>
          ) : (
            <div className="text-sm rounded-lg bg-red-700 font-bold p-1 text-yellow-400">
              ベット受付前
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
        <div className="flex w-1/2 px-1 justify-end space-x-3 text-lg">
          {match.canBet ? (
            <button className="border rounded-md w-1/3">
              {match.oddsHome}
            </button>
          ) : (
            <button className="border rounded-md w-1/3">ー</button>
          )}
          {match.canBet ? (
            <button className="border rounded-md w-1/3">
              {match.oddsDraw}
            </button>
          ) : (
            <button className="border rounded-md w-1/3">ー</button>
          )}{" "}
          {match.canBet ? (
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
