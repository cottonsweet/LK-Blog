// API
import { getPostData } from "@/API/posts";

// Components
import MarkdownViewer from "@/components/MarkdownViewer";

interface Props {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return <MarkdownViewer content={post.content} />;
}
