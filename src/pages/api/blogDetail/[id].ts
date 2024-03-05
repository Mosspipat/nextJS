import { dataPostList } from "@/mock";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handleBlogDetail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  const mockData = dataPostList.find((post) => {
    return post.id === Number(id);
  });
  console.log("🚀: ~ mockData:", mockData);

  // res.end(`Post : ${id}`);
  res.status(200).json(mockData);
}
