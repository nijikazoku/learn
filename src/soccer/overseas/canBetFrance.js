import { v4 as uuidv4 } from "uuid";

const canBetFrance = [
  {
    matchId: uuidv4(),
    sports: "soccer",
    matchDate: "3/30",
    matchTime: "15:00",
    category: "リーグ・アン",
    homeTeam: {
      name: "モナコ",
      inJapan: true,
    },
    awayTeam: {
      name: "パリ・サンジェルマン",
      inJapan: false,
    },
    avenue: "スタッド・ルイ・ドゥ",
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
    type: "第16節",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetFrance };
