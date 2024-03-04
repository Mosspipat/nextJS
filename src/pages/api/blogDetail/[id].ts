import type { NextApiRequest, NextApiResponse } from "next";

export default function handleBlogDetail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  res.end(`Post : ${id}`);
}
