// src/components/HotPostsSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Post } from "@/_CommunityPage/types/postType";

interface HotPostsSectionProps {
  posts: Post[]; // 외부에서 게시물 데이터를 props로 받습니다.
}

/**
 * ISO 형식의 날짜 문자열을 "X분 전", "X시간 전" 등으로 변환합니다.
 * @param dateString ISO 날짜 문자열
 * @returns 상대 시간 문자열
 */
const timeAgo = (dateString: string): string => {
  const now = new Date();
  const past = new Date(dateString);
  const seconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) return `${Math.floor(interval)}년 전`;
  interval = seconds / 2592000;
  if (interval > 1) return `${Math.floor(interval)}달 전`;
  interval = seconds / 86400;
  if (interval > 1) return `${Math.floor(interval)}일 전`;
  interval = seconds / 3600;
  if (interval > 1) return `${Math.floor(interval)}시간 전`;
  interval = seconds / 60;
  if (interval > 1) return `${Math.floor(interval)}분 전`;
  return "방금 전";
};

export default function HotPostsSection({ posts }: HotPostsSectionProps) {
  // 좋아요(likes) 순으로 내림차순 정렬 후 상위 5개만 선택
  const hotPosts = [...posts].sort((a, b) => b.likes - a.likes).slice(0, 5);

  return (
    <div className="mx-auto px-6 lg:px-8 py-16 max-w-7xl">
      <Card className="bg-[#0A194E] border-gray-700 text-white">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="font-bold text-2xl">
            실시간 인기 게시물
          </CardTitle>
          <Link to="/community">
            <Button
              variant="ghost"
              className="hover:bg-white/10 text-gray-300 hover:text-white"
            >
              더보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <ul>
            {hotPosts.map((post, index) => (
              <li
                key={post.id}
                className="flex justify-between items-center hover:bg-navy px-3 py-4 border-gray-800 border-b last:border-b-0 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  {/* rank: index를 사용해 1~5까지 순위 자동 생성 */}
                  <span className="w-8 font-bold text-blue-400 text-xl text-center">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {post.title}
                    </p>
                    {/* ago: timeAgo 함수로 동적 생성 */}
                    <p className="mt-1 text-gray-400 text-sm">
                      {post.author} ・ {timeAgo(post.createdAt)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="flex items-center">
                    <ThumbsUp className="mr-1.5 w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
