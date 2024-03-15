import { ParamBlogList } from "@/app/blog/type";
import { dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBlogs = ParamBlogList & NextApiRequest;

export async function GET(request: RequestBlogs) {
  console.log("getData");
  const url = new URL(request.url as string);
  const searchParams = new URLSearchParams(url.searchParams);

  const currentPage = parseInt(searchParams.get("currentPage") || "1");
  const itemPerPage = parseInt(searchParams.get("itemPerPage") || "10");
  console.log({ currentPage, itemPerPage });

  return Response.json(dataPostList);
}
