import { useState } from "react";
import BaseballGenreButton from "../../components/displayBaseball/BaseballGenreButton";
import DateSelect from "../../components/displayBaseball/DateSelect";
import FilterButton from "../../components/displayBaseball/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/displayBaseball/TodaysMatch";
import { koshien } from "../../src/baseball/koshien";
import { canBetCollege } from "../../src/baseball/canBetCollege";
import TestHeader from "../../components/TestHeader";
import SelectSports from "../../components/displayBaseball/SelectSports";
import BetConfirm from "../../components/BetConfirm";
import Betting from "../../components/Betting";

const others = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const [selectSchool, setSelectSchool] = useState("high");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  const [matchList, setMatchList] = useState(koshien);
  const [betList, setBetList] = useState([]);
  const placeBet = (
    matchId,
    oddsType,
    homeTeam,
    awayTeam,
    matchCategory,
    matchType,
    matchDate,
    matchTime,
    matchAvenue,
    betNum,
    incrementValue
  ) => {
    const existingIndex = betList.findIndex((bet) => bet.matchId === matchId);

    const winTeam =
      oddsType === "oddsHome"
        ? homeTeam
        : oddsType === "oddsAway"
        ? awayTeam
        : "";

    // const betHomeTeam = oddsType === "oddsDraw" ? homeTeam : winTeam;
    // const betAwayTeam = oddsType === "oddsDraw" ? awayTeam : loseTeam;

    if (existingIndex !== -1 && betList[existingIndex].oddsType === oddsType) {
      const updatedBetList = [...betList];
      updatedBetList.splice(existingIndex, 1);
      setBetList(updatedBetList);
    } else {
      const newBet = {
        matchId: matchId,
        oddsType: oddsType,
        odds: matchList.find((match) => match.matchId === matchId)[oddsType],
        winTeam: winTeam,
        // homeTeam: betHomeTeam,
        // awayTeam: betAwayTeam,
        homeTeam: homeTeam,
        awayTeam: awayTeam,
        category: matchCategory,
        type: matchType,
        matchDate: matchDate,
        matchTime: matchTime,
        avenue: matchAvenue,
        betNum: betNum,
        incrementValue: incrementValue,
      };
      if (existingIndex !== -1) {
        const updatedBetList = [...betList];
        updatedBetList[existingIndex] = newBet;
        setBetList(updatedBetList);
      } else {
        setBetList([...betList, newBet]);
      }
    }
  };
  const [showBet, setShowBet] = useState(false);
  const [closeBetting, setCloseBetting] = useState(false);
  const handleBet = () => {
    if (!showBet) {
      setShowBet(true);
      setCloseBetting(false);
      document.body.style.overflow = "hidden";
    } else {
      // setSideMenuFadeOut(true);
      setCloseBetting(true);
      setTimeout(() => {
        setShowBet(false);
        document.body.style.overflow = "auto";
      }, 700);
    }
  };
  return (
    <Layout>
      <TestHeader />
      <SelectSports />
      <div className="space-y-3">
        <div>
          {/* NPB MLB WBC その他 */}
          <BaseballGenreButton />
          {/* サブジャンル */}
          <div className="flex justify-center space-x-5">
            <div
              onClick={() => setSelectSchool("high")}
              className={`py-2 px-2 ${
                selectSchool === "high"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-600 border-b-2 border-gray-600"
              }`}
            >
              高校野球
            </div>
            <div
              onClick={() => setSelectSchool("college")}
              className={`py-2 px-2 ${
                selectSchool === "college"
                  ? "text-rgray-100 border-b-2 border-gray-100"
                  : "text-gray-600 border-b-2 border-gray-600"
              }`}
            >
              大学野球
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {/* フィルターボタン */}
          <FilterButton
            handleFilter={handleFilter}
            filteredMatch={filteredMatch}
            setFilteredMatch={setFilteredMatch}
          />
          {selectSchool === "high" && (
            <div className="w-[95%] mx-auto space-y-2">
              {/* フィルター試合 */}
              {filteredMatch && (
                <FilteredMatch
                  filteredMatch={filteredMatch}
                  games={koshien}
                  placeBet={placeBet}
                  betList={betList}
                />
              )}
              {/* 今日の試合 */}
              <TodaysMatch
                games={koshien}
                placeBet={placeBet}
                betList={betList}
              />
              <div className="text-xl">今後の試合</div>
              {/* 今後の試合 */}
              <DateSelect
                games={koshien}
                placeBet={placeBet}
                betList={betList}
              />
            </div>
          )}
          {selectSchool === "college" && (
            <div className="w-[95%] mx-auto space-y-2">
              {/* フィルター試合 */}
              {filteredMatch && (
                <FilteredMatch
                  filteredMatch={filteredMatch}
                  games={canBetCollege}
                />
              )}
              {/* 今日の試合 */}
              <TodaysMatch games={canBetCollege} />
              <div className="text-xl">今後の試合</div>
              {/* 今後の試合 */}
              <DateSelect games={canBetCollege} />
            </div>
          )}
        </div>
      </div>
      {betList.length !== 0 ? (
        <BetConfirm
          betList={betList}
          handleBet={handleBet}
          setShowBet={setShowBet}
        />
      ) : (
        ""
      )}
      {showBet && (
        <Betting
          closeBetting={closeBetting}
          handleBet={handleBet}
          setShowBet={setShowBet}
          betList={betList}
          setBetList={setBetList}
        />
      )}
    </Layout>
  );
};

export default others;
