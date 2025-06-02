import { getAllPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";

const Home = async () => {
  const res = await getAllPosts();
  const posts = res?.data || [];

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">All Posts</h1>
      <div className="flex flex-col gap-4">
        {posts.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}

export default Home