// HotPostsSection.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, ThumbsUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { mockHotPosts } from "@/_CommunityPage/datas/mockHotPosts";

export default function HotPostsSection() {
  return (
    <div className="mx-auto px-6 lg:px-8 py-16 max-w-7xl">
      <Card className="bg-[#0A194E] border-gray-700 text-white">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="font-bold text-2xl">
            실시간 인기 게시물
          </CardTitle>
          <Link to="/community">
            <Button className="bg-parent hover:bg-[#000E37] text-gray-300 cursor-pointer">
              더보기 <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {mockHotPosts.map((post) => (
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
