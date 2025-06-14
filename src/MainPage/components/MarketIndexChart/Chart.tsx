import type { ChartDataPoint } from "@/MainPage/types/MarketIndexType";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
type ChartProps = { chartData: ChartDataPoint[] };
const Chart = ({ chartData }: ChartProps) => {
  return (
    <div className="relative flex w-65 h-50">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid stroke="transparent" />
          <XAxis
            dataKey="date"
            stroke="#fff"
            tick={{ fill: "#AAAAAA", fontSize: 12, fontFamily: "Suit" }}
          />
          <YAxis
            domain={["auto"]}
            stroke="#fff"
            tick={{ fill: "#AAAAAA", fontSize: 12, fontFamily: "Suit" }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#fff"
            strokeWidth={1.5}
            dot={{ r: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
