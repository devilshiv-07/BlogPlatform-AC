// lib/api.ts
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
interface AuthData {
  email: string;
  password: string;
}

// Type for response data
interface ApiResponse<T> {
  data: T;
  status: number;
}

// Type for post request bodies
interface PostData {
  title: string;
  content: string;
  authorId: string;
}

interface Post extends PostData {
  createdAt: string;
  updatedAt: string;
}


// User Endpoints

// Login
export const login = (data: AuthData): Promise<AxiosResponse<any>> =>
  api.post("/api/login", data);
// SignUp
export const signup = (data: AuthData): Promise<AxiosResponse<any>> =>
  api.post("/api/register", data);
// Logout
export const logout = (): Promise<AxiosResponse<any>> =>
  api.post("/api/logout");


// Post Endpoints

// Create post 
export const createPost = (data: Post): Promise<AxiosResponse<any>> =>
  api.post("/api/post", data);
// Get Posts
export const getAllPosts = () => 
  api.get("/api/posts");