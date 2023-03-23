import { v4 as uuidv4 } from "uuid";

const canBetNba = [
  {
    matchId: uuidv4(),
    betNum: 0,
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "12:00",
    category: "MLB",
    homeTeam: "ホワイトソックス",
    awayTeam: "ロイヤルズ",
    avenue: "ギャランティード・フィールド",
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
    type: "ア・リーグ 中地区",
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    betNum: 0,
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "12:00",
    category: "MLB",
    homeTeam: "アストロズ",
    awayTeam: "レンジャーズ",
    avenue: "ミニッツメイド・パーク",
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
    type: "ア・リーグ 西地区",
    incrementValue: 1,
  },
  {
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "19:00",
    category: "MLB",
    homeTeam: "カージナルス",
    awayTeam: "パイレーツ",
    avenue: "ブッシュ・スタジアム",
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
    type: "ナ・リーグ 中地区",
    matchId: uuidv4(),
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetNba };
