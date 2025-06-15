type AssetItemProps = {
  AssetIndex: number;
  onDelete: () => void;
};

const AssetItem = ({ AssetIndex, onDelete }: AssetItemProps) => {
  return (
    <div className="flex mx-10">
      <div className="w-55 font-suit text-2xl">자산 {AssetIndex + 1}</div>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default AssetItem;
