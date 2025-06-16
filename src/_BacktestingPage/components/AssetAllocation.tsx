import type { Asset } from "../types/backtestFormType";
import AssetItem from "./AssetItem";
type AssetAllocationProps = {
  assets: Asset[];
  setAssets: React.Dispatch<React.SetStateAction<Asset[]>>;
};
const AssetAllocation = ({ assets, setAssets }: AssetAllocationProps) => {
  const handleAddAsset = () => {
    setAssets([...assets, { name: "", ticker: "", weight: 0 }]);
  };
  const handleDeleteAsset = (index: number) => {
    if (assets.length === 1) {
      alert("최소 1개의 자산은 유지해야 합니다.");
      return;
    }
    setAssets((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative flex flex-col gap-10 py-8 border-white border-b">
      <div className="flex justify-start items-start font-lalezar text-white text-3xl">
        자산 설정
      </div>
      <div className="flex flex-col gap-13">
        {assets.map((_, index) => (
          <AssetItem
            key={index}
            asset={assets[index]}
            onUpdate={handleAddAsset}
            AssetIndex={index}
            onDelete={() => handleDeleteAsset(index)}
          />
        ))}
      </div>
      <button
        onClick={handleAddAsset}
        className="relative flex justify-center items-center bg-white mx-auto px-4 py-2 rounded-3xl w-20 font-suit text-navy"
      >
        + 추가
      </button>
    </div>
  );
};

export default AssetAllocation;
