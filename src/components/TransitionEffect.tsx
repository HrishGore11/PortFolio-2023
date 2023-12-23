import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
type Props = {
  name: string;
};

const TransitionEffect = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const handleAnimationComplete = () => {
    setIsVisible(false);
  };
  // setTimeout(() => {
  //   do {
  //     setWelcome(welcome + 1);
  //   } while (welcome === 5);
  // }, [200]);
  
  return (
    <>
      <motion.div
        initial={{
          y: "100%",
          height: "100%",
          // borderBottomLeftRadius: "100%",
          // borderBottomRightRadius: "100%",
        }}
        animate={{
          y: "0%",
          height: "0%",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="fixed bottom-full  w-screen h-full z-30 bg-[#1c1d20] flex items-center justify-center "
      >
        {isVisible && (
          <motion.h1
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
            exit={{ opacity: 0 }}
            onAnimationComplete={handleAnimationComplete}
            className="text-6xl text-white"
          >
            <ul className=" list-disc">
              <li>{props.name}</li>
            </ul>
          </motion.h1>
        )}
      </motion.div>
    </>
  );
};

export default TransitionEffect;
