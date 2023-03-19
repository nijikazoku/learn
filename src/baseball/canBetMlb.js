const canBetMlb = [
  {
    matchDate: "3/28",
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

    canBet: "after",
    type: "ナ・リーグ 東地区",
  },
  {
    matchDate: "3/28",
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

    canBet: "after",
    type: "ナ・リーグ 中地区",
  },
  {
    matchDate: "3/28",
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

    canBet: "after",
    type: "ナ・リーグ 西地区",
  },
  {
    matchDate: "3/28",
    matchTime: "15:00",
    category: "MLB",
    homeTeam: "ヤンキース",
    awayTeam: "レッドソックス",
    avenue: "ヤンキー・スタジアム",
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

    canBet: "after",
    type: "ア・リーグ 東地区",
  },
  {
    matchDate: "3/28",
    matchTime: "15:00",
    category: "MLB",
    homeTeam: "ツインズ",
    awayTeam: "タイガース",
    avenue: "ターゲット・フィールド",
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

    canBet: "after",
    type: "ア・リーグ 中地区",
  },
  {
    matchDate: "3/28",
    matchTime: "15:00",
    category: "MLB",
    homeTeam: "マリナーズ",
    awayTeam: "アスレチックス",
    avenue: "T-モバイル・パーク",
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

    canBet: "after",
    type: "ア・リーグ 西地区",
  },
  {
    matchDate: "4/01",
    matchTime: "19:00",
    category: "MLB",
    homeTeam: "ナショナルズ",
    awayTeam: "マーリンズ",
    avenue: "ナショナルズ・パーク",
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
    type: "ナ・リーグ 東地区",
  },
  {
    matchDate: "4/01",
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
  },
  {
    matchDate: "4/01",
    matchTime: "19:00",
    category: "MLB",
    homeTeam: "パドレス",
    awayTeam: "ロッキーズ",
    avenue: "ペトコ・パーク",
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
    type: "ナ・リーグ 西地区",
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

export { canBetMlb };
