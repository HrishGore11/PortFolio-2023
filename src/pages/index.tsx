import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { Props } from "next/script";
import { PageInfo } from "next/dist/build/utils";
import {
  Experience,
  PersonalInfo,
  Project,
  Skill,
  Social,
} from "../../typings";
import fetchPersonalInfo from "@/utils/fetchPersonalInfo";
import fetchProjects from "@/utils/fetchProjects";
import fetchExperience from "@/utils/fetchExperience";
import fetchSocials from "@/utils/fetchSocials";
import fetchSkills from "@/utils/fetchSkills";

interface Home {
  personalInfo: PersonalInfo[];
  projects: Project[];
  experience: Experience[];
  skills: Skill[];
  socials: Social[];
}

export default function Home({
  personalInfo,
  projects,
  experience,
  skills,
  socials,
}: Home) {
  console.log("🚀 ~ file: index.tsx:41 ~ socials:", socials);
  console.log("🚀 ~ file: index.tsx:41 ~ skills:", skills);
  console.log("🚀 ~ file: index.tsx:41 ~ projects:", projects);
  console.log("🚀 ~ file: index.tsx:41 ~ personalInfo:", personalInfo);
  console.log("🚀 ~ file: index.tsx:41 ~ experience:", experience);
  const [welcome, setWelcome] = useState(0);

  if (welcome < 6) {
    setTimeout(() => {
      setWelcome(welcome + 1);
    }, 300);
  }
  const language = [
    "Hello",
    "नमस्कार",
    "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
    "নমস্কার",
    "வணக்கம்",
    "Consistency is the key",
  ];
  return (
    // <div className=" h-screen w-full overflow-y-scroll snap-y snap-proximity z-0 overflow-x-hidden scrollbar scrollbar-track-[#1c1d20] scrollbar-thumb-[#5abbc1]/80 scrollbar-thin">
    <>
      <TransitionEffect name={language[welcome]} />
      <section id="Header" className=" snap-start">
        <Header socials={socials} />
      </section>
      {/* <div>Hello</div> */}
      <section id="About" className="snap-start">
        <About />
      </section>

      <section id="Skills" className="snap-none">
        <Skills skills={skills} />
      </section>

      <section id="Projects" className=" snap-start">
        <Projects />
      </section>

      <section id="Contact" className=" snap-start">
        <Contact />
      </section>
      {/* </div> */}
    </>
  );
}

export const getStaticProps = async () => {
  const personalInfo: PersonalInfo[] = await fetchPersonalInfo();
  const projects: Project[] = await fetchProjects();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      personalInfo,
      projects,
      experience,
      skills,
      socials,
    },
    revalidate: 100,
  };
};
