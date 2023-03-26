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
    matchId: uuidv4(),
    sports: "soccer",
    matchDate: "3/28",
    matchTime: "13:00",
    category: "Jリーグ",
    homeTeam: "浦和レッズ",
    awayTeam: "ヴィッセル神戸",
    avenue: "埼玉スタジアム2002",
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
    type: "第10節",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
    image: "https://i.imgur.com/ucBOc3k.jpg",
  },
  {
    matchId: uuidv4(),
    sports: "soccer",
    matchDate: "3/28",
    matchTime: "16:00",
    category: "Jリーグ",
    homeTeam: "FC東京",
    awayTeam: "川崎フロンターレ",
    avenue: "味の素スタジアム",
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
    type: "第10節",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
    image: "https://i.imgur.com/ucBOc3k.jpg",
  },
];

export { pickUpMatch };
