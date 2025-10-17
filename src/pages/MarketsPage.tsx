import { useState, useEffect, useMemo } from "react";
import MarketList from "../_MarketsPage/components/MarketList";
import { MOCK_DATA } from "../_MarketsPage/datas/MarketMockData";
import type { MarketItem } from "../_MarketsPage/types/marketItem";
import Pagination from "../components/Pagination";
import Title from "../components/Title";

const ITEMS_PER_PAGE = 10;
const CATEGORIES = ["거래대금", "거래량", "급상승", "급하락", "인기"];

const MarketsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [marketData, setMarketData] = useState<MarketItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("거래대금");

  // 주가 데이터 로딩
  useEffect(() => {
    // TODO: 백엔드 API 호출
    setMarketData(MOCK_DATA);
  }, []);

  // 카테고리 변경 시 데이터 정렬 로직
  const sortedData = useMemo(() => {
    const data = [...marketData];
    switch (activeCategory) {
      case "급상승":
        return data.sort((a, b) => b.changeRate - a.changeRate);
      case "급하락":
        return data.sort((a, b) => a.changeRate - b.changeRate);
      // TODO: '거래대금', '거래량', '인기'에 대한 정렬 로직 구현
      case "거래대금":
      default:
        return data;
    }
  }, [activeCategory, marketData]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(sortedData.length / ITEMS_PER_PAGE);
  const currentItems = sortedData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-6 md:px-12 min-h-screen font-sans text-white">
      <Title title="국내 시장"></Title>

      <main>
        {/* 카테고리 필터 */}
        <div className="flex items-center gap-4 mb-6 border-white/10 border-b">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`py-3 px-2 text-md transition-colors duration-200 cursor-pointer ${
                activeCategory === category
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <MarketList items={currentItems} currentPage={currentPage} itemsPerPage={ITEMS_PER_PAGE} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default MarketsPage;
