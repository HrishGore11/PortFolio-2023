import React from "react";
import { motion } from "framer-motion";
import Technology from "./Skill";
import { Skill } from "../../typings";
import skill from "../../portFolio/schemas/skill";

interface SkillProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillProps) => {
  const directionLeft = skills?.length / 2;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-[#1c1d20] text-white h-full relative  overflow-hidden  text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <motion.h3
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ duration: 1.5 }}
          className="mt-24 text-center  uppercase tracking-[20px] text-7xl font-[450]"
        >
          Skills
        </motion.h3>
        <h3 className="mt-10 uppercase   animate-pulse">
          Hover over a skill for current proficiency
        </h3>
        <div className="my-24 items-center justify-center  relative grid grid-cols-4-5rem gap-9">
          {skills.map((tech: Skill, index) => (
            <Technology
              key={tech?._id}
              name={tech?.title}
              src={tech?.imageUrl}
              proficiency={tech?.progress}
              directionLeft={directionLeft <= index ? false : true}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
