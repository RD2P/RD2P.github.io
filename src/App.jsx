import NavBar from "./components/NavBar";
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer'

import "./styles/main.css";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <p className="thanks-for-visit">Thank you for visiting! This page is still under construction and will continue to get better each day.</p>
      <Footer />
      
    </>
  );
}

export default App;
