import NavBar from "./components/NavBar"
import Hero from './components/Hero.jsx'
import Skills from './components/Skills' 
import Projects from './components/Projects.jsx'
import Footer from './components/Footer'

import "./styles/main.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <Footer />
      
    </>
  );
}

export default App;
