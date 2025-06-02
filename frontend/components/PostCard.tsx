import { Post } from "@/lib/api";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const authorEmail =
    typeof post.authorId === "object" && post.authorId !== null
      ? post.authorId.email
      : "Anonymous";

  return (
    <div className="border rounded p-4">
      <h2 className="text-lg font-bold">{post.title}</h2>
      <p className="text-sm text-gray-700">{post.content}</p>
      <p className="text-xs text-gray-500 mt-1">By: {authorEmail}</p>
    </div>
  );
}
