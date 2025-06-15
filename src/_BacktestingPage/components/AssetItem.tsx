type AssetItemProps = {
  AssetIndex: number;
  onDelete: () => void;
};

const AssetItem = ({ AssetIndex, onDelete }: AssetItemProps) => {
  return (
    <div className="flex mx-10">
      <div className="flex items-center w-55 font-suit text-2xl">
        자산 {AssetIndex + 1}
      </div>
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
