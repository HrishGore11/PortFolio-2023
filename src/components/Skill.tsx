import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
  proficiency: number;
  name: string;
};

const Technology = ({ directionLeft, src, proficiency, name }: Props) => {
  return (
    <div className="group relative flex cursor-pointer justify-center">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src={src}
        className="rounded-full border border-[#5abbc1] object-cover w-10 h-10 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#5abbc1] h-10 w-10 md:h-10 md:w-10 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm font-[450] text-black opacity-100">{name}</p>
          <p className="text-lg font-[600] text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technology;
