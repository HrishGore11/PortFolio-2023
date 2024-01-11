// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity";
import { Project } from "../../../typings";
type Data = {
  projects: Project[];
};
const query = groq`*[_type=="project"]{
    ...,
    technologies[]->
       }`;

const getProjects = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const projects = await client.fetch<Project[]>(query);
  res.status(200).json({ projects });
};

export default getProjects;
