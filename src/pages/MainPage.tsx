import MarketIndexChart from "@/MainPage/components/MarketIndexChart/MarketIndexChart";

const Container =
  "grid grid-cols-[2fr_2fr_1fr] grid-rows-[2fr_3fr] gap-12 w-full p-9 pt-0";

const MarketIndexChartWrapper =
  "flex relative items-center justify-center pl-7 border-2 border-white rounded-xl h-full";
const Divider = "h-50 border-l border-gray-300 mx-4";
const CardStyle =
  "border-2 border-white rounded-xl flex items-center justify-center p-4 w-full h-full";

const MainPage = () => {
  return (
    <div className={Container}>
      {/* KOSPI/KOSDAQ */}
      <div className="col-span-2 row-span-1">
        <div className={MarketIndexChartWrapper}>
          <MarketIndexChart marketType="KOSPI" />
          <div className={Divider}></div>
          <MarketIndexChart marketType="KOSDAQ" />
        </div>
      </div>

      {/* 나의 종목 */}
      <div className="col-span-1 row-span-2 h-200">
        <div className={CardStyle}>나의 종목</div>
      </div>

      {/* 실시간 인기 글 */}
      <div className="col-span-1 row-span-1 h-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-start items-center mb-3 ml-3 font-suit font-bold text-3xl">
            실시간 인기 글 🔥
          </div>
          <div className={`${CardStyle} flex-1`}>실시간 인기 글</div>
        </div>
      </div>

      {/* 백테스트 바로가기 */}
      <div className="col-span-1 row-span-1 h-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-start items-center mb-3 ml-3 font-suit font-bold text-3xl">
            국내 투자 포트폴리오 백테스트 서비스
          </div>
          <div className={`${CardStyle} flex-1`}>백테스트 바로가기</div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
