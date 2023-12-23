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
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
    "Patience is the key",
  ];
  return (
    <div className=" h-screen w-full overflow-y-scroll snap-y snap-proximity z-0 overflow-x-hidden scrollbar scrollbar-track-[#1c1d20] scrollbar-thumb-[#5abbc1]/80 scrollbar-thin">
      <TransitionEffect name={language[welcome]} />
      <section id="Header" className=" snap-start">
        <Header />
      </section>
      {/* <div>Hello</div> */}
      <section id="About" className="snap-start">
        <About />
      </section>

      <section id="Skills" className="snap-none">
        <Skills />
      </section>

      <section id="Projects" className=" snap-start">
        <Projects />
      </section>

      <section id="Contact" className=" snap-start">
        <Contact />
      </section>

      {/* <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}> */}
      {/* <motion.div
          className="w-full"
          animate={{ x: ["-25%", "-125%"] }}
          transition={{ duration: 50, repeat: Infinity }}
          style={{ display: "inline-block" }}
        >
          Hrishikesh Gore
        </motion.div> */}
      {/* <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ display: "inline-block" }}
        >
          Hrishikesh Gore
        </motion.div> */}
      {/* </div> */}
    </div>
  );
}
