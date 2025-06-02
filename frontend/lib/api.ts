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

// Final post structure returned by backend
export interface Post extends PostData {
  _id: string; // ✅ changed from id to _id
  createdAt: string;
  updatedAt: string;
}

// ========================
// User Endpoints
// ========================

// login
export const login = (data: AuthData): Promise<AxiosResponse<{ token: string }>> =>
  api.post("/api/login", data);

// signup
export const signup = (data: AuthData): Promise<AxiosResponse<{ message: string }>> =>
  api.post("/api/signup", data);

// logout
export const logout = (): Promise<AxiosResponse<{ message: string }>> =>
  api.post("/api/logout");

// ========================
// Post Endpoints
// ========================

// createPost
export const createPost = (
  data: PostData
): Promise<AxiosResponse<{ message: string; post: Post }>> =>
  api.post("/api/post", data);

// getAllPosts
export const getAllPosts = (): Promise<AxiosResponse<Post[]>> =>
  api.get("/api/posts");