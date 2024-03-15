import { ParamBlogList } from "@/app/blog/type";
import { DetailPost, dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBlogs = ParamBlogList & NextApiRequest;

export async function GET(request: RequestBlogs) {
  console.log("getData");
  const url = new URL(request.url as string);
  const searchParams = new URLSearchParams(url.searchParams);

  const currentPage = parseInt(searchParams.get("currentPage") || "1");
  const itemPerPage = parseInt(searchParams.get("itemPerPage") || "10");
  console.log({ currentPage, itemPerPage });

  const startIndex = (currentPage - 1) * itemPerPage;
  console.log("🚀: ~ startIndex:", startIndex);
  const endIndex = startIndex + itemPerPage;

  const itemsInPage = (dataPostList: DetailPost[], currentPage: number) => {
    const allFindBlog = dataPostList;
  };

  itemsInPage(dataPostList, currentPage);

  // console.log("🚀: ~ itemsInPage:", itemsInPage);

  return Response.json(dataPostList);
}
