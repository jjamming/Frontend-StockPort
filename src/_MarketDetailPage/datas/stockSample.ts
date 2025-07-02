import type { StockData } from "../types/StockDataType";

export const sampleData: StockData = {
  name: "삼성전자",
  code: "005930",
  currentPrice: 82600,
  change: "RISE",
  changeAmount: 900,
  changeRate: 1.1,
  prevClosePrice: 81700,
  highPrice: 83000,
  lowPrice: 81500,
  tradeVolume: 15234876,
  tradeValue: 1259897000000,
  openPrice: 82000,
};

// // 예시: SK하이닉스 하락 데이터
// const sampleData: StockData = {
//   name: 'SK하이닉스',
//   code: '000660',
//   currentPrice: 228000,
//   change: 'FALL',
//   changeAmount: 3000,
//   changeRate: -1.30,
//   prevClosePrice: 231000,
//   highPrice: 232000,
//   lowPrice: 227500,
//   tradeVolume: 3456789,
//   tradeValue: 791654112000,
//   openPrice: 230500,
// };
