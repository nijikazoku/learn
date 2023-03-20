import { IoMdBaseball } from "react-icons/io";
import { TbCircleFilled } from "react-icons/tb";
import { BiMinus } from "react-icons/bi";
import { AiOutlineExclamationCircle, AiFillLock } from "react-icons/ai";
const DisplayGames = ({ match, index }) => {
  return (
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
              {match.sports === "soccer" && (
                <img
                  className="w-5"
                  src="https://www.svgrepo.com/show/484370/soccer-ball-illustration.svg"
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
            <div className="flex animate-pulse items-center border-green-600 space-x-1 border-2 rounded-full  py-1 px-2">
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
      <div className="flex text-lg">
        {/* チーム名 */}
        <div className="w-[45%] pl-2">
          <p className="truncate">{match.homeTeam}</p>
          <p className="truncate">{match.awayTeam}</p>
        </div>

        {/* オッズ */}
        <div className="flex w-[55%]  justify-end space-x-1 text-lg">
          {match.canBet === "accept" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsHome}
            </button>
          ) : (
            <button className="border flex justify-center items-center rounded-md w-1/3">
              <AiFillLock size={30} color="#FBBF24" />
            </button>
          )}
          {match.canBet === "accept" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsDraw}
            </button>
          ) : (
            <button className="border flex justify-center items-center rounded-md w-1/3">
              <AiFillLock size={30} color="#FBBF24" />
            </button>
          )}
          {match.canBet === "accept" || match.canBet === "after" ? (
            <button className="border rounded-md w-1/3">
              {match.oddsAway}
            </button>
          ) : (
            <button className="border flex justify-center items-center rounded-md w-1/3">
              <AiFillLock size={30} color="#FBBF24" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayGames;
