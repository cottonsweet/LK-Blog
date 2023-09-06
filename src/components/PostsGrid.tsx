import { Post } from "@/API/posts";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
}

export default function PostsGrid(props: Props) {
  return (
    <ul>
      {props.posts?.map((post, _) => (
        <li key={post.path}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
