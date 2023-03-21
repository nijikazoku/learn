const canBetGermany = [
  {
    sports: "soccer",
    matchDate: "3/31",
    matchTime: "15:00",
    category: "ブンデスリーガ",
    homeTeam: {
      name: "バイエルン",
      inJapan: false,
    },
    awayTeam: {
      name: "ドルトムント",
      inJapan: false,
    },
    avenue: "アリアンツ アレーナ",
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
    isJapan: false,
    type: "第20節",
  },
  {
    sports: "soccer",
    matchDate: "4/01",
    matchTime: "18:00",
    category: "ブンデスリーガ",
    homeTeam: {
      name: "シュツットガルト",
      inJapan: true,
    },
    awayTeam: {
      name: "RBライプツィヒ",
      inJapan: false,
    },
    avenue: "メルセデス・ベンツ・アリーナ",
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
    type: "第20節",
  },
  {
    sports: "soccer",
    matchDate: "4/02",
    matchTime: "18:00",
    category: "ブンデスリーガ",
    homeTeam: {
      name: "ヴォルフスブルク",
      inJapan: false,
    },
    awayTeam: {
      name: "シャルケ",
      inJapan: true,
    },
    avenue: "フォルクスワーゲンアリーナ",
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
    type: "第20節",
  },
];

export { canBetGermany };
