import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  angular,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bootstrap,
  java,
  spring,
  maven,
  selenium,
  python,
  struts,
  junit,
  restapi,
  eclipse,
  mysql,
  vscode,
  micsql,
  postman,
  jenkins,
  jira,
  microsoft,
  redhat,
  hexaware
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "experience",
    title: "Experience",
  }
];

const services = [
  {
    title: "Java Fullstack Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Java Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const skills = {
  frontend: [
    {
      imgAltText: "HTML 5",
      icon: html,
      skillName: "HTML5",
    },
    {
      imgAltText: "CSS 3",
      icon: css,
      skillName: "CSS3",
    },
    {
      imgAltText: "JavaScript",
      icon: javascript  ,
      skillName: "JavaScript",
    },
    {
      imgAltText: "React JS",
      icon: reactjs,
      skillName: "React JS",
    },
    {
      imgAltText: "Angular",
      icon: angular,
      skillName: "Angular",
    },        
    {
      imgAltText: "TypeScript",
      icon: typescript  ,
      skillName: "Type Script",
    },
    {
      imgAltText: "Tailwind CSS",
      icon: tailwind,
      skillName: "Tailwind CSS",
    },
    {
      imgAltText: "Redux",
      icon:redux,
      skillName: "Redux",
    },
    
  ],

  backend: [
    {
      imgAltText: "Java",
      icon: java,
      skillName: "Java",
    },
    {
      imgAltText: "Spring boot",
      icon: spring,
      skillName: "Spring boot",
    },
    
    {
      imgAltText: "struts",
      icon: struts,
      skillName: "Struts",
    },
    {
      imgAltText: "Maven",
      icon: maven,
      skillName: "Maven",
    },

    {
      imgAltText: "selenium",
      icon: selenium,
      skillName: "Selenium",
    },

    {
      imgAltText: "junit",
      icon: junit,
      skillName: "JUnit",
    },    
    {
      imgAltText: "Rest API",
      icon: restapi,
      skillName: "Rest API",
    },
    {
      imgAltText: "Python",
      icon: python,
      skillName: "Python",
    },

  ],
  devtools: [
    {
      imgAltText: "GitHub",
      icon: git,
      skillName: "GitHub",
    },
    {
      imgAltText: "Eclipse IDE",
      icon: eclipse,
      skillName: "Eclipse IDE",
    },
    {
      imgAltText: "My SQL",
      icon: mysql,
      skillName: "My SQL",
    },
    {
      imgAltText: "vscode",
      icon: vscode,
      skillName: "VS Code",
    },
    {
      imgAltText: "micsql",
      icon: micsql,
      skillName: "Ms SQL Server",
    },
    {
      imgAltText: "jenkins",
      icon: jenkins,
      skillName: "Jenkins",
    },
    
    {
      imgAltText: "postman",
      icon: postman,
      skillName: "Postman",
    },
    
    {
      imgAltText: "jira",
      icon: jira,
      skillName: "Jira",
    },
    
    
    
  ],
};

const Certificates =[
  {
    link: "https://api.certificates.dev/certificates/9d0957c7-62d7-4f2b-9914-b73a0625c773/download?signature=6fdef7d9816b22f9cde2f2449f967fd0262e942b996fcedad6c85b6d9e9e744b",
    icon: angular,
    heading:"Angular",
    bottomtext:"Certified Junior Angular Developer",
  },

  {
    link: "https://verify.w3schools.com/1P70XED9QQ",
    icon: reactjs,
    heading:"React",
    bottomtext:"Certified React Developer",
  },
  {
    link: "https://api.badgr.io/public/assertions/vakLFYIGTwuQMdibNKGogw?identity__email=sunilkpr2k1%40gmail.com",
    icon: postman,
    heading:"Postman",
    bottomtext:"Postman API Fundamentals Student Expert certification",
  },  
  {
    link: "https://coursera.org/share/5f1b843c93c449d13959869d704f0d43",
    icon: reactjs,
    heading:"React",
    bottomtext:"Front-End Development with React - Cousera",
  },  
  
  {
    link: "https://learn.microsoft.com/api/credentials/share/en-us/SunilKumar-0898/D6DABF32F37E8333?sharingId",
    icon: microsoft,
    heading:"Microsoft",
    bottomtext:"Microsoft Certified: Azure Fundamentals",
  },  
  {
    link: "",
    icon: redhat,
    heading:"RedHat",
    bottomtext:"RedHat System Administrator",
  },    
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Fullstack Developer",
    company_name: "Hexaware",
    icon: hexaware,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Over the course of my work on the Primerica and Trustmark projects, Enhanced frontend using JSP as well as Reactjs and backend development in Java.",
      "I addressed service monitoring and critical issues, developed utilities, and managed access concerns while working night shifts to support US clients. ",
      "Additionally, converting java projects to Maven, resolving development production issues.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, skills, Certificates};
