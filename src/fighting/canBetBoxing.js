import { v4 as uuidv4 } from "uuid";
const canBetBoxing = [
  {
    matchId: uuidv4(),
    sports: "fighting",
    matchDate: "4/02",
    matchTime: "19:00",
    category: "WBC・WBO",
    homeTeam: "井上尚弥",
    awayTeam: "フルトン",
    oddsHome: parseFloat(
      (Math.random() * 1.89 + 1.1).toFixed(2)
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    oddsDraw: parseFloat(
      (Math.random() * 2.89 + 7.1).toFixed(2)
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    oddsAway: parseFloat(
      (Math.random() * 1.89 + 1.1).toFixed(2)
    ).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    type: "タイトルマッチ",
    class: "スーパーバンタム級",
    canBet: "before",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetBoxing };
