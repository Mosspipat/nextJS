import { dataPostList } from "@/mock";
import type { NextApiRequest, NextApiResponse } from "next";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const mockData = dataPostList.find((post) => {
    return post.id === Number(params.id);
  });

  return Response.json(mockData);
}
