import NavBar from "./components/NavBar";
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Note from './components/Note.jsx'
import Footer from './components/Footer'

import "./styles/main.css";

function App() {
  return (
    <>
      <NavBar />
      
      <main>
        <Hero />
        <Projects />

      </main>
      <Note />
      <Footer />
      
    </>
  );
}

export default App;
