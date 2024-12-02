import './App.css';
import Achievements from './sections/Achievements/Achievements';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Internships from './sections/Internships/Internships';
import Navbar from './sections/Navbar/Navbar';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Internships />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
