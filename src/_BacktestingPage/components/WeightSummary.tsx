type WeightSummaryProps = {
  totalWeight: number;
};

const WeightSummary = ({ totalWeight }: WeightSummaryProps) => {
  const isValid = totalWeight === 100;

  return (
    <div className="flex flex-col justify-end items-end">
      <div
        className={`text-lg font-suit ${isValid ? "text-white" : "text-red-600 font-bold"}`}
      >
        현재 비중 합계: {totalWeight}%
      </div>
      {!isValid && (
        <div className="mt-1 font-suit text-white text-sm">
          비중의 합이 100%가 되어야 합니다.
        </div>
      )}
    </div>
  );
};

export default WeightSummary;
