// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/blogs.json";
import { BlogsData } from "@/types";

export default function blogs(
  req: NextApiRequest,
  res: NextApiResponse<BlogsData>
) {
  res.status(200).json(data);
}
