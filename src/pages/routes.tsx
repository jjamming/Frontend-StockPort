import { type RouteObject } from "react-router-dom";
import {
  MainPage,
  MarketsPage,
  CommunityPage,
  PortfolioPage,
  BacktestingPage,
} from "./";

export const routes: RouteObject[] = [
  { path: "/", element: <MainPage /> },
  { path: "/markets", element: <MarketsPage /> },
  { path: "/community", element: <CommunityPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/backtesting", element: <BacktestingPage /> },
];
