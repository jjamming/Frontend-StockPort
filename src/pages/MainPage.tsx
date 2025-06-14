import MarketIndexChart from "@/MainPage/components/MarketIndexChart/MarketIndexChart";
import { PortfolioDescription } from "@/MainPage/mocks/description";
import { Button } from "@/components/ui/button";

const Container =
  "grid grid-cols-[3fr_3fr_2fr] grid-rows-[2fr_3fr] gap-8 w-full p-9 pt-0";

const MarketIndexChartWrapper =
  "flex relative items-center justify-center border-2 border-white rounded-xl h-full";
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
      <div className="col-span-1 row-span-2 mr-5 h-175">
        <div className={CardStyle}>나의 종목</div>
      </div>

      {/* 실시간 인기 글 */}
      <div className="col-span-1 row-span-1 h-100">
        <div
          className={`${CardStyle} justify-center items-start flex-1 flex-col gap-8`}
        >
          <div className="flex font-suit font-bold text-2xl">
            실시간 인기 글 🔥
          </div>
          <div>실시간 인기 글</div>
        </div>
      </div>

      {/* 백테스트 바로가기 */}
      <div className="col-span-1 row-span-1 h-100">
        <div
          className={`${CardStyle} justify-center items-start flex-1 flex-col gap-8`}
        >
          <div className="flex font-suit font-bold text-2xl">
            국내 투자 포트폴리오 백테스트 서비스
          </div>
          <div className="font-suit text-[0.95rem]">
            {PortfolioDescription.split("|").map((line) => (
              <>
                {line}
                <br />
              </>
            ))}
          </div>
          <Button className="flex bg-white rounded-4xl w-60 h-18 font-suit text-navy text-xl cursor-pointer cu">
            백테스팅 시작하기
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
