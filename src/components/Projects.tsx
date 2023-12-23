import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="bg-[#1c1d20] text-white h-full relative  overflow-hidden  text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
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
        Projects
      </motion.h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-[#1c1d20] scrollbar-thumb-[#5abbc1]/80 scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center  md:m-24 h-full"
          >
            <motion.img
              initial={{
                y: -250,
                opacity: 0,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-[350] text-center">
                <span className="underline decoration-[#5abbc1]/50">
                  {" "}
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Netflix Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Netflix 2.0 app that has Login & Log Out Authentication with
                Google it has beautiful Home screen with all the movies looking
                just like Netflix. there is also a subsciption page where you
                can use your active monthly subscription. We also use Stripe
                Payments for the monthly Netflix Subscription
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#5abbc1]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
