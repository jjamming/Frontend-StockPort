// 게시글 데이터 타입
export type PostType = {
  id: number;
  category: "자유" | "질문" | "정보 공유";
  title: string;
  author: string;
  createdAt: string;
  views: number;
  likes: number;
};

// 인기 게시글용 타입 (기존 Post와 호환)
export type Post = {
  id: number;
  rank: number;
  title: string;
  author: string;
  ago: string;
  comments: number;
  likes: number;
  stockName?: string;
};
