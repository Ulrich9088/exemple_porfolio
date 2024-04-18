import Nav from './Components/Nav'
import Banner from './Components/Banner'
import Skills from './Components/Skills'
import Card from './Components/Card'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
const App = () => {
  return (
    <div className="bg-slate-100">
      <Nav/>
      <Banner/>
      <Skills/>
      <Card/>
      <About/>
      <Projects/>
      <Testimonial/>
      <Contact/>
      
    </div>
  );
};

export default App;