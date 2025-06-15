import type {
  MarketType,
  MarketIndex,
} from "@/_MainPage/types/MarketIndexType";
import Chart from "./Chart";
import Triangle from "@/components/icons/Triangle";
import { marketData } from "@/_MainPage/mocks/marketData";

type MarketIndexChartProps = {
  marketType: MarketType;
};

const labelDiv =
  "inline-flex px-4 mb-4 h-7.5 items-center justify-center font-bold bg-white rounded-[10px] text-[1rem] font-suit text-navy";
const valueDiv = "font-suit text-4xl font-bold";
const MarketIndexChart = ({ marketType }: MarketIndexChartProps) => {
  const data: MarketIndex = marketData[marketType];
  return (
    <div className="flex gap-6 mx-7 w-auto">
      <div className="flex flex-col justify-center items-start gap-1 mb-13">
        <div className={labelDiv}>{marketType}</div>
        <div className={valueDiv}>{data.value}</div>
        <div className="relative flex">
          <Triangle direction={data.direction} size={13}></Triangle>
          <div
            className={`flex justify-end items-end font-suit text-[1rem] ${
              data.direction === "up" ? "text-red-500" : "text-blue-600"
            }`}
          >
            {data.volatility}
          </div>
        </div>
      </div>
      <Chart chartData={data.chartData}></Chart>
    </div>
  );
};

export default MarketIndexChart;
