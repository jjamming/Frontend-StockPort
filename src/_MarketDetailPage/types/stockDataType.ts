export interface StockData {
  name: string;
  code: string;
  currentPrice: number;
  change: "RISE" | "FALL" | "EVEN";
  changeAmount: number;
  changeRate: number;
  prevClosePrice: number;
  highPrice: number;
  lowPrice: number;
  tradeVolume: number;
  tradeValue: number;
  openPrice: number;
}
