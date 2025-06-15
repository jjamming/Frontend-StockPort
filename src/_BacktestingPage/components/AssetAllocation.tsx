import AssetItem from "./AssetItem";

const AssetAllocation = () => {
  return (
    <div className="flex flex-col py-10 border-white border-b">
      <div className="font-lalezar text-white text-3xl">자산 설정</div>
      <div>
        <AssetItem></AssetItem>
      </div>
    </div>
  );
};

export default AssetAllocation;
