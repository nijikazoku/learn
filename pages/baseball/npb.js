import { useState } from "react";
import DateSelect from "../../components/DateSelect";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { canBetNpb } from "../../src/baseball/canBetNpb";
import { gameResults } from "../../src/baseball/gameResults";
import { IoMdBaseball, IoMdArrowDropdown } from "react-icons/io";

const npb = () => {
  const [selectDate, setSelectDate] = useState("");

  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        {/* 今日の試合＆カテゴリー */}
        <div className="">
          <div className="bg-slate-700 py-1 text-lg font-bold px-4 ">野球</div>
          {/* カテゴリー */}
          <div className="font-bold flex items-center border-b">
            <div className="border-r bg-[#0075C2] text-xl  py-1 text-center w-1/4">
              NPB
            </div>
            <div className="border-r py-1 text-xl text-center w-1/4">MLB</div>
            <div className="border-r py-1 text-xl text-center w-1/4">WBC</div>
            <div className="text-xl py-1 text-center w-1/4">その他</div>
          </div>
          {/* 今日の試合 */}
          <div className="bg-[#064E3B] mx-auto rounded-lg py-1">
            <p className="text-xl text-center">
              今日の試合 <span className="text-[1rem]">3月28日(火)</span>
            </p>

            {/* 試合結果 */}
            {gameResults.map((result, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between text-center "
                >
                  <div
                    className={`font-bold pt-3 w-1/3 text-lg ${
                      result.homeScore > result.awayScore
                        ? "text-[#F59E0B] "
                        : ""
                    } `}
                  >
                    {result.home}
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-sm">({result.stadium})</div>
                    <div className="flex items-start space-x-2">
                      <div
                        className={`font-bold text-2xl ${
                          result.homeScore > result.awayScore
                            ? "text-[#F59E0B] "
                            : ""
                        }`}
                      >
                        {result.homeScore}
                      </div>
                      <div className="text-xl">-</div>
                      <div
                        className={`text-2xl font-bold ${
                          result.awayScore > result.homeScore
                            ? "text-[#F59E0B] "
                            : ""
                        }`}
                      >
                        {result.awayScore}
                      </div>
                    </div>
                  </div>
                  <div
                    className={`font-bold w-1/3 text-lg pt-3 ${
                      result.awayScore > result.homeScore
                        ? "text-[#F59E0B] "
                        : ""
                    } `}
                  >
                    {result.away}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-3">
          {/* フィルターボタン */}
          <div className="space-x-3 px-2">
            <button className="border rounded-full p-1"> ベット受付中</button>
            <button className="border rounded-full p-1"> ベット受付前</button>
            <button className="border rounded-full p-1"> ベット締切済</button>
          </div>

          <DateSelect />

          {/* ベット受付中 */}
          {selectDate === "03/29" &&
            canBetNpb.map((npb, index) => {
              return (
                <div key={index} className="py-2 border-b space-y-1">
                  {/* 日付＆スタジアム&ベット状態 */}
                  <div className="flex px-2 justify-between">
                    <div className="flex space-x-2">
                      <div className="flex  items-center">
                        <IoMdBaseball size={18} />
                        <p className="">{npb.category}</p>
                      </div>
                      <p className="">{npb.matchTime}</p>
                    </div>
                    <div className="flex justify-between space-x-3">
                      <div className="text-sm animate-pulse rounded-lg bg-green-600 font-bold px-1 ">
                        ベット受付中
                      </div>
                      <p className="gray-600">({npb.avenue})</p>
                    </div>
                  </div>
                  {/* チーム名＆オッズ */}
                  <div className="flex text-lg font-bold">
                    {/* チーム名 */}
                    <div className="w-1/2 pl-2">
                      <p>{npb.homeTeam}</p>
                      <p>{npb.awayTeam}</p>
                    </div>
                    {/* オッズ */}
                    <div className="flex w-1/2 px-1 justify-end space-x-3 text-lg">
                      <button className="border rounded-md w-1/3">
                        {npb.oddsHome}
                      </button>
                      <button className="border w-1/3 rounded-md ">
                        {npb.oddsDraw}
                      </button>
                      <button className="border w-1/3 rounded-md ">
                        {npb.oddsAway}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default npb;
