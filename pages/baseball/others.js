import Link from "next/link";
import { useState } from "react";
import BaseballGenreButton from "../../components/BaseballGenreButton";
import DateSelect from "../../components/DateSelect";
import FilterButton from "../../components/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/TodaysMatch";
import { canBetMlb } from "../../src/baseball/canBetMlb";

const mlb = () => {
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
              <FilteredMatch filteredMatch={filteredMatch} games={canBetMlb} />
            )}
            {/* 今日の試合 */}
            <TodaysMatch games={canBetMlb} />
            <div className="text-xl">今後の試合</div>
            {/* 今後の試合 */}
            <DateSelect games={canBetMlb} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default mlb;
