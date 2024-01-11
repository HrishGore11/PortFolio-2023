// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity";
import { Social, PersonalInfo, Skill } from "../../../typings";
type Data = {
  skills: Skill[];
};
const query = groq`*[_type=="skill"]`;

const getSkills = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const skills = await client.fetch<Skill[]>(query);
  res.status(200).json({ skills });
};

export default getSkills;
