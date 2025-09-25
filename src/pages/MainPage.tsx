import HeroSection from "@/_MainPage/components/HeroSection";
import HotPostsSection from "@/_MainPage/components/HotPostSection";
import MarketIndexSection from "@/_MainPage/components/MarketIndexSection";
import { MOCK_POSTS } from "@/_CommunityPage/datas/mockPosts";

const MainPage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <MarketIndexSection></MarketIndexSection>
      <HotPostsSection posts={MOCK_POSTS}></HotPostsSection>
    </div>
  );
};

export default MainPage;
