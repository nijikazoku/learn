import { useState } from "react";
import { FcPlus, FcMinus } from "react-icons/fc";
import { BsTrash3 } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
const Betting = ({ betList, setBetList, handleBet, closeBetting }) => {
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
          const newBetNum =
            amount === 0 ? 0 : bet.betNum + amount * bet.incrementValue;
          if (newBetNum < 0) {
            return { ...bet, betNum: 0 };
          } else if (newBetNum > 10000) {
            return { ...bet, betNum: 10000 };
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
  const resetBetNum = (matchId) => {
    setBetList((prevBetList) => {
      const updatedBetList = prevBetList.map((bet) => {
        if (bet.matchId === matchId) {
          return { ...bet, betNum: 0 };
        } else {
          return bet;
        }
      });

      const newBetNums = {
        ...betNums,
        [matchId]: 0,
      };
      setBetNums(newBetNums);

      return updatedBetList;
    });
  };

  const maxBetNum = (matchId) => {
    setBetList((prevBetList) => {
      const updatedBetList = prevBetList.map((bet) => {
        if (bet.matchId === matchId) {
          return { ...bet, betNum: 10000 };
        } else {
          return bet;
        }
      });

      const newBetNums = {
        ...betNums,
        [matchId]: 10000,
      };
      setBetNums(newBetNums);

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

  const [showValidation, setShowValidation] = useState(false);
  const betValidation = () => {
    setShowValidation(!showValidation);
  };

  const abelBet = totalBetNums > 0;

  const deleteFromBetList = (matchId, oddsType) => {
    setBetList((prevBetList) =>
      prevBetList.filter(
        (bet) => bet.matchId !== matchId || bet.oddsType !== oddsType
      )
    );
  };

  const doneBet = () => {
    alert("ベットが完了しました");
    handleBet();
    setBetList([]);
  };

  return (
    <div
      className={`fixed w-full top-0 z-40 h-full pb-[10px] bg-opacity-90  bg-slate-700 space-y-2 overflow-y-auto  animate-slide-in-right ${
        closeBetting && "animate-slide-out-right"
      }`}
    >
      {/* CLOSEボタン */}
      <div onClick={handleBet} className="flex justify-end pt-2 pr-5 space-x-3">
        <p>CLOSE</p>
        <img
          className="w-5"
          src="https://www.svgrepo.com/show/151290/close.svg"
          alt=""
        />
      </div>
      {/* 試合情報 */}
      <div className="space-y-2">
        {betList.map((bet, index) => {
          const rewards = Math.floor(bet.odds * bet.betNum);
          return (
            <div
              key={index}
              className="relative border flex flex-col justify-center items-center rounded-lg  shadow"
            >
              {/* 上のボックス */}
              <div className="flex flex-col w-full items-center py-2 rounded-t-lg  from-gray-900 to-gray-600 bg-gradient-to-r">
                {/* カテゴリ＆日付 */}
                <div className="flex justify-center space-x-2 relative w-full">
                  <BsTrash3
                    size={22}
                    onClick={() => deleteFromBetList(bet.matchId, bet.oddsType)}
                    className="absolute top-0 right-2"
                  />

                  <button className="absolute top-0 right-5"></button>
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
                        <span
                          className={`${
                            bet.oddsType === "oddsHome" &&
                            "text-blue-600 font-bold text-lg"
                          }`}
                        >
                          {bet.homeTeam}
                        </span>
                        <span className="px-1">vs</span>
                        <span
                          className={`${
                            bet.oddsType === "oddsAway" &&
                            "text-red-600 font-bold text-lg"
                          }`}
                        >
                          {bet.awayTeam}
                        </span>
                      </p>

                      <div className="flex"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下のボックス */}
              <div className="flex w-full  flex-col rounded-b-lg  px-4 from-gray-900 to-gray-600 bg-gradient-to-l justify-between items-center py-2">
                <div className="">
                  <div className="space-x-3 w-full flex justify-center">
                    <span>当たると:{rewards}pt</span>
                    <span className="text-green-600">{bet.odds}倍</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 justify-between w-full items-center">
                  {/* 増減量 */}
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
                  {/* ベット数 */}
                  <div className="flex items-center justify-around w-full  space-x-2">
                    {/* リセットボタン */}
                    <button
                      onClick={() => resetBetNum(bet.matchId, betList)}
                      className="bg-red-600 rounded-lg px-2"
                    >
                      RESET
                    </button>
                    {/* マイナスボタン */}
                    <button
                      onClick={() =>
                        changeBetNum(-incrementValue, bet.matchId, betList)
                      }
                      className="border-1 px-2"
                    >
                      <img
                        className="w-6"
                        src="https://www.svgrepo.com/show/206436/delete-exit.svg"
                        alt=""
                      />
                    </button>
                    <div className="text-sm text-center border shadow-lg py-1 w-[7rem]">
                      <span className="font-bold text-xl">{bet.betNum}</span>
                      pt
                    </div>
                    {/* プラスボタン */}
                    <button
                      onClick={() =>
                        changeBetNum(+incrementValue, bet.matchId, betList)
                      }
                      className="border-1 px-2"
                    >
                      <FcPlus size={25} />
                    </button>
                    {/* マックスボタン */}
                    <button
                      onClick={() => maxBetNum(bet.matchId, betList)}
                      className="bg-green-700 px-2 rounded-lg"
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* ベット確認 */}
      <div className="space-y-2">
        <div className="text-center rounded-lg  w-[90%] flex flex-col justify-center items-center mx-auto bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900">
          <div className="text-xl font-bold py-1 w-full border-b">
            ベット数：{betList.length}
          </div>
          <div className="border-b py-1 text-xl w-full font-bold">
            合計ベット：{totalBetNums}pt
          </div>
          <div className="text-xl rounded-lg font-bold py-1  w-full ">
            合計払い戻し: {totalRewards}pt
          </div>
        </div>
        {showValidation ? (
          <div className="mx-auto rounded-lg flex w-[90%] bg-red-600 text-yellow-300 to-gray-900 py-2 justify-around items-center text-xl font-bold ">
            <p className="text-sm">ベットを確定させます</p>
            <button onClick={doneBet} className="border-2 text-white px-3">
              はい
            </button>
            <button
              onClick={betValidation}
              className="text-gray-700 border-2 border-gray-700 px-3"
            >
              いいえ
            </button>
          </div>
        ) : (
          <button
            onClick={betValidation}
            disabled={!abelBet}
            className={`mx-auto rounded-lg flex w-[90%]  py-2 justify-center items-center text-xl font-bold ${
              abelBet
                ? "border-blue-900 bg-gradient-to-l from-yellow-400 to-yellow-200 text-red-600"
                : "border bg-slate-700 bg-opacity-60"
            }`}
          >
            ベットする
          </button>
        )}
      </div>
    </div>
  );
};

export default Betting;