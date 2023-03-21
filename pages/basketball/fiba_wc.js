import { useState } from "react";
import FilterButton from "../../components/displayBaseball/FilterButton";
import Layout from "../../components/Layout";
import TestHeader from "../../components/TestHeader";
import SelectSportsBasketball from "../../components/displayBasketball/SelectSportsBasketball";
import BasketballGenreButton from "../../components/displayBasketball/BasketballGenreButton";
import TodaysMatchBasketball from "../../components/displayBasketball/TodaysMatchBasketball";
import DateSelectBasketball from "../../components/displayBasketball/DateSelectBasketball";
import FilteredMatchBasketball from "../../components/displayBasketball/FilteredMatchBasketball";
import { canBetFiba } from "../../src/basketball/canBetFiba";

const fiba_wc = () => {
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
                games={canBetFiba}
              />
            )}
            <TodaysMatchBasketball games={canBetFiba} />
            <div className="text-xl">今後の試合</div>
            <DateSelectBasketball games={canBetFiba} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default fiba_wc;
