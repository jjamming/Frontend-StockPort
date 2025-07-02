import { useParams } from "react-router-dom";

const MarketDetailPage: React.FC = () => {
  const { marketCode } = useParams<{ marketCode: string }>();
  return (
    <div className="px-6 md:px-12 min-h-screen font-sans text-white">
      <h1 className="mb-4 font-bold text-2xl">시장 상세 정보</h1>
      <p>선택한 시장 코드: {marketCode}</p>
    </div>
  );
};

export default MarketDetailPage;
