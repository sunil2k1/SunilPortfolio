import React from "react";
import { Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../components";
import About from "./AboutMeComponent";

const Home= () => {
    return (
      <div>
        <Hero />
        <About/>
      </div>
    );
  };
  
  export default Home;