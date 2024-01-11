import { Experience } from "../../typings";

const fetchExperience = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`
  );
  const data = await res.json();
  const projects: Experience[] = data?.experience;
  return projects;
};

export default fetchExperience;
