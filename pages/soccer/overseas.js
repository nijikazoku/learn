import { useState } from "react";
import FilterButton from "../../components/FilterButton";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import SelectSoccerLeague from "../../components/SelectSoccerLeague";
import SoccerGenreButton from "../../components/displaySoccer/SoccerGenreButton";
import TodaysMatch from "../../components/TodaysMatch";
import { canBetEngland } from "../../src/soccer/overseas/canBetEngland";
import { canBetSpain } from "../../src/soccer/overseas/canBetSpain";
import { canBetGermany } from "../../src/soccer/overseas/canBetGermany";
import { canBetFrance } from "../../src/soccer/overseas/canBetFrance";
import { canBetItaly } from "../../src/soccer/overseas/canBetItaly";
import { canBetNetherlands } from "../../src/soccer/overseas/canBetNetherlands";
import { canBetPortgal } from "../../src/soccer/overseas/canBetPortgal";
import DateSelectSoccer from "../../components/displaySoccer/DateSelectSoccer";
import FilteredMatchSoccer from "../../components/displaySoccer/FilteredMatchSoccer";
import TodaysMatchSoccer from "../../components/displaySoccer/TodaysMatchSoccer";

const overseas = () => {
  const [filteredMatch, setFilteredMatch] = useState("");
  const [selectCountry, setSelectCountry] = useState("england");
  const handleFilter = (condition) => {
    if (condition === filteredMatch) {
      setFilteredMatch("");
    } else setFilteredMatch(condition);
  };

  let games = [];
  switch (selectCountry) {
    case "england":
      games = canBetEngland;
      break;
    case "spain":
      games = canBetSpain;
      break;
    case "germany":
      games = canBetGermany;
      break;
    case "italy":
      games = canBetItaly;
      break;
    case "france":
      games = canBetFrance;
      break;
    case "netherlands":
      games = canBetNetherlands;
      break;
    case "portgal":
      games = canBetPortgal;
      break;
    default:
      break;
  }
  return (
    <Layout>
      <Header />
      <div className="space-y-3">
        {/* NPB MLB WBC その他 */}
        <SoccerGenreButton />
        {/* リーグ選択 */}
        <SelectSoccerLeague
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />

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
                games={games}
              />
            )}
            <TodaysMatchSoccer games={games} />
            <div className="text-xl">今後の試合</div>
            <DateSelectSoccer games={games} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default overseas;
