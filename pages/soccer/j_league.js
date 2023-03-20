import { useState } from "react";

import DateSelect from "../../components/DateSelect";
import FilterButton from "../../components/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SoccerGenreButton from "../../components/SoccerGenreButton";
import TodaysMatch from "../../components/TodaysMatch";
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
              <FilteredMatch
                filteredMatch={filteredMatch}
                games={canBetJleague}
              />
            )}
            <TodaysMatch games={canBetJleague} />
            <div className="text-xl">今後の試合</div>
            <DateSelect games={canBetJleague} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default j_league;
