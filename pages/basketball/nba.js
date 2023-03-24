import { useState } from "react";
import FilterButton from "../../components/displayBaseball/FilterButton";
import Layout from "../../components/Layout";
import TestHeader from "../../components/TestHeader";
import SelectSportsBasketball from "../../components/displayBasketball/SelectSportsBasketball";
import BasketballGenreButton from "../../components/displayBasketball/BasketballGenreButton";
import { canBetNba } from "../../src/basketball/canBetNba";
import TodaysMatchBasketball from "../../components/displayBasketball/TodaysMatchBasketball";
import DateSelectBasketball from "../../components/displayBasketball/DateSelectBasketball";
import FilteredMatchBasketball from "../../components/displayBasketball/FilteredMatchBasketball";
import BetConfirm from "../../components/displayBasketball/BetConfirm";
import Betting from "../../components/displayBasketball/Betting";

const nba = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  const [matchList, setMatchList] = useState(canBetNba);
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
      <SelectSportsBasketball />
      <div className="space-y-3">
        {/* NPB MLB WBC その他 */}
        <BasketballGenreButton />

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
              <FilteredMatchBasketball
                filteredMatch={filteredMatch}
                games={canBetNba}
              />
            )}
            <TodaysMatchBasketball
              games={canBetNba}
              placeBet={placeBet}
              betList={betList}
            />
            <div className="text-xl">今後の試合</div>
            <DateSelectBasketball
              games={canBetNba}
              placeBet={placeBet}
              betList={betList}
            />
          </div>
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

export default nba;
