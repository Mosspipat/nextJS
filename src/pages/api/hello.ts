// pages/api/hello.js

import { dataPostList } from "@/mock";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Handling different HTTP methods
  if (req.method === "GET") {
    // Handle GET request
    // res.status(200).json({ message: "Hello, World! from GET method" });
    res.status(200).json(dataPostList);
    console.log("Hello, World! from GET method");
  } else if (req.method === "POST") {
    // Handle GET request
    res.status(200).json({ message: "Hello, World! from POST method" });
    console.log("Hello, World! from POST method");
  } else {
    // Handle other HTTP methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
