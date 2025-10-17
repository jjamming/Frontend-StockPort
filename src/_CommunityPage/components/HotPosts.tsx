import { ThumbsUp } from "lucide-react";
import type { Post } from "../types/postType";

interface HotPostsProps {
  posts: Post[];
}

const HotPosts = ({ posts }: HotPostsProps) => {
  // 추천수가 높은 순으로 정렬하여 상위 6개만 선택
  const popularPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 6);

  return (
    <aside className="bg-white/5 p-6 rounded-lg">
      <h3 className="mb-4 font-bold text-xl">실시간 인기 글 🔥</h3>
      <ul>
        {popularPosts.map((post, index) => (
          <li
            key={post.id}
            className="flex items-center gap-4 py-4 border-white/10 border-b last:border-none"
          >
            <span className="w-5 font-bold text-blue-400 text-lg">{index + 1}</span>
            <div className="flex-1 overflow-hidden">
              <p className="font-semibold hover:text-blue-400 truncate transition-colors cursor-pointer">
                {post.title}
              </p>
              <div className="flex items-center mt-2 text-gray-400 text-xs">
                <ThumbsUp className="mr-1.5 w-4 h-4" />
                <span>{post.likes}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default HotPosts;
