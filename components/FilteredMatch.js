import DisplayGames from "./displayBaseball/DisplayGames";

const FilteredMatch = ({ filteredMatch, games }) => {
  const filteredMatches = games.filter(
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
