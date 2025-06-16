type StartBacktestButtonProps = {
  handleSubmit: () => void;
  disabled: boolean;
};
const StartBacktestButton = ({
  handleSubmit,
  disabled,
}: StartBacktestButtonProps) => {
  return (
    <div className="flex justify-center items-center hover:opacity-70 my-3">
      <button
        className={`flex justify-center items-center mt-2.5 rounded-xl w-40 h-10 font-[21rem] font-suit ${
          disabled ? "bg-gray-300 text-gray-500" : "bg-white text-navy"
        }`}
        disabled={disabled}
        onClick={handleSubmit}
      >
        백테스트 시작
      </button>
    </div>
  );
};

export default StartBacktestButton;
