import { type RouteObject } from "react-router-dom";
import Layout from "../layouts/Layout";
import {
  MainPage,
  MarketsPage,
  CommunityPage,
  PortfolioPage,
  BacktestingPage,
  LoginPage,
} from "../pages";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "markets", element: <MarketsPage /> },
      { path: "community", element: <CommunityPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "backtest", element: <BacktestingPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
];
