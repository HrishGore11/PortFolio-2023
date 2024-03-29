import { Social } from "../../typings";

const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocialMediaPlatform`
  );
  const data = await res.json();
  const socials: Social[] = data?.socials;
  return socials;
};

export default fetchSocials;
