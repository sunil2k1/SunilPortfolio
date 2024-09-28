import React from "react";
import { Experience,StarsCanvas } from "../components";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import "./about/experience.css";

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
          <span className='text-[#915EFF]'> Work & Projects</span> Experience
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

const ProjectExperience = () => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span'>
          &nbsp;
        </span>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionHeadText} text-center`}>Project Experience</p>
        </motion.div>
        <div class="notification">
          <div class="notiglow"></div>
          <div class="notiborderglow"></div>
          <div class="notititle">Primerica Project - Hexaware</div>
          <div class="notibody">
            <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Code Migration: Converted existing Java code for file backup processes to Python.
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Add/Delete Functionality: Implemented delete functionality in the user interface, Creating this new functionality in CURD operations in java and integrating with MySQL for database operations.
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                  Frond End Validation: Developed frontend validation using ReactJs.  </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Updating Services: Retrieved and processed service data from Microsoft SQL Server Database and updated the frontend using ReactJs.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                SQL Query Replacement: updated SQL queries for database management in WinSQL databases. </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                User Interface Enhancements: Added details and improved the user interface with HTML, JSP, CSS, and JavaScript.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
                Testing and Documentation: Conducted thorough testing and prepared comprehensive documentation for tasks.</li>
            </ul>      
            <br/>        
          </div>
        </div>
        <div class="notification">
          <div class="notiglow"></div>
          <div class="notiborderglow"></div>
          <div class="notititle">Trustmark Project - Hexaware</div>
          <div class="notibody">
          <ul className='mt-5 list-disc ml-5 space-y-2'>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Express Connect Application: Added new frontend options in React.js, processing the values via REST API, and integrated with Spring in java and store data in Microsoft Server Management studio
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              JUnit Testing: Conducted JUnit testing in java for the Express Connect application.
              </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              QA Automation: Completed QA Automation using selenium for Express Connect, As I’m quick learner, I learned QA automation testing quickly to fulfill this task  </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              G360 Access Issues: Resolving the access issue with permanent fix with the help of java and ReactJS.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Core Portal Production Issue: Addressed production issues in the Core Portal which is occurs in java backend and move the code changes quickly to Prod. </li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Maven Project Conversion: Converted the Customer Identification java application into a Maven project</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Imaging Web Service: Resolved issues with report deletion in React.js frontend and ensured synchronization with the database.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Audit Image Issue: Fixed JDBC java issues with data fetching in JSP page submissions.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Utility Creation: Created utilities to make the work easy and less time consuming and sharing these utilities to teammates to increase work efficiency.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Service Monitoring: Monitored ServiceNow ticketing tool and resolved P1/P2/P3/P4 issues without breaching SLA.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Knowledge Transfer: Provided knowledge transfer (KT) to new team members, supported various tasks.</li>
              <li className='text-white-100 text-[14px] pl-1 tracking-wider'>
              Worked in Night shift almost four months to support the US clients in US hours.</li>                                                                                
            </ul>   
            <br/>  
          </div>
        </div>
      </motion.section>
    </>
  )
}



const ExperienceComp= () => {
    return (
      <div>
        <Banner/>
        <StarsCanvas/>
        <Experience/>
        <ProjectExperience/>
      </div>
    );
  };
  
  export default ExperienceComp;