const canBetEngland = [
  {
    sports: "soccer",
    matchDate: "3/29",
    matchTime: "18:00",
    category: "プレミアリーグ",
    homeTeam: "アーセナル",
    awayTeam: "マンチェスター・C",
    avenue: "エミレーツ・スタジアム",
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
    type: "第10節",
  },
];

export { canBetEngland };
