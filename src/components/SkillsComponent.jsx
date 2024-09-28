import React from "react";
import { StarsCanvas } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import Skills from "./skills/skills";
import Certification from "./skills/certification";

const Banner = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=' p-8 rounded-2xl'
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <span className='text-[#915EFF]'> Skills </span> & Certification 
          </h1>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[850px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </motion.section>
  );
};


const SkillsComp= () => {
    return (
      <div>
        <Banner/>
        <StarsCanvas/>
        <Skills/>
        <Certification />
      </div>
    );
  };
  
  export default SkillsComp;