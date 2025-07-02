import React from "react";
import type { MarketItem } from "../types/marketItem";

interface MarketListProps {
  items: MarketItem[];
  currentPage: number;
  itemsPerPage: number;
}

const getChangeInfo = (changeRate: number) => {
  if (changeRate > 0) return { className: "text-red-500", icon: "▲" };
  if (changeRate < 0) return { className: "text-blue-500", icon: "▼" };
  return { className: "text-white", icon: "" };
};

const MarketList: React.FC<MarketListProps> = ({
  items,
  currentPage,
  itemsPerPage,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <table className="w-full text-white border-collapse">
      <thead>
        <tr className="border-white/10 border-b">
          <th className="p-4 font-normal text-gray-400 text-sm text-left">
            종목
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-left">
            자산명
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-left">
            현재가
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-left">
            등락률
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-left">
            거래대금
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          const { className, icon } = getChangeInfo(item.changeRate);
          return (
            <tr key={item.id} className="border-white/10 border-b">
              {/* 순번 */}
              <td className="p-4 text-gray-400 align-middle">
                {startIndex + index + 1}
              </td>

              {/* 종목명과 코드 */}
              <td className="p-4 align-middle">
                <div className="font-bold">{item.name}</div>
                <div className="text-gray-400 text-sm">{item.code}</div>
              </td>

              {/* 현재가 */}
              <td className={`p-4 align-middle font-bold ${className}`}>
                {item.price.toLocaleString()}원
              </td>

              {/* 등락률 */}
              <td className={`p-4 align-middle ${className}`}>
                {icon} {Math.abs(item.changeRate).toFixed(2)}%
              </td>

              {/* 거래대금 */}
              <td className="p-4 align-middle">{item.tradeVolume}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MarketList;
