export type MarketType = "KOSPI" | "KOSDAQ";

export type ChartDataPoint = { date: string; value: number };

export type MarketIndex = {
  value: number;
  change: number;
  changePercent: number;
  direction: "up" | "down";
  chartData: ChartDataPoint[];
};
export type MarketIndexData = Record<MarketType, MarketIndex>;
