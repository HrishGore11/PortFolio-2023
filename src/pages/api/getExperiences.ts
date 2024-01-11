import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity";
import { Experience } from "../../../typings";
type Data = {
  experience: Experience[];
};
const query = groq`*[_type=="experience"]{
  ...,
  technologies[]->
     }`;

const getPersonalInfo = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const experience = await client.fetch<Experience[]>(query);
  res.status(200).json({ experience });
};

export default getPersonalInfo;
