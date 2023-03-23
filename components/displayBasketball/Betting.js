import { useState } from "react";

const Betting = ({ betList, setBetList }) => {
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
    <div className=" fixed w-full top-[60px] bg-opacity-90 bg-slate-700">
      <div>
        {betList.map((bet, index) => {
          const rewards = Math.floor(bet.odds * bet.betNum);

          return (
            <div
              key={index}
              className="relative border flex flex-col justify-center items-center rounded-lg overflow-hidden shadow space-y-2 py-3 px-2"
            >
              {/* 上のボックス */}
              <div className="flex flex-col w-full items-center">
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
                    <div className="flex space-x-3">
                      <p> {bet.winTeam}</p>
                      <span className="text-red-600 font-bold">WIN</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下のボックス */}
              <div className="flex flex-col justify-between items-center">
                <div className="flex items-end space-x-5">
                  <div>当たると:{rewards}</div>
                  <div className="font-bold text-2xl text-green-500">
                    {bet.odds}
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center">
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
                      className="border-1 bg-blue-600 px-2"
                    >
                      -
                    </button>
                    <div>{bet.betNum}</div>
                    <button
                      onClick={() =>
                        changeBetNum(+incrementValue, bet.matchId, betList)
                      }
                      className="border-1 bg-blue-600 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div>{bet.matchId}</div>
            </div>
          );
        })}
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
