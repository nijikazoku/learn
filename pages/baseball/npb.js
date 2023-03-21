import { useState } from "react";
import BaseballGenreButton from "../../components/displayBaseball/BaseballGenreButton";
import DateSelect from "../../components/displayBaseball/DateSelect";
import FilterButton from "../../components/displayBaseball/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/displayBaseball/TodaysMatch";
import { canBetNpb } from "../../src/baseball/canBetNpb";

const npb = () => {
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
              <FilteredMatch filteredMatch={filteredMatch} games={canBetNpb} />
            )}
            <TodaysMatch games={canBetNpb} />
            <div className="text-xl">今後の試合</div>
            <DateSelect games={canBetNpb} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default npb;
