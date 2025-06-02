import { getAllPosts } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { Post } from "@/lib/api"

const Home = async () => {
  const res = await getAllPosts();
  const posts: Post[] = res?.data || [];

  return (
    <section className="p-4">
      <h1 className="text-2xl font-bold mb-5 text-center text-orange-300">
        All Posts
      </h1>
      <div className="flex flex-col gap-6 mx-2 md:mx-10 lg:mx-16">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Home;
