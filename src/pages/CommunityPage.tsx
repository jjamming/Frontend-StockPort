// src/pages/CommunityPage.tsx
import { useState, useEffect, useMemo } from "react";
import PostList from "../_CommunityPage/components/PostList";
import type { PostType } from "../_CommunityPage/types/postType";
import HotPosts from "../_CommunityPage/components/HotPosts";
import Pagination from "../components/Pagination";
import Title from "../components/Title";
import { MOCK_POSTS } from "../_CommunityPage/datas/mockPosts";

const ITEMS_PER_PAGE = 10;
const CATEGORIES = ["자유", "질문", "정보 공유"];

const CommunityPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<PostType[]>([]);
  const [activeCategory, setActiveCategory] = useState("자유");

  useEffect(() => {
    // TODO: 백엔드 API 호출
    setPosts(MOCK_POSTS);
  }, []);

  // 카테고리 변경 시 데이터 필터링 로직
  const filteredData = useMemo(() => {
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const currentItems = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="px-6 md:px-12 min-h-screen font-sans text-white">
      <Title title="커뮤니티"></Title>

      {/* 카테고리 필터 */}
      <div className="flex items-center gap-4 mb-6 border-white/10 border-b">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`py-3 px-2 text-md transition-colors duration-200 cursor-pointer ${
              activeCategory === category
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* 메인 컨텐츠 영역 5:2 그리드  */}
      <div className="gap-8 grid grid-cols-1 lg:grid-cols-[5fr_2fr">
        {/* 좌측: 게시글 목록 */}
        <main className="lg:col-[1]">
          <PostList posts={currentItems} />
        </main>

        {/* 우측: 실시간 인기 글 */}
        <div className="lg:col-[2]">
          <HotPosts posts={posts} />
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CommunityPage;
