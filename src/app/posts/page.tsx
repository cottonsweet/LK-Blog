import type { Metadata } from "next";

// service
import { getAllPosts } from "@/service/posts";

// Components
import FilterablePosts from "@/components/FilterablePosts";

export const metadata: Metadata = {
  title: "All Posts",
  description: "블로그의 포스트 게시판 입니다.",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return <FilterablePosts posts={posts} categories={categories} />;
}
