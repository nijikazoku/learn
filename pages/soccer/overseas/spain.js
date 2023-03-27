import { useEffect, useState } from "react";
import FilterButton from "../../../components/displayBaseball/FilterButton";
import Layout from "../../../components/Layout";
import SelectSoccerLeague from "../../../components/displaySoccer/SelectSoccerLeague";
import SoccerGenreButton from "../../../components/displaySoccer/SoccerGenreButton";
import DateSelectSoccer from "../../../components/displaySoccer/DateSelectSoccer";
import FilteredMatchSoccer from "../../../components/displaySoccer/FilteredMatchSoccer";
import TodaysMatchSoccer from "../../../components/displaySoccer/TodaysMatchSoccer";
import SelectSportsSoccer from "../../../components/displaySoccer/SelectSportsSoccer";
import TestHeader from "../../../components/TestHeader";
import BetConfirm from "../../../components/BetConfirm";
import Betting from "../../../components/Betting";
import { canBetSpain } from "../../../src/soccer/overseas/canBetSpain";

const spain = () => {
  const [filteredMatch, setFilteredMatch] = useState("");

  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  const [matchList, setMatchList] = useState(canBetSpain);
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
      <TestHeader />
      <SelectSportsSoccer />
      <div className="space-y-3">
        {/* 国内　海外 その他 */}
        <SoccerGenreButton />
        {/* リーグ選択 */}
        <SelectSoccerLeague />

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
                games={canBetSpain}
                placeBet={placeBet}
                betList={betList}
              />
            )}
            <TodaysMatchSoccer
              games={canBetSpain}
              placeBet={placeBet}
              betList={betList}
            />
            <div className="text-xl">今後の試合</div>
            <DateSelectSoccer
              games={canBetSpain}
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

export default spain;
