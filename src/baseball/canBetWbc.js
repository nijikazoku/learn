import { v4 as uuidv4 } from "uuid";

const canBetWbc = [
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "08:00",
    category: "WBC",
    homeTeam: "アメリカ",
    awayTeam: "日本",
    avenue: "ローンデポ・パーク",
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
    type: "決勝",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetWbc };
