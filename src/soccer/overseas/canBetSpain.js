import { v4 as uuidv4 } from "uuid";

const canBetSpain = [
  {
    matchId: uuidv4(),
    sports: "soccer",
    matchDate: "4/01",
    matchTime: "12:00",
    category: "ラ・リーガ",
    homeTeam: {
      name: "バルセロナ",
      inJapan: false,
    },
    awayTeam: {
      name: "レアル・ソシエダ",
      inJapan: true,
    },
    avenue: "カンプ・ノウ",
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

export { canBetSpain };
