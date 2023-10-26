import NavBar from "./components/NavBar";
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
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
      <Footer />
      
    </>
  );
}

export default App;
