import { useState } from "react";
import BaseballGenreButton from "../../components/displayBaseball/BaseballGenreButton";
import DateSelect from "../../components/displayBaseball/DateSelect";
import FilterButton from "../../components/displayBaseball/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/displayBaseball/TodaysMatch";
import { canBetWbc } from "../../src/baseball/canBetWbc";
import TestHeader from "../../components/TestHeader";
import SelectSports from "../../components/displayBaseball/SelectSports";

const wbc = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };
  return (
    <Layout>
      <TestHeader />
      <SelectSports />
      <div className="space-y-3">
        {/* NPB MLB WBC その他 */}
        <BaseballGenreButton />
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
              <FilteredMatch filteredMatch={filteredMatch} games={canBetWbc} />
            )}
            {/* 今日の試合 */}
            <TodaysMatch games={canBetWbc} />
            <div className="text-xl">今後の試合</div>
            {/* 今後の試合 */}
            <DateSelect games={canBetWbc} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default wbc;
