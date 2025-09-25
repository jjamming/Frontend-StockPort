// API 연동 전 임시 데이터
import type { Post } from "../types/postType";

export const mockHotPosts: Post[] = [
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
