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

const nba = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
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
            <TodaysMatchBasketball games={canBetNba} />
            <div className="text-xl">今後の試合</div>
            <DateSelectBasketball games={canBetNba} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default nba;
