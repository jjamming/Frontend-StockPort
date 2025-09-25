// 상세정보 페이지에서 사용되며, 종목의 시가, 고가, 저가, 거래량 등의 정보를 표시

interface DetailItemProps {
  label: string;
  value: string | React.ReactNode;
  className?: string;
}

const DetailItem = ({ label, value, className = "" }: DetailItemProps) => (
  <div className="flex justify-between items-center hover:bg-white/10 p-2 rounded-md text-sm transition-colors duration-200">
    <dt className="text-[1.2rem] text-gray-400">{label}</dt>
    <dd className={`text-[1.2rem] font-semibold ${className}`}>{value}</dd>
  </div>
);

export default DetailItem;
