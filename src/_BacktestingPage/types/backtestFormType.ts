export type BacktestFormValues = {
  start_date: string; // "2010-01-01"
  end_date: string; // "2020-12-31"
  rebalance_frequency: "매년" | "분기별" | "매월";
  initial_amount: number;
};

export type Asset = {
  id: string;
  ticker: string;
  name: string;
  weight: number;
};

export type AssetRequest = {
  name: string;
  ticker: string;
  weight: number;
};

export type BacktestRequest = BacktestFormValues & {
  assets: AssetRequest[];
};

export type SearchResult = {
  ticker: string;
  name: string;
};
