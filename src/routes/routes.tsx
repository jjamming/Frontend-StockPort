import { type RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import {
  MainPage,
  MarketsPage,
  MarketDetailPage,
  CommunityPage,
  PortfolioPage,
  BacktestingPage,
  LoginPage,
  SignUpPage,
} from "../pages";

export const routes: RouteObject[] = [
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignUpPage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "markets", element: <MarketsPage /> },
      { path: "markets/:code", element: <MarketDetailPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "backtest", element: <BacktestingPage /> },
    ],
  },
];
