import { v4 as uuidv4 } from "uuid";

const canBetNpb = [
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "13:00",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "13:00",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "13:00",
    category: "NPB",
    homeTeam: "ヤクルト",
    awayTeam: "横浜",
    avenue: "神宮球場",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "19:00",
    category: "NPB",
    homeTeam: "オリックス",
    awayTeam: "ソフトバンク",
    avenue: "京セラドーム",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "19:00",
    category: "NPB",
    homeTeam: "日ハム",
    awayTeam: "楽天",
    avenue: "札幌ドーム",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "19:00",
    category: "NPB",
    homeTeam: "西武",
    awayTeam: "ロッテ",
    avenue: "西武ドーム",
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
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "18:00",
    category: "NPB",
    homeTeam: "阪神",
    awayTeam: "巨人",
    avenue: "甲子園",
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
    canBet: "before",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "18:00",
    category: "NPB",
    homeTeam: "ソフトバンク",
    awayTeam: "楽天",
    avenue: "paypayドーム",
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
    canBet: "before",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetNpb };
