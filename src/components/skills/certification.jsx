import React from "react";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import "./certification.css"
import { Certificates } from "../../constants/index";

const Certifications = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText} text-center`}>Certifications</h2>
        </motion.div>
        <div className='certificatelist mt-20 flex flex-wrap gap-10'>
        {Certificates.map((Certificate, index) => (
          <span className="p-1" key={index}>
            <div class="card">
              <img  rounded className="skillImg m-1" src={Certificate.icon}/>
              <p class="heading">
              {Certificate.heading}
              </p>
              <a className="text-dark text-decoration-none" href={Certificate.link} target="_blank" rel="noopener noreferrer">
              <p>{Certificate.bottomtext}
               </p>
               </a>
            </div>
          </span>
          ))}

        </div>
      </>
    );
  };

  export default SectionWrapper(Certifications, "certifications");
