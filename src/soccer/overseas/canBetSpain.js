const canBetSpain = [
  {
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
    canBet: "before",
    isJapan: true,
    type: "第16節",
  },
];

export { canBetSpain };
