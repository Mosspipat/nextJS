import { DetailPost } from "@/mock";
import axios from "axios";
const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

export const getBlogs = async (): Promise<DetailPost[]> => {
  try {
    const res = await axios.get(`${localUrl}/api/blogs`);
    return res.data;
  } catch (error) {
    console.error("error fetch blogs:", error);
    return [];
  }
};
