import { v4 as uuidv4 } from "uuid";
const koshien = [
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "12:00",
    category: "高校野球",
    homeTeam: "東北(宮城)",
    awayTeam: "沖縄尚学(沖縄)",
    avenue: "甲子園球場",
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
    type: "第1試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "15:00",
    category: "高校野球",
    homeTeam: "北陸(福井)",
    awayTeam: "山梨学院(山梨)",
    avenue: "甲子園球場",
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
    type: "第2試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/28",
    matchTime: "17:00",
    category: "高校野球",
    homeTeam: "大垣日大(岐阜)",
    awayTeam: "高知(高知)",
    avenue: "甲子園球場",
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
    type: "第3試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "09:00",
    category: "高校野球",
    homeTeam: "東邦(愛知)",
    awayTeam: "作新学院(栃木)",
    avenue: "甲子園球場",
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
    type: "第1試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "12:00",
    category: "高校野球",
    homeTeam: "大分商(大分)",
    awayTeam: "鳥取城北(鳥取)",
    avenue: "甲子園球場",
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
    type: "第2試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },

  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "15:00",
    category: "高校野球",
    homeTeam: "敦賀気比(福井)",
    awayTeam: "広陵(広島)",
    avenue: "甲子園球場",
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
    type: "第3試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
  {
    matchId: uuidv4(),
    sports: "baseball",
    matchDate: "3/29",
    matchTime: "18:00",
    category: "高校野球",
    homeTeam: "二松学舎大付(東京)",
    awayTeam: "社(兵庫)",
    avenue: "甲子園球場",
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
    type: "第4試合(1回戦)",
    canBet: "accept",
    betNum: 0,
    incrementValue: 1,
  },
];
export { koshien };
