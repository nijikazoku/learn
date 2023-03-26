import DisplayGamesBaseball from "./displayBaseball/DisplayGamesBaseball";

const FilteredMatch = ({ filteredMatch, games, placeBet, betList }) => {
  const filteredMatches = games.filter(
    (match) => match.canBet === filteredMatch
  );

  return filteredMatches.length > 0 ? (
    <>
      {filteredMatches.map((match, index) => (
        <DisplayGamesBaseball
          key={`${match.homeTeam}-${match.awayTeam}`}
          match={match}
          index={index}
          placeBet={placeBet}
          betList={betList}
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default FilteredMatch;
