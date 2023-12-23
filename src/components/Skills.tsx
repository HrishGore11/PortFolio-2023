import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const technology = [
    {
      name: "HTML",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714572/Portfolio_images/html_eecxhs.png",
      directionleft: true,
      proficiency: "100%",
    },
    {
      name: "CSS",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714538/Portfolio_images/css_okiren.png",
      directionleft: true,
      proficiency: "85%",
    },
    {
      name: "JavaScript",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714577/Portfolio_images/javascript_l778dx.png",
      directionleft: true,
      proficiency: "95%",
    },
    {
      name: "TypeScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      directionleft: true,
      proficiency: "75%",
    },
    {
      name: "React",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714595/Portfolio_images/react_tlg4qa.png",
      directionleft: true,
      proficiency: "100%",
    },
    {
      name: "Redux",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714602/Portfolio_images/redux_fqh9jx.png",
      directionleft: true,
      proficiency: "80%",
    },
    {
      name: "NextJs",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683715572/Portfolio_images/download_f9nzm1.png",
      directionleft: true,
      proficiency: "75%",
    },
    {
      name: "React Native",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714595/Portfolio_images/react_tlg4qa.png",
      directionleft: true,
      proficiency: "90%",
    },
    {
      name: "Tailwind",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683715045/Portfolio_images/Tailwind_CSS_Logo.svg_azdsev.png",
      directionleft: true,
      proficiency: "90%",
    },
    {
      name: "SCSS",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714607/Portfolio_images/sass_c2zmq1.png",
      directionleft: true,
      proficiency: "50%",
    },

    {
      name: "Node",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714588/Portfolio_images/node_dfjvm2.png",
      directionleft: false,
      proficiency: "80%",
    },
    {
      name: "ExpressJs",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716246/Portfolio_images/expressJs_zxlmwh.png",
      directionleft: false,
      proficiency: "70%",
    },
    {
      name: "Sanity",
      src: "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png",
      directionleft: false,
      proficiency: "50%",
    },

    {
      name: "Strapi",
      src: "data:image/png;base64,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",
      directionleft: false,
      proficiency: "80%",
    },
    {
      name: "Firebase",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716252/Portfolio_images/firebase_t39inv.png",
      directionleft: false,
      proficiency: "65%",
    },
    {
      name: "PostgreSql",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716248/Portfolio_images/postgres_ophxo7.png",
      directionleft: false,
      proficiency: "40%",
    },

    {
      name: "MongoDb",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716260/Portfolio_images/mongoDb_ufaruy.jpg",
      directionleft: false,
      proficiency: "80%",
    },

    {
      name: "MySql",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716257/Portfolio_images/mysql_pqpfiu.png",
      directionleft: false,
      proficiency: "60%",
    },
    {
      name: "Git",
      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683714561/Portfolio_images/git_dsfwav.png",
      directionleft: false,
      proficiency: "90%",
    },
    {
      name: "VSCode",

      src: "https://res.cloudinary.com/rossi1494/image/upload/v1683716801/Portfolio_images/vscode_krn291.png",
      directionleft: false,
      proficiency: "100%",
    },
  ];
  return (
    // <motion.div className="h-full text-center xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#1c1d20] text-white h-full relative  overflow-hidden  text-center md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <motion.h3
        initial={{
          //   x: -400,
          opacity: 0,
        }}
        whileInView={{
          //   x: 0,
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
        {/* <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill directionLeft={true} />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill /> */}
        {technology.map((tech, index) => (
          <Skill
            key={index}
            name={tech.name}
            src={tech.src}
            proficiency={tech.proficiency}
            directionLeft={tech.directionleft}
          />
        ))}
      </div>
      {/* <div className="w-full absolute top-[30%] bg-[#5abbc1]/10 left-0 h-[500px] -skew-y-12" /> */}
    </motion.div>
  );
};

export default Skills;
