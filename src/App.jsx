import { Routes, Route } from "react-router-dom"

import NavBar from "./components/NavBar"
import Home from "./pages/Home.jsx"
import Resume from './pages/Resume.jsx'
import Footer from './components/Footer'



import "./styles/main.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
