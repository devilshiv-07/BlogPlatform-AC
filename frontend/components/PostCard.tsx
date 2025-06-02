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
    <div className="border border-orange-300 rounded-xl py-4 px-10">
      <h2 className="text-xl text-orange-300 font-bold">{post.title}</h2>
      <p className="text-sm mt-1 text-orange-100">{post.content}</p>
      <p className="text-xs text-[#818181] mt-2">By: {authorEmail}</p>
    </div>
  );
}
