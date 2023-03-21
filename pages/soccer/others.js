import { useState } from "react";
import DateSelectSoccer from "../../components/displaySoccer/DateSelectSoccer";
import FilteredMatchSoccer from "../../components/displaySoccer/FilteredMatchSoccer";
import TodaysMatchSoccer from "../../components/displaySoccer/TodaysMatchSoccer";
import FilterButton from "../../components/displayBaseball/FilterButton";
import Layout from "../../components/Layout";
import SoccerGenreButton from "../../components/displaySoccer/SoccerGenreButton";
import { canBetOthers } from "../../src/soccer/canBetOthers";
import SelectSportsSoccer from "../../components/displaySoccer/SelectSportsSoccer";
import TestHeader from "../../components/TestHeader";

const others = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  return (
    <Layout>
      <TestHeader />
      <SelectSportsSoccer />
      <div className="space-y-3">
        {/* 国内　海外 その他 */}
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
                games={canBetOthers}
              />
            )}
            <TodaysMatchSoccer games={canBetOthers} />
            <div className="text-xl">今後の試合</div>
            <DateSelectSoccer games={canBetOthers} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default others;
