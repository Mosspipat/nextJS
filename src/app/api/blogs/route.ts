import { dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "GET") {
//     res.status(200).json(dataPostList);
//     console.log("Hello, World! from GET method");
//   } else if (req.method === "POST") {
//     res.status(200).json({ message: "Hello, World! from POST method" });
//     console.log("Hello, World! from POST method");
//   } else {
//     res.status(405).json({ message: "Method Not Allowed" });
//   }
// }

export async function GET(request: Request) {
  return Response.json(dataPostList);
}
