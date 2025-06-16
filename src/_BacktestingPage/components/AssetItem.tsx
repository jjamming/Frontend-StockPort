import { useState, useEffect, useRef } from "react";
import type { SearchResult, Asset } from "../types/backtestFormType";
import { debounce } from "lodash";

type AssetItemProps = {
  AssetIndex: number;
  asset: Asset;
  onUpdate: (updatedAsset: Asset) => void;
  onDelete: () => void;
};

const mockSearchAsset = async (query: string): Promise<SearchResult[]> => {
  if (!query) return [];
  return [
    { name: "삼성전자", ticker: "005930" },
    { name: "삼성물산", ticker: "028260" },
    { name: "삼성SDI", ticker: "006400" },
    { name: "삼성바이오로직스", ticker: "207940" },
    { name: "삼성에스디에스", ticker: "018260" },
  ];
};

const AssetItem = ({
  AssetIndex,
  asset,
  onUpdate,
  onDelete,
}: AssetItemProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState(asset.name);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const skipSearchRef = useRef(false);
  const hasClearedRef = useRef(false); // 🔥 추가

  const handleSearch = debounce(async (keyword: string) => {
    const results = await mockSearchAsset(keyword);
    setSearchResults(results);
    setIsDropdownOpen(true);
  }, 300);

  useEffect(() => {
    if (skipSearchRef.current) {
      skipSearchRef.current = false;
      return;
    }
    if (query) {
      handleSearch(query);
    } else {
      setSearchResults([]);
      setIsDropdownOpen(false);
    }
  }, [query]);

  const handleSelect = (selected: SearchResult) => {
    const displayValue = `${selected.name} (${selected.ticker})`;
    onUpdate({ ...asset, name: selected.name, ticker: selected.ticker });
    skipSearchRef.current = true;
    setQuery(displayValue);
    setSearchResults([]);
    setIsDropdownOpen(false);
    hasClearedRef.current = false; // 선택 후 다시 초기화 가능하게 초기화
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex mx-10">
      <div className="relative flex items-center w-55 font-suit text-2xl">
        자산 {AssetIndex + 1}
      </div>

      <input
        className="relative flex px-2 py-1 border rounded w-60 h-11"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          hasClearedRef.current = true; // 입력 중엔 다시 초기화 안되게
        }}
        placeholder="종목명 입력"
        onFocus={() => {
          if (!hasClearedRef.current && query.includes("(")) {
            setQuery("");
            setIsDropdownOpen(true);
            hasClearedRef.current = true;
          } else {
            if (searchResults.length > 0) setIsDropdownOpen(true);
          }
        }}
      />

      {isDropdownOpen && searchResults.length > 0 && (
        <div className="top-full left-55 z-20 absolute flex flex-col items-center bg-navy mt-2 border rounded w-60 h-auto text-[#E0E6ED] cursor-pointer">
          {searchResults.map((item) => (
            <div
              key={item.ticker}
              className="flex hover:bg-[#182c4d] px-2 py-1 w-full"
              onClick={() => handleSelect(item)}
            >
              {item.name} ({item.ticker})
            </div>
          ))}
        </div>
      )}
      <input
        type="number"
        className="relative flex ml-4 px-2 py-1 border rounded w-24 h-11"
        value={asset.weight === 0 ? "" : asset.weight}
        onChange={(e) => {
          const newWeight = Math.max(0, Math.min(100, Number(e.target.value)));
          onUpdate({ ...asset, weight: newWeight });
        }}
        placeholder="비중(%)"
        onWheel={(e) => e.preventDefault()}
      />
      {AssetIndex !== 0 ? (
        <button
          className="flex justify-center items-center hover:bg-blue-950 px-4 py-1 rounded-3xl font-suit text-l text-white"
          onClick={onDelete}
        >
          X
        </button>
      ) : null}
    </div>
  );
};

export default AssetItem;
