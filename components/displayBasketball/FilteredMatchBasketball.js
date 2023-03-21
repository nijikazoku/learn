import DisplayGamesBasketball from "./DisplayGameBasketball";

const FilteredMatchBasketball = ({ filteredMatch, games }) => {
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
        />
      ))}
    </>
  ) : (
    <></>
  );
};

export default FilteredMatchBasketball;
