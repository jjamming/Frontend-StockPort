import Chart from "./Chart";
import Triangle from "@/components/icons/Triangle";

type MarketIndexChartProps = {
  marketType: "KOSPI" | "KOSDAQ";
};

const labelDiv =
  "inline-flex px-4 mb-4 h-7.5 items-center justify-center font-bold bg-white rounded-[10px] text-[1rem] font-suit text-navy";
const valueDiv = "font-suit text-4xl font-bold";
const MarketIndexChart = ({ marketType }: MarketIndexChartProps) => {
  return (
    <div className="flex w-auto">
      <div className="flex-col">
        <div className={labelDiv}>{marketType}</div>
        <div className={valueDiv}>2,559.67</div>
      </div>
      <Triangle direction="up" size={13}></Triangle>
      <div className="flex justify-end items-end font-suit text-[1rem] text-red-500">
        3.18 (+0.12%)
      </div>
      <Chart></Chart>
    </div>
  );
};

export default MarketIndexChart;
