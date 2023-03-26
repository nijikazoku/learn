import DisplayGamesBasketball from "./DisplayGamesBasketball";

const FilteredMatchBasketball = ({
  filteredMatch,
  games,
  betList,
  placeBet,
}) => {
  const filteredMatches = games.filter(
    (match) => match.canBet === filteredMatch
  );

  return filteredMatches.length > 0 ? (
    <>
      {filteredMatches.map((match, index) => (
        <DisplayGamesBasketball
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

export default FilteredMatchBasketball;
