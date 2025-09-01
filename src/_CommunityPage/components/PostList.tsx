import React from "react";
import type { Post } from "../types/postType";

interface PostListProps {
  posts: Post[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <table className="w-full text-white border-collapse">
      <thead>
        <tr className="border-white/10 border-b">
          <th className="p-4 w-3/5 font-normal text-gray-400 text-sm text-left">
            제목
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-center">
            작성자
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-center">
            날짜
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-center">
            조회수
          </th>
          <th className="p-4 font-normal text-gray-400 text-sm text-center">
            추천
          </th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr
            key={post.id}
            className="hover:bg-white/5 border-white/10 border-b transition-colors"
          >
            <td className="p-4 font-bold hover:text-blue-400 cursor-pointer">
              {post.title}
            </td>
            <td className="p-4 text-gray-300 text-center">{post.author}</td>
            <td className="p-4 text-gray-400 text-center">
              {formatDate(post.createdAt)}
            </td>
            <td className="p-4 text-gray-400 text-center">
              {post.views.toLocaleString()}
            </td>
            <td className="p-4 text-gray-400 text-center">
              {post.likes.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PostList;
