import { PersonalInfo } from "../../typings";

const fetchPersonalInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPersonalInfo`
  );
  const data = await res.json();
  const personalInfo: PersonalInfo[] = data?.personalInfo;
  return personalInfo;
};

export default fetchPersonalInfo;
