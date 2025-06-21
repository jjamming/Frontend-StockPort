// HotPostsSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, ArrowRight } from "lucide-react";

// API로 받아올 게시물 데이터의 타입 정의
type Post = {
  id: number;
  rank: number;
  title: string;
  stockName?: string; // 연관된 종목명 (선택적)
  author: string;
  ago: string;
  comments: number;
  likes: number;
};

// API 연동 전 임시 데이터
const mockPosts: Post[] = [
  {
    id: 1,
    rank: 1,
    title: "제 포트폴리오의 MDD 방어 비결 공유합니다.",
    author: "수익률사냥꾼",
    ago: "5분 전",
    comments: 12,
    likes: 45,
  },
  {
    id: 2,
    rank: 2,
    title: "다들 다음 주 반도체 장 어떻게 보시나요?",
    stockName: "삼성전자",
    author: "테크개미",
    ago: "12분 전",
    comments: 31,
    likes: 41,
  },
  {
    id: 3,
    rank: 3,
    title: "이 사이트 백테스트 결과 정확도가 상당하네요.",
    author: "깐깐한평론가",
    ago: "28분 전",
    comments: 8,
    likes: 29,
  },
  {
    id: 4,
    rank: 4,
    title: "저PBR 관련주, 지금이라도 담아야 할까요?",
    author: "가치투자자",
    ago: "40분 전",
    comments: 25,
    likes: 22,
  },
  {
    id: 5,
    rank: 5,
    title: "신규 상장주 백테스트는 어떻게 돌려야 효율적일까요?",
    author: "새내기주주",
    ago: "1시간 전",
    comments: 5,
    likes: 18,
  },
];

export default function HotPostsSection() {
  return (
    <div className="mx-auto px-6 lg:px-8 py-16 max-w-7xl">
      <Card className="bg-[#0A194E] border-gray-700 text-white">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="font-bold text-2xl">
            실시간 인기 게시물
          </CardTitle>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            더보기 <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockPosts.map((post) => (
              <li
                key={post.id}
                className="flex justify-between items-center hover:bg-[#000E37] p-3 border-gray-800 border-b last:border-b-0 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-center">
                  <span className="w-8 font-bold text-blue-400 text-xl">
                    {post.rank}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-lg">
                      {post.title}
                      {post.stockName && (
                        <span className="bg-gray-700 ml-2 px-2 py-1 rounded-full font-medium text-gray-300 text-xs">
                          {post.stockName}
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-gray-400 text-sm">
                      {post.author} ・ {post.ago}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="flex items-center">
                    <MessageSquare className="mr-1.5 w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
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
