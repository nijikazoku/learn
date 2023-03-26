import DisplayGamesSoccer from "./DisplayGamesSoccer";

const FilteredMatchSoccer = ({ filteredMatch, games, betList, placeBet }) => {
  const filteredMatches = games.filter(
    (match) => match.canBet === filteredMatch
  );

  return filteredMatches.length > 0 ? (
    <>
      {filteredMatches.map((match, index) => (
        <DisplayGamesSoccer
          key={`${match.homeTeam.name}-${match.awayTeam.name}`}
          match={match}
          index={index}
          betList={betList}
          placeBet={placeBet}
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default FilteredMatchSoccer;
