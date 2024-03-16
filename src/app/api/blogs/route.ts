import { ParamBlogList } from "@/app/blog/type";
import { DetailPost, dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBlogs = ParamBlogList & NextApiRequest;

export async function GET(request: RequestBlogs) {
  const url = new URL(request.url as string);
  const searchParams = new URLSearchParams(url.searchParams);

  const currentPage = parseInt(searchParams.get("currentPage") || "1");
  const itemPerPage = parseInt(searchParams.get("itemPerPage") || "10");
  console.log({ currentPage, itemPerPage });

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const itemsInPage = (
    dataPostList: DetailPost[],
    startIndex: number,
    endIndex: number
  ) => {
    var postListRequest = [];

    for (var i = startIndex; i < endIndex; i++) {
      postListRequest.push(dataPostList[i]);
    }

    return postListRequest;
  };

  const postRequest = itemsInPage(dataPostList, startIndex, endIndex);

  return Response.json(postRequest);
}
