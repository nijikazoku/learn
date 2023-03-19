import { canBetNpb } from "../src/baseball/canBetNpb";
import DisplayGames from "./DisplayGames";

const FilteredMatch = ({ filteredMatch }) => {
  const filteredMatches = canBetNpb.filter(
    (match) => match.canBet === filteredMatch
  );

  return filteredMatches.length > 0 ? (
    <>
      {filteredMatches.map((match, index) => (
        <DisplayGames
          key={`${match.homeTeam}-${match.awayTeam}`}
          match={match}
          index={index}
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default FilteredMatch;
