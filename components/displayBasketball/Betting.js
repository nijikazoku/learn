import { useState } from "react";
import { FcPlus, FcMinus } from "react-icons/fc";
import { GrClose } from "react-icons/gr";
const Betting = ({ betList, setBetList, handleBet }) => {
  const [betNums, setBetNums] = useState(
    betList.reduce((acc, bet) => {
      acc[bet.matchId] = acc[bet.matchId] || 1;
      return acc;
    }, {})
  );

  const [incrementValue, setIncrementValue] = useState(1);
  const changeBetNum = (amount, matchId, betList) => {
    setBetList((prevBetList) => {
      const updatedBetList = prevBetList.map((bet) => {
        if (bet.matchId === matchId) {
          const newBetNum = bet.betNum + amount * bet.incrementValue;
          if (newBetNum < 0) {
            return { ...bet, betNum: 0 };
          } else {
            return { ...bet, betNum: newBetNum };
          }
        } else {
          return bet;
        }
      });
      return updatedBetList;
    });
  };

  const changeIncrementValue = (matchId, value) => {
    setBetList((prevBetList) => {
      const betToUpdate = prevBetList.find((bet) => bet.matchId === matchId);
      const updatedBet = { ...betToUpdate, incrementValue: value };
      const index = prevBetList.indexOf(betToUpdate);
      const updatedBetList = [...prevBetList];
      updatedBetList[index] = updatedBet;

      const newBetNums = {
        ...betNums,
        [matchId]: (betNums[matchId] * value) / betToUpdate.incrementValue,
      };

      setBetNums(newBetNums); // 追加

      return updatedBetList;
    });
  };

  const totalBetNums = betList.reduce((acc, bet) => {
    const betNums = Math.floor(bet.betNum);
    return acc + betNums;
  }, 0);
  // rewardsの合計値を計算する
  const totalRewards = betList.reduce((acc, bet) => {
    const rewards = Math.floor(bet.odds * bet.betNum);
    return acc + rewards;
  }, 0);

  return (
    <div className="pb-4 fixed w-full top-[60px] h-[34rem] bg-opacity-90 bg-slate-700 overflow-y-auto">
      <div onClick={handleBet} className="flex justify-end py-2 pr-5 space-x-3">
        <p>CLOSE</p>
        <img
          className="w-5"
          src="https://www.svgrepo.com/show/151290/close.svg"
          alt=""
        />
      </div>
      <div className="space-y-5">
        {betList.map((bet, index) => {
          const rewards = Math.floor(bet.odds * bet.betNum);
          return (
            <div
              key={index}
              className="relative border flex flex-col justify-center items-center rounded-lg  shadow"
            >
              {/* 上のボックス */}
              <div className="flex flex-col w-full items-center py-2 rounded-lg  from-gray-900 to-gray-600 bg-gradient-to-r">
                {/* カテゴリ＆日付 */}
                <div className="flex space-x-2">
                  <div className="flex text-base space-x-1 items-center ">
                    <div className="flex space-x-1 items-center ">
                      <p className="">{bet.category}</p>
                    </div>
                    <div className="whitespace-nowrap">{bet.type}</div>
                  </div>
                  <div className="text-sm space-x-1 items-center justify-start flex">
                    <p className="">{bet.matchDate}</p>
                    <p>{bet.matchTime}</p>
                  </div>
                </div>
                {/* チーム名 */}
                <div className="flex justify-between">
                  <div className="text-xl flex flex-col items-center space-x-2">
                    <div className="flex text-base">
                      <p className="text-gray-400">
                        {bet.homeTeam} vs {bet.awayTeam}
                      </p>

                      <div className="flex"></div>
                    </div>
                    <div className="flex space-x-3 items-center">
                      <p> {bet.winTeam}</p>
                      <span className="text-red-600 font-bold">WIN</span>
                      <div className="font-bold text-lg text-green-500">
                        {bet.odds}倍
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下のボックス */}
              <div className="flex w-full  flex-col rounded-lg  from-gray-900 to-gray-600 bg-gradient-to-l justify-between items-center py-2">
                <div className="">
                  <div>当たると:{rewards}pt</div>
                </div>
                <div className="flex flex-col space-y-2 justify-between items-center">
                  <div className="space-x-2">
                    <button
                      onClick={() => changeIncrementValue(bet.matchId, 1)}
                      className={`${
                        bet.incrementValue === 1
                          ? "text-white"
                          : "text-gray-500"
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => changeIncrementValue(bet.matchId, 10)}
                      className={`${
                        bet.incrementValue === 10
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      10
                    </button>
                    <button
                      onClick={() => changeIncrementValue(bet.matchId, 100)}
                      className={`${
                        bet.incrementValue === 100
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      100
                    </button>
                    <button
                      onClick={() => changeIncrementValue(bet.matchId, 1000)}
                      className={`${
                        bet.incrementValue === 1000
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      1000
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        changeBetNum(-incrementValue, bet.matchId, betList)
                      }
                      className="border-1 px-2"
                    >
                      <FcMinus size={23} />
                    </button>
                    <div className="text-xl text-center border w-[5rem]">
                      {bet.betNum}
                    </div>
                    <button
                      onClick={() =>
                        changeBetNum(+incrementValue, bet.matchId, betList)
                      }
                      className="border-1 px-2"
                    >
                      <FcPlus size={23} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="text-xl font-bold mt-3">ベット数：{betList.length}</div>
        <div className="text-xl font-bold mt-3">
          合計ベット：{totalBetNums}pt
        </div>
        <div className="text-xl font-bold mt-3">
          合計払い戻し: {totalRewards}pt
        </div>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 text-xl font-bold">
        ベットする
      </button>
    </div>
  );
};

export default Betting;
