import React from "react";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { Tilt } from "react-tilt";
import "./about.css";
import linkedin from "../../assets/company/linkedin.svg";
import github from "../../assets/company/github.svg";
import mail from "../../assets/company/mail.svg";

const ServiceCard = ({ index, title, icon }) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
          <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
            <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
                <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'>
      &nbsp;&nbsp; &nbsp;  I am a Java Full Stack Developer with over 2.8 years of experience in building 
      scalable and efficient web applications. My expertise lies in both frontend and backend development,
      leveraging technologies such as Java, Spring Boot, JSP, React.js, Struts, and SQL. I have a strong
      background in managing databases with Microsoft SQL Server and MySQL, alongside proficiency in
      development tools like Git, Maven, Eclipse, and Jira. My work involves problem-solving, code
      optimization, and ensuring high-quality project delivery, with a focus on Agile methodologies
      and REST services.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <br/>
        <br/>
        <br/>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'>
            &nbsp;&nbsp; &nbsp; A passionate and adaptable Software Engineer, I specialize in developing full-stack solutions.
            With over 2.8 years of experience, I have worked on various projects requiring backend API development,
             frontend UI enhancements, and database management. I take pride in my problem-solving abilities and
            attention to detail, having delivered robust solutions in critical production environments. My hands-on
            approach, along with certifications in React.js and Angular, enables me to stay up-to-date with the
            latest technologies, ensuring that I can contribute effectively to innovative projects.
      </motion.p>
      <div className="socilamedia">
        <div className="mb-9 flex justify-center">
                  <a className="mr-9 ">
                      <div class="tooltipin-container">
                      <div class="tooltipin">
                          <div class="profilein">
                          <div class="userin">
                              <div class="detailsin">
                              <div class="namein">User</div>
                              <div class="usernamein">@username</div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div class="textin">
                          <a class="iconin" href="#">
                          <div class="layerin">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="instagramSVG">
                              <svg
                                  fill="white"
                                  class="svgIconin"
                                  viewBox="0 0 448 512"
                                  height="1.5em"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                  <path
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                  ></path>
                              </svg>
                              </span>
                          </div>
                          <div class="textin">Instagram</div>
                          </a>
                      </div>
                      </div>
                  </a>
                  <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <div class="tooltipli-container">
                      <div class="tooltipli">
                          <div class="profileli">
                          <div class="userli">
                              <div class="detailsli">
                              <div class="nameli">User</div>
                              <div class="usernameli">@username</div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div class="textli">
                          <a class="iconli" href="/">
                          <div class="layerli">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="fab fa-linkedin">
                              <img src={linkedin} className="linkedinSVG imgli"/>
                              </span>
                          </div>
                          <div class="textli">LinkedIn</div>
                          </a>
                      </div>
                      </div>
                  </a>
                  <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <div class="tooltipgt-container">
                      <div class="tooltipgt">
                          <div class="profilegt">
                          <div class="usergt">
                              <div class="detailsgt">
                              <div class="namegt">User</div>
                              <div class="usernamegt">@username</div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div class="textgt">
                          <a class="icongt" href="#">
                          <div class="layergt">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="githubSVG">
                              <img src={github} className="githubSVG imggt"/>
                              </span>
                          </div>
                          <div class="textgt">Github</div>
                          </a>
                      </div>
                      </div>
                  </a>
                  <a className="mr-9 text-neutral-800 dark:text-neutral-200">
                  <div class="tooltipmail-container">
                      <div class="tooltipmail">
                          <div class="profilemail">
                          <div class="usermail">
                              <div class="detailsmail">
                              <div class="namemail">User</div>
                              <div class="usernamemail">@username</div>
                              </div>
                          </div>
                          </div>
                      </div>
                      <div class="textmail">
                          <a class="iconmail" href="#">
                          <div class="layermail">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              <span class="githubSVG">
                              <img src={mail} className="mailSVG imgmail"/>
                              </span>
                          </div>
                          <div class="textmail">Mail</div>
                          </a>
                      </div>
                      </div>
                  </a>                  
        </div>
      </div>
      <div className="resume">
      <motion.div variants={textVariant()}>
        <br/>
        <br/>
        <br/>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'>
            &nbsp;&nbsp; &nbsp; Download my resume to explore my skills, experience, and projects in detail
      </motion.p>
      <div className="downloadbuttond">
        <button class="botao">
          <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mysvg"><g id="SVGRepo_bgCarrier" stroke-width="0">
            </g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
              <g id="Interface / Download"> 
              <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              </path>
            </g> </g>
          </svg>
          <span class="texto">Download</span>
        </button>
       </div> 
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");