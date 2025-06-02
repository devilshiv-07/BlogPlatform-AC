"use client";
import { useState } from "react";
import { login } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login({ email, password });
    router.push("/dashboard");
  };

  return (
    <div className="nav w-[350px] md:w-[400px] mx-auto bg-[#232323] my-30 sm:my-20 rounded-4xl py-14 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-14 text-orange-300">Login</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-orange-300 p-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-orange-300 p-2 rounded-xl"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 cursor-pointer rounded-xl">Login</button>
        <p className="flex gap-10 pb-4">
          Do not have an account? <a href="/signup" className="text-blue-600">Sign Up</a>
        </p>
      </form>
    </div>
    
  );
}