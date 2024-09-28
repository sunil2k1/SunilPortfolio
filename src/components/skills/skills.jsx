import React from "react";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { skills } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import "./skill.css"

const FrontEndCard = () => {
  return(
<Tilt className=' xs:w-[350px]'>
<motion.div
variants={fadeIn("right", "spring")}
className='skillcard w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
>
  <div
options={{
max: 45,
scale: 1,
speed: 450,
}}
className=' bg-tertiary rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly  flex-col'
>
<h3 className='text-white text-[20px] font-bold text-center'>
Frontend
</h3>
<hr className="hrline"/>

{skills.frontend.map((skill, index) => (
<span className="p-1" key={index}>
<div className='mt-2 flex gap-10'>
  <img rounded className="skillImg m-1" src={skill.icon}/>
  <p className="textSkill">{skill.skillName}</p>
</div>
</span>
))}

</div>
</motion.div>
</Tilt>
  )
}



const BackEndCard = () => {
  return(
    <Tilt className=' xs:w-[350px]'>
          <motion.div
      variants={fadeIn("up", "spring")}
      className='skillcard w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
            <div
        options={{
          max: 50,
          scale: 1,
          speed: 600,
        }}
        className='bg-tertiary rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly  flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          Backend
        </h3>
        <hr className="hrline"/>
        
        {skills.backend.map((skill, index) => (
          <span className="p-1" key={index}>
          <div className='mt-2 flex gap-10'>
            <img rounded className="skillImg m-1" src={skill.icon}/>
            <p className="textSkill">{skill.skillName}</p>
          </div>
          </span>
          ))}
      
      </div>
    </motion.div>
    </Tilt>
  )
}

const DevToolsCard= () => {
  return(
    <Tilt className=' xs:w-[350px]'>
          <motion.div
      variants={fadeIn("left", "spring")}
      className='skillcard w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
            <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-6 px-12 min-h-[280px] flex justify-evenly  flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          Dev Tools
        </h3>
        <hr className="hrline"/>
        
        {skills.devtools.map((skill, index) => (
          <span className="p-1" key={index}>
          <div className='mt-2 flex gap-10'>
            <img rounded className="skillImg m-1" src={skill.icon}/>
            <p className="textSkill">{skill.skillName}</p>
          </div>
          </span>
          ))}
      
      </div>
    </motion.div>
    </Tilt>
  )
}

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <br />
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
          <FrontEndCard />
          <BackEndCard />
          <DevToolsCard />
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
