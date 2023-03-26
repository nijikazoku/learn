import { v4 as uuidv4 } from "uuid";

const canBetMlb = [
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/01",
    matchTime: "13:00",
    category: "MLB",
    homeTeam: "ブレーブス",
    awayTeam: "メッツ",
    avenue: "トゥルーイスト・パーク",
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
    type: "ナ・リーグ 東地区",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/01",
    matchTime: "13:00",
    category: "MLB",
    homeTeam: "レッズ",
    awayTeam: "カブス",
    avenue: "グレートアメリカン・パーク",
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
    type: "ナ・リーグ 中地区",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/01",
    matchTime: "13:00",
    category: "MLB",
    homeTeam: "ジャイアンツ",
    awayTeam: "ドジャース",
    avenue: "オラクル・パーク",
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
    type: "ナ・リーグ 西地区",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },

  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/02",
    matchTime: "12:00",
    category: "MLB",
    homeTeam: "ブルージェイズ",
    awayTeam: "レイズ",
    avenue: "ロジャースセンター",
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

    canBet: "before",
    type: "ア・リーグ 東地区",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/02",
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

    canBet: "before",
    type: "ア・リーグ 中地区",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "4/02",
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

    canBet: "before",
    type: "ア・リーグ 西地区",
    betNum: 0,
    incrementValue: 1,
  },
];

export { canBetMlb };
