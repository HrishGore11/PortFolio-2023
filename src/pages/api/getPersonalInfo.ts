import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "../../../sanity";
import { PersonalInfo } from "../../../typings";
type Data = {
  personalInfo: PersonalInfo[];
};
const query = groq`*[_type=="pageInfo"]{
    ...,
     socials[]->
       }`;

const getPersonalInfo = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const personalInfo = await client.fetch<PersonalInfo[]>(query);
  res.status(200).json({ personalInfo });
};

export default getPersonalInfo;
