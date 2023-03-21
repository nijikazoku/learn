import { useState } from "react";
import BaseballGenreButton from "../../components/displayBaseball/BaseballGenreButton";
import DateSelect from "../../components/displayBaseball/DateSelect";
import FilterButton from "../../components/displayBaseball/FilterButton";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/displayBaseball/TodaysMatch";
import { koshien } from "../../src/baseball/koshien";
import { canBetCollege } from "../../src/baseball/canBetCollege";

const others = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const [selectSchool, setSelectSchool] = useState("high");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        <div>
          {/* NPB MLB WBC その他 */}
          <BaseballGenreButton />
          {/* サブジャンル */}
          <div className="flex justify-center space-x-5">
            <div
              onClick={() => setSelectSchool("high")}
              className={`py-2 px-2 ${
                selectSchool === "high"
                  ? "text-gray-100 border-b-2 border-gray-100"
                  : "text-gray-600 border-b-2 border-gray-600"
              }`}
            >
              高校野球
            </div>
            <div
              onClick={() => setSelectSchool("college")}
              className={`py-2 px-2 ${
                selectSchool === "college"
                  ? "text-rgray-100 border-b-2 border-gray-100"
                  : "text-gray-600 border-b-2 border-gray-600"
              }`}
            >
              大学野球
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {/* フィルターボタン */}
          <FilterButton
            handleFilter={handleFilter}
            filteredMatch={filteredMatch}
            setFilteredMatch={setFilteredMatch}
          />
          {selectSchool === "high" && (
            <div className="w-[95%] mx-auto space-y-2">
              {/* フィルター試合 */}
              {filteredMatch && (
                <FilteredMatch filteredMatch={filteredMatch} games={koshien} />
              )}
              {/* 今日の試合 */}
              <TodaysMatch games={koshien} />
              <div className="text-xl">今後の試合</div>
              {/* 今後の試合 */}
              <DateSelect games={koshien} />
            </div>
          )}
          {selectSchool === "college" && (
            <div className="w-[95%] mx-auto space-y-2">
              {/* フィルター試合 */}
              {filteredMatch && (
                <FilteredMatch
                  filteredMatch={filteredMatch}
                  games={canBetCollege}
                />
              )}
              {/* 今日の試合 */}
              <TodaysMatch games={canBetCollege} />
              <div className="text-xl">今後の試合</div>
              {/* 今後の試合 */}
              <DateSelect games={canBetCollege} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default others;
