import { v4 as uuidv4 } from "uuid";
const canBetBoxing = [
  {
    matchId: uuidv4(),
    sports: "fighting",
    matchDate: "4/01",
    matchTime: "12:00",
    category: "Breaking Down 7",
    homeTeam: "ぬりぼう",
    awayTeam: "本田スイミングスクール",
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
    type: "第1試合",
    class: "フェザー級",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetBoxing };
