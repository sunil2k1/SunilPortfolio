import Navbar from "./Navbar";
import {HashRouter, Redirect} from 'react-router-dom'
import { Switch,Route} from 'react-router-dom'
import Home from "./HomeComponent";
import AboutMe from "./AboutMeComponent";
import Experience from "./ExperienceComponent";
import Skills from "./SkillsComponent";
import Footer from "./footer/footerComponent";

const App = () => {
  return (
    <div>
        <HashRouter basename='/'>
            <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/experience" component={Experience} />
                <Redirect to="/home" />
            </Switch>
            <Footer />
            </div>            
        </HashRouter>
    </div>        
  )
}

export default App



{/* <BrowserRouter>
<div className='relative z-0 bg-primary'>
  <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    <Navbar />
  </div>
  <Hero />
  <About />
  <Experience />
  <div className='relative z-0'>
    <Contact />
    <StarsCanvas />
  </div>
</div>
</BrowserRouter> */}
