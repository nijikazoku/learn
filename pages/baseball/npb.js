import { useState } from "react";
import DateSelect from "../../components/DateSelect";
import FilteredMatch from "../../components/FilteredMatch";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TodaysMatch from "../../components/TodaysMatch";

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
        <div className="">
          <div className="bg-slate-700 py-1 text-lg font-bold px-4 ">野球</div>
          <div className="text-lg flex items-center border-b">
            <div className="border-r bg-[#0075C2]  py-1 text-center w-1/4">
              NPB
            </div>
            <div className="border-r py-1 text-center w-1/4">MLB</div>
            <div className="border-r py-1  text-center w-1/4">WBC</div>
            <div className="py-1 text-center w-1/4">その他</div>
          </div>
        </div>

        <div className="space-y-3">
          {/* フィルターボタン */}
          <div className="space-x-3 text-sm px-2">
            <button
              onClick={() => handleFilter("accept")}
              className={`border rounded-md p-2 ${
                filteredMatch === "accept" && "border-green-600 bg-green-800"
              }`}
            >
              ベット受付中
            </button>
            <button
              onClick={() => handleFilter("before")}
              className={`border rounded-md p-2 ${
                filteredMatch === "before" && "border-[#FBBF24] bg-[#8a6915]"
              }`}
            >
              ベット受付前
            </button>
            <button
              onClick={() => handleFilter("after")}
              className={`border rounded-md p-2 ${
                filteredMatch === "after" && "border-red-400 bg-red-600"
              }`}
            >
              ベット締切済
            </button>
          </div>
          <div className="w-[95%] mx-auto space-y-2">
            {filteredMatch && <FilteredMatch filteredMatch={filteredMatch} />}
            <TodaysMatch />
            <div className="text-xl">今後の試合</div>
            <DateSelect />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default npb;
