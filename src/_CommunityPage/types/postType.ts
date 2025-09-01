// 게시글 데이터 타입
export type Post = {
  id: number;
  category: "자유" | "질문" | "정보 공유";
  title: string;
  author: string;
  createdAt: string;
  views: number;
  likes: number;
};
