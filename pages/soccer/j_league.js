import { useState } from "react";
import DateSelectSoccer from "../../components/displaySoccer/DateSelectSoccer";
import FilteredMatchSoccer from "../../components/displaySoccer/FilteredMatchSoccer";
import TodaysMatchSoccer from "../../components/displaySoccer/TodaysMatchSoccer";
import FilterButton from "../../components/displayBaseball/FilterButton";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SoccerGenreButton from "../../components/displaySoccer/SoccerGenreButton";
import { canBetJleague } from "../../src/soccer/canBetJleague";

const j_league = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        {/* NPB MLB WBC その他 */}
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
              />
            )}
            <TodaysMatchSoccer games={canBetJleague} />
            <div className="text-xl">今後の試合</div>
            <DateSelectSoccer games={canBetJleague} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default j_league;
