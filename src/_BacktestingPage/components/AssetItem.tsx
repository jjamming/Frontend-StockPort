import { useState, useEffect } from "react";
import type { SearchResult, Asset } from "../types/backtestFormType";
import { searchAsset } from "../apis/searchAsset";
import { debounce } from "lodash";

type AssetItemProps = {
  AssetIndex: number;
  asset: Asset;
  onUpdate: (updatedAsset: Asset) => void;
  onDelete: () => void;
};
const mockSearchAsset = async (query: string): Promise<SearchResult[]> => {
  if (!query) return [];
  return [{ name: "삼성전자", ticker: "000000" }];
};

const AssetItem = ({
  AssetIndex,
  asset,
  onUpdate,
  onDelete,
}: AssetItemProps) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [query, setQuery] = useState(asset.name);

  const handleSearch = debounce(async (keyword: string) => {
    const results = await mockSearchAsset(keyword);
    setSearchResults(results);
  }, 300);
  useEffect(() => {
    if (query) {
      handleSearch(query);
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const handleSelect = (selected: SearchResult) => {
    onUpdate({
      ...asset,
      name: selected.name,
      ticker: selected.ticker,
    });
    setQuery(selected.name);
    setSearchResults([]);
  };
  return (
    <div className="relative flex mx-10">
      <div className="relative flex items-center w-55 font-suit text-2xl">
        자산 {AssetIndex + 1}
      </div>

      <input
        className="relative flex px-2 py-1 border rounded w-60 h-11"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="종목명 입력"
      />

      {/* 드롭다운 */}
      {searchResults.length > 0 && (
        <div className="top-full left-55 z-20 absolute flex items-center bg-white hover:bg-gray-300 mt-2 border rounded w-60 h-10 text-navy">
          {searchResults.map((item) => (
            <div
              key={item.ticker}
              className="px-2 py-1 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.name} ({item.ticker})
            </div>
          ))}
        </div>
      )}

      {AssetIndex !== 0 ? (
        <button
          className="flex justify-center items-center hover:bg-blue-950 px-4 py-1 rounded-3xl font-suit text-l text-white"
          onClick={onDelete}
        >
          X
        </button>
      ) : undefined}
    </div>
  );
};

export default AssetItem;
