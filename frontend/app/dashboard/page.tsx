"use client";
import { useState } from "react";
import { createPost } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createPost({ title, content, authorId: "" });
    setTitle("");
    setContent("");
    router.push("/");
  };

  return (
    <div className="nav w-[350px] md:w-[400px] mx-auto bg-[#232323] my-30 sm:my-20 rounded-4xl py-14 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-14 text-orange-300">Create a Post</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-orange-300 p-2 rounded-xl"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="overflow-y-scroll scrollHide border border-orange-300 p-2 rounded-xl"
        />
        <button type="submit" className="bg-orange-300 text-white p-2 rounded-xl">Submit</button>
      </form>
    </div>
  );
}