import { useState } from "react";
import DateSelectSoccer from "../../components/displaySoccer/DateSelectSoccer";
import FilteredMatchSoccer from "../../components/displaySoccer/FilteredMatchSoccer";
import TodaysMatchSoccer from "../../components/displaySoccer/TodaysMatchSoccer";
import FilterButton from "../../components/displayBaseball/FilterButton";
import BetConfirm from "../../components/BetConfirm";
import Betting from "../../components/Betting";
import Layout from "../../components/Layout";
import SoccerGenreButton from "../../components/displaySoccer/SoccerGenreButton";
import { canBetJleague } from "../../src/soccer/canBetJleague";
import SelectSportsSoccer from "../../components/displaySoccer/SelectSportsSoccer";
import TestHeader from "../../components/TestHeader";

const j_league = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  const [matchList, setMatchList] = useState(canBetJleague);
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
      {/* ヘッダー */}
      <TestHeader />
      {/* スポーツ選択 */}
      <SelectSportsSoccer />
      <div className="space-y-3">
        {/* 国内 海外 W杯 その他 */}
        <SoccerGenreButton />

        <div className="space-y-3">
          {/* フィルターボタン */}
          <FilterButton
            handleFilter={handleFilter}
            filteredMatch={filteredMatch}
            setFilteredMatch={setFilteredMatch}
          />

          <div className="w-[95%] mx-auto space-y-2">
            {/* フィルター試合 */}
            {filteredMatch && (
              <FilteredMatchSoccer
                filteredMatch={filteredMatch}
                games={canBetJleague}
                placeBet={placeBet}
                betList={betList}
              />
            )}
            {/* 今日の試合 */}
            <TodaysMatchSoccer
              games={canBetJleague}
              placeBet={placeBet}
              betList={betList}
            />
            <div className="text-xl">今後の試合</div>
            {/* 今後の試合 */}
            <DateSelectSoccer
              games={canBetJleague}
              placeBet={placeBet}
              betList={betList}
            />
          </div>
        </div>
      </div>
      {/* ベット確認画面 */}
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

export default j_league;
