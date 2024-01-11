// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity";
import { Social, PersonalInfo } from "../../../typings";
type Data = {
  socials: Social[];
};
const query = groq`*[_type=="social"]`;

const getSocialMediaPlatforms = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const socials = await client.fetch<Social[]>(query);
  res.status(200).json({ socials });
};

export default getSocialMediaPlatforms;
