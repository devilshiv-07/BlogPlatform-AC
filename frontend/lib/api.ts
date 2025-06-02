import axios, { AxiosInstance, AxiosResponse } from "axios";

// Create Axios instance
export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Types for user request bodies
export interface AuthData {
  email: string;
  password: string;
}

// Type for post request bodies
export interface PostData {
  title: string;
  content: string;
  authorId: string | { email: string };
}

export interface Post extends PostData {
  id: string;
  createdAt: string;
  updatedAt: string;
}

// User Endpoints

export const login = (data: AuthData): Promise<AxiosResponse<{ token: string }>> =>
  api.post("/api/login", data);

export const signup = (data: AuthData): Promise<AxiosResponse<{ message: string }>> =>
  api.post("/api/register", data);

export const logout = (): Promise<AxiosResponse<{ message: string }>> =>
  api.post("/api/logout");

// Post Endpoints

export const createPost = (data: PostData): Promise<AxiosResponse<{ message: string; post: Post }>> =>
  api.post("/api/post", data);

export const getAllPosts = (): Promise<AxiosResponse<Post[]>> =>
  api.get("/api/posts");
