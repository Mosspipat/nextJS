import { dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request: Request) {
  return Response.json(dataPostList);
}
