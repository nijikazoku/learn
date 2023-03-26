import { v4 as uuidv4 } from "uuid";
const pickUpMatch = [
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "19:00",
    category: "NPB",
    homeTeam: "巨人",
    awayTeam: "広島",
    avenue: "東京ドーム",
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
    type: "オープン戦",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
    image: "https://i.imgur.com/mUpjBkX.jpg",
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "19:00",
    category: "NPB",
    homeTeam: "中日",
    awayTeam: "阪神",
    avenue: "ナゴヤドーム",
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
    type: "オープン戦",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
    image: "https://i.imgur.com/mUpjBkX.jpg",
  },
  {
    sports: "サッカー",
    type: "Jリーグ",
    homeTeam: "FC東京",
    awayTeam: "川崎フロンターレ",
    matchDate: "14:00",
    odds1: 2.26,
    odds2: 1.78,
    odds3: 4.27,
    image: "https://i.imgur.com/ucBOc3k.jpg",
  },
  {
    sports: "サッカー",
    type: "Jリーグ",
    homeTeam: "浦和レッズ",
    awayTeam: "サンフレッチェ広島",
    matchDate: "14:00",
    odds1: 2.43,
    odds2: 2.85,
    odds3: 5.61,
    image: "https://i.imgur.com/ucBOc3k.jpg",
  },
];

export { pickUpMatch };
