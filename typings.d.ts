interface SanityBody {
  _updatedAt: string;
  _createdAt: string;
  _rev: string;
  _id: string;
}

export interface Social extends SanityBody {
  title: string;
  url: string;
  imageurl: string;
  _type: "social";
}

export interface PersonalInfo extends SanityBody {
  name: string;
  email: string;
  address: string;
  role: string;
  _type: "pageInfo";
  backgroundInfo: string;
  profilePic: string;
  heroImage: string;
  socials: Social;
}

export interface Skill extends SanityBody {
  progress: number;
  title: string;
  imageUrl: string;
  _type: "skill";
}

export interface Experience extends SanityBody {
  jobTitle: string;
  companyName: string;
  IsCurrentlyWorkingHere: boolean;
  companyImage: string;
  technologies: Skill[];
  dateStarted: string;
  dateEnded?: string;
  _type: "experience";
}

export interface Project extends SanityBody {
  technologies: Skill[];
  _type: "project";
  title: string;
  summary: string;
}
