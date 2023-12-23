import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import "./Header.css";
import { animate, motion } from "framer-motion";
type Props = {};
export const CustomLink = ({ href, title, className, spanClassName }) => {
  return (
    <Link href={href} className={className}>
      {title}
      <span
        className={spanClassName}
        // className="bg-white opacity-0 transform scale-50 transition duration-800 delay-500 ease-out hover:opacity-100 hover:scale-100"
      >
        {" "}
      </span>

      {/* <motion.circle /> */}
      {/* <motion.div></motion.div> */}
    </Link>
  );
};

const Header = (props: Props) => {
  const constraintsRef = useRef(null);

  return (
    <div className="bg-[#a2d0d3] h-screen  w-full">
      <div className="top-0  w-full z-10 flex justify-between items-center p-5  max-w-7xl mx-auto bg-transparent overflow-hidden">
        <motion.div
          className="m-2 flex flex-row items-center"
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.6,
            duration: 1.5,
          }}
          ref={constraintsRef}
        >
          <motion.div
            className="font-[475] text-white text-xl w-fit cursor-pointer"
            // style={{
            //   width: "fit-content",
            //   fontSize: 50,
            // }}
            whileHover={{
              scale: 1,
              rotate: [0, 360],
              // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            transition={{
              delay: 1.6,

              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              // repeat: Infinity,
              // repeatDelay: 1
            }}
          >
            &#169;
          </motion.div>
          <h1
            className="font-[450] text-white text-xl mx-2"
            // drag
            // dragConstraints={constraintsRef}
            // dragSnapToOrigin
            // dragElastic={0.2}
          >
            Code by Hrishi
          </h1>
        </motion.div>
        <motion.div
          className="m-2 flex justify-between"
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            delay: 1.6,
          }}
        >
          <CustomLink
            href="#Projects"
            title="Work"
            className=" text-white text-xl mx-5 font-[450] relative group justify-center hover:text-[#5abbc1]"
            spanClassName="absolute w-[8px] h-[8px] opacity-0 transform  bg-white left-[45%] -bottom-3  group-hover:text-[#5abbc1]  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
          />
          <CustomLink
            href="#About"
            title="About"
            className="  text-white text-xl mx-5 font-[450] relative group justify-center hover:text-[#5abbc1]"
            spanClassName="absolute w-[8px] h-[8px] opacity-0 transform  bg-white left-[45%] -bottom-3  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
          />
          <CustomLink
            href="#Contact"
            title="Contact"
            className="  text-white text-xl mx-5 font-[450] relative group justify-center hover:text-[#5abbc1]"
            spanClassName="absolute w-[8px] h-[8px] opacity-0 transform  bg-white left-[45%] -bottom-3  group-hover:scale-100 group-hover:opacity-100 rounded-full transition-all easeOut duration-300 delay-100"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 1.6,
        }}
        className=" bg-black w-fit relative top-[20%] flex flex-row items-center justify-center rounded-r-[100px] p-5"
      >
        <div className="flex flex-col text-white text-lg mx-5">
          <span>Located in </span>
          {/* <span>in the</span> */}
          <span>the Pune, India</span>
        </div>
        <div className="text-white text-xl border-white bg-[#999d9e] rounded-[100px] ml-5">
          <Image
            src={require("../../public/animation_640_lgup0v8e.gif")}
            alt="my gif"
            height={70}
            style={{ borderRadius: 50, padding: "5px" }}
            width={70}
          />
        </div>
      </motion.div>
      <div className="marquee-w">
        <div className="marquee">
          <span>Hrishikesh Gore - Full Stack Developer -&nbsp;</span>
        </div>
        <div className="marquee marquee2">
          <span>Hrishikesh Gore - Full Stack Developer -&nbsp;</span>
        </div>

        {/* <marquee
          width="100%"
          direction="left"
          height="200px"
          className=" text-9xl text-white"
        >
          Hrishikesh Gore - Full Stack Developer - Hrishikesh Gore - Full Stack
          Developer
        </marquee> */}
      </div>
    </div>
  );
};

export default Header;

{
  /* <Link
            href="/work"
            className="text-[19]  text-white text-xl font-[450] px-5"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="text-[19]   text-white text-xl font-[450] px-5"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-[19]   text-white text-xl font-[450] px-5"
          >
            Contact
          </Link> */
}
