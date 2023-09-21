import "../styles/hero.css"
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="prof-pic-wrapper">
        <img src={rafpic} className="prof-pic"></img>
      </div>
      <div className="about-me-wrapper">
        <p className="about-me-txt">Hi, I'm Raphael. I have a strong passion for web development with experience in HTML, CSS, JavaScript, React, and React Native. Check out some of my work below!</p>
      </div>
    </section>
  );
};

export default Hero;
