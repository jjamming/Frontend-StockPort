import HeroSection from "@/_MainPage/components/HeroSection";
import HotPostsSection from "@/_MainPage/components/HotPostSection";
import MarketIndexSection from "@/_MainPage/components/MarketIndexSection";

const MainPage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <MarketIndexSection></MarketIndexSection>
      <HotPostsSection></HotPostsSection>
    </div>
  );
};

export default MainPage;
