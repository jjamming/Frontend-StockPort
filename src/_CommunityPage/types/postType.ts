// 게시물 데이터 타입
export type Post = {
  id: number;
  rank: number;
  title: string;
  stockName?: string; // 연관된 종목명 (선택적)
  author: string;
  ago: string;
  comments: number;
  likes: number;
};
