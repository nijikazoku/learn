import { v4 as uuidv4 } from "uuid";
const canBetEngland = [
  {
    matchId: uuidv4(),
    sports: "soccer",
    matchDate: "3/29",
    matchTime: "18:00",
    category: "プレミアリーグ",
    homeTeam: {
      name: "アーセナル",
      inJapan: true,
    },
    awayTeam: {
      name: "マンチェスター・シティ",
      inJapan: false,
    },
    avenue: "エミレーツ・スタジアム",
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
    canBet: "accept",
    isJapan: true,
    type: "第10節",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetEngland };
