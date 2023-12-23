import React from "react";
import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";
type Props = {};

const About = (props: Props) => {
  return (
    <>
      {/* <TransitionEffect name="About" /> */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-[#1c1d20] flex flex-col text-white h-full relative overflow-hidden text-center md:text-left  max-w-full justify-evenly mx-auto items-center z-0"
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
          About
        </motion.h3>
        <div className="my-24 relative z-1 flex flex-col md:flex md:flex-row mx-auto max-w-7xl justify-evenly items-center">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-95 md:h-64 xl:w-[600px] xl:h-[500px]"
            src="https://media.licdn.com/dms/image/D5612AQGv2poeC2xTSw/article-cover_image-shrink_720_1280/0/1681221001203?e=2147483647&v=beta&t=G4YJkrfH4lBsobD4uvk8SwbOwVXOVlJWR6Fy98duLqs"
          />
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.2,
            }}
            className="space-y-10 px-0 my-10 md:px-10"
          >
            <h4 className="uppercase animate-pulse tracking-[10px] text-xl text-[#5abbc1]">
              Here is a little Background
            </h4>
            <p className="text-base">I am not your normal developer </p>
            <p className="text-base">
              I have always had a knack for technology and working with
              computers. In 2020 I started working on HTML & CSS to check how
              programming works. What I thought was just a single page of HTML
              and CSS turned into a love for a programming.
              <br />
              <br />
              Fascinated with how intricate programming can be I was quickly
              drawn to learn more. I started learning javaScript and was even
              more enthused with making websites interactive. I then started
              internship in Digikull as a Full Stack Developer. In November
              2022, I joined Polyglots & working as a Frontend Developer. I am
              now spending my time building projects with React JS, React
              Native, and learning various technologies
            </p>
          </motion.div>
        </div>
        <div className="w-full absolute top-[30%] bg-[#5abbc1]/10 left-0 h-[500px] -skew-y-12 z-0" />
      </motion.div>
    </>
  );
};

export default About;
