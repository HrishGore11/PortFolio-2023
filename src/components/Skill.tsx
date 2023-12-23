import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  src: string;
  proficiency: string;
  name: string;
};

const Skill = ({ directionLeft, src, proficiency, name }: Props) => {
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
        // src="https://static.wikia.nocookie.net/coding-help/images/0/02/174854.png/revision/latest?cb=20210514134203"
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
        // src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        // src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        // src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
        // src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
        // src="<a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a>"
        // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dreact&psig=AOvVaw3cFbtApXCgdNNe_QpPJ0lN&ust=1683795871832000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCICT68iy6v4CFQAAAAAdAAAAABAE"
        // src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_96102ac6497377cd53da621075fe828e/sanity.png"
        className="rounded-full border border-[#5abbc1] object-cover w-10 h-10 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#5abbc1] h-10 w-10 md:h-10 md:w-10 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-sm font-[450] text-black opacity-100">{name}</p>
          <p className="text-lg font-[600] text-black opacity-100">
            {proficiency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
