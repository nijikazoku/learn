import { v4 as uuidv4 } from "uuid";
const canBetBleague = [
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/28",
    matchTime: "12:00",
    category: "B1リーグ",
    homeTeam: "新潟アルビレックスBB",
    awayTeam: "シーホース三河",
    avenue: "プラザアオーレ長岡",
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
    type: "第20週",
    canBet: "after",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/28",
    matchTime: "12:00",
    category: "B1リーグ",
    homeTeam: "横浜ビー・コルセアーズ",
    awayTeam: "信州ブレイブウォリアーズ",
    avenue: "横浜国際プール",
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
    type: "第20週",
    canBet: "after",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/28",
    matchTime: "12:00",
    category: "B1リーグ",
    homeTeam: "川崎ブレイブサンダース",
    awayTeam: "富山グラウジーズ",
    avenue: "とどろきアリーナ",
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
    type: "第20週",
    canBet: "after",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/31",
    matchTime: "16:00",
    category: "B1リーグ",
    homeTeam: "千葉ジェッツふなばし",
    awayTeam: "レバンガ北海道",
    avenue: "船橋アリーナ",
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
    type: "第20週",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/31",
    matchTime: "19:00",
    category: "B1リーグ",
    homeTeam: "三遠ネオフェニックス",
    awayTeam: "仙台89ERS",
    avenue: "豊橋市総合体育館",
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
    type: "第20週",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "basketball",
    matchDate: "3/31",
    matchTime: "19:00",
    category: "B1リーグ",
    homeTeam: "琉球ゴールデンキングス",
    awayTeam: "京都ハンナリーズ",
    avenue: "沖縄アリーナ",
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
    type: "第20週",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetBleague };
