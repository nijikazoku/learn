import { useState } from "react";
import DateSelect from "../../components/DateSelect";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { canBetNpb } from "../../src/baseball/canBetNpb";
import { gameResults } from "../../src/baseball/gameResults";
import { IoMdBaseball, IoMdArrowDropdown } from "react-icons/io";

const npb = () => {
  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        {/* 今日の試合＆カテゴリー */}
        <div className="">
          <div className="bg-slate-700 py-1 text-lg font-bold px-4 ">野球</div>
          {/* カテゴリー */}
          <div className="text-lg flex items-center border-b">
            <div className="border-r bg-[#0075C2]  py-1 text-center w-1/4">
              NPB
            </div>
            <div className="border-r py-1 text-center w-1/4">MLB</div>
            <div className="border-r py-1  text-center w-1/4">WBC</div>
            <div className="py-1 text-center w-1/4">その他</div>
          </div>
          {/* 今日の試合 */}
          {/* <div className=" mx-auto rounded-lg py-1">
            <p className="text-xl text-center">
              今日の試合結果 <span className="text-[1rem]">3月28日(火)</span>
            </p>

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
          </div> */}
        </div>

        <div className="space-y-3">
          {/* フィルターボタン */}
          <div className="space-x-3 text-sm px-2">
            <button className="border rounded-md p-1"> ベット受付中</button>
            <button className="border rounded-md p-1"> ベット受付前</button>
            <button className="border rounded-md p-1"> ベット締切済</button>
          </div>
          <div className="w-[95%] mx-auto space-y-2">
            <div className="text-xl">今後の試合</div>
            <DateSelect />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default npb;
