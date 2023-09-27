import "../styles/hero.css"
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__image">
          <img src={rafpic} className="prof-pic"></img>
        </div>
        <div className="hero__text">
          <p className="about-me-txt">Hi, I'm Raphael. I have a strong passion for web development with experience in HTML, CSS, JavaScript, React, and React Native. Check out some of my work below!</p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
