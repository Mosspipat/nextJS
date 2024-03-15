import { DetailPost } from "@/mock";
import axios from "axios";
import { ParamBlogList } from "./type";
const localUrl = process.env.NEXT_PUBLIC_LOCAL_URL;

export const getBlogs = async ({ currentPage , itemPerPage  }:ParamBlogList): Promise<DetailPost[]> => {
  try {
    const res = await axios.get(`${localUrl}/api/blogs?currentPage=${currentPage}&itemPerPage=${itemPerPage}`);
    return res.data;
  } catch (error) {
    console.error("error fetch blogs:", error);
    return [];
  }
};
