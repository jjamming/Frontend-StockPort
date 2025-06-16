export type BacktestFormValues = {
  start_date: string; // "2010-01-01"
  end_date: string; // "2020-12-31"
  rebalance_frequency: "매년" | "분기별" | "매월";
  initial_amount: number;
};

export type Asset = {
  ticker: string;
  name: string;
  weight: number;
};

export type BacktestRequest = BacktestFormValues & {
  assets: Asset[];
};

export type SearchResult = {
  ticker: string;
  name: string;
};
